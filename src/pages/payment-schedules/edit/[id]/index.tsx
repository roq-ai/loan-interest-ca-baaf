import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
  Center,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useRef, useMemo } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { useRoqClient, usePaymentScheduleFindFirst } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';
import { convertQueryToPrismaUtil } from 'lib/utils';
import { paymentScheduleValidationSchema } from 'validationSchema/payment-schedules';
import { PaymentScheduleInterface } from 'interfaces/payment-schedule';
import { LoanInterface } from 'interfaces/loan';

function PaymentScheduleEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const roqClient = useRoqClient();
  const queryParams = useMemo(
    () =>
      convertQueryToPrismaUtil(
        {
          id,
        },
        'payment_schedule',
      ),
    [id],
  );
  const { data, error, isLoading, mutate } = usePaymentScheduleFindFirst(queryParams, {}, { disabled: !id });
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: PaymentScheduleInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await roqClient.payment_schedule.update({
        data: values as RoqTypes.payment_schedule,
        where: {
          id,
        },
      });
      mutate(updated);
      resetForm();
      router.push('/payment-schedules');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<PaymentScheduleInterface>({
    initialValues: data,
    validationSchema: paymentScheduleValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Payment Schedules',
              link: '/payment-schedules',
            },
            {
              label: 'Update Payment Schedule',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Payment Schedule
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl id="due_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Due Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.due_date ? new Date(formik.values?.due_date) : null}
              onChange={(value: Date) => formik.setFieldValue('due_date', value)}
            />
          </FormControl>

          <NumberInput
            label="Due Amount"
            formControlProps={{
              id: 'due_amount',
              isInvalid: !!formik.errors?.due_amount,
            }}
            name="due_amount"
            error={formik.errors?.due_amount}
            value={formik.values?.due_amount}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('due_amount', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <FormControl id="payment_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Payment Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.payment_date ? new Date(formik.values?.payment_date) : null}
              onChange={(value: Date) => formik.setFieldValue('payment_date', value)}
            />
          </FormControl>

          <NumberInput
            label="Payment Amount"
            formControlProps={{
              id: 'payment_amount',
              isInvalid: !!formik.errors?.payment_amount,
            }}
            name="payment_amount"
            error={formik.errors?.payment_amount}
            value={formik.values?.payment_amount}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('payment_amount', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Balance"
            formControlProps={{
              id: 'balance',
              isInvalid: !!formik.errors?.balance,
            }}
            name="balance"
            error={formik.errors?.balance}
            value={formik.values?.balance}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('balance', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<LoanInterface>
            formik={formik}
            name={'loan_id'}
            label={'Select Loan'}
            placeholder={'Select Loan'}
            fetcher={() => roqClient.loan.findManyWithCount({})}
            labelField={'loan_type'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/payment-schedules')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'payment_schedule',
    operation: AccessOperationEnum.UPDATE,
  }),
)(PaymentScheduleEditPage);
