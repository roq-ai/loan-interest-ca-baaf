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
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { financialAdvisorValidationSchema } from 'validationSchema/financial-advisors';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { FinancialAdvisorInterface } from 'interfaces/financial-advisor';

function FinancialAdvisorCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: FinancialAdvisorInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.financial_advisor.create({ data: values as RoqTypes.financial_advisor });
      resetForm();
      router.push('/financial-advisors');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<FinancialAdvisorInterface>({
    initialValues: {
      experience: 0,
      specialization: '',
      availability: '',
      rating: 0,
      user_id: (router.query.user_id as string) ?? null,
      company_id: (router.query.company_id as string) ?? null,
    },
    validationSchema: financialAdvisorValidationSchema,
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
              label: 'Financial Advisors',
              link: '/financial-advisors',
            },
            {
              label: 'Create Financial Advisor',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Financial Advisor
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Experience"
            formControlProps={{
              id: 'experience',
              isInvalid: !!formik.errors?.experience,
            }}
            name="experience"
            error={formik.errors?.experience}
            value={formik.values?.experience}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('experience', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.specialization}
            label={'Specialization'}
            props={{
              name: 'specialization',
              placeholder: 'Specialization',
              value: formik.values?.specialization,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.availability}
            label={'Availability'}
            props={{
              name: 'availability',
              placeholder: 'Availability',
              value: formik.values?.availability,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Rating"
            formControlProps={{
              id: 'rating',
              isInvalid: !!formik.errors?.rating,
            }}
            name="rating"
            error={formik.errors?.rating}
            value={formik.values?.rating}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('rating', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <AsyncSelect<CompanyInterface>
            formik={formik}
            name={'company_id'}
            label={'Select Company'}
            placeholder={'Select Company'}
            fetcher={() => roqClient.company.findManyWithCount({})}
            labelField={'name'}
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
              onClick={() => router.push('/financial-advisors')}
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
    entity: 'financial_advisor',
    operation: AccessOperationEnum.CREATE,
  }),
)(FinancialAdvisorCreatePage);
