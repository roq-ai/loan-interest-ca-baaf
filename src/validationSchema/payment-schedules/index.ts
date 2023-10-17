import * as yup from 'yup';

export const paymentScheduleValidationSchema = yup.object().shape({
  due_date: yup.date().required(),
  due_amount: yup.number().integer().required(),
  payment_date: yup.date().nullable(),
  payment_amount: yup.number().integer().nullable(),
  balance: yup.number().integer().nullable(),
  loan_id: yup.string().nullable().required(),
});
