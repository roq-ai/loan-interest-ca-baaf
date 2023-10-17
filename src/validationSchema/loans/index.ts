import * as yup from 'yup';

export const loanValidationSchema = yup.object().shape({
  loan_type: yup.string().required(),
  loan_amount: yup.number().integer().required(),
  interest_rate: yup.number().integer().required(),
  loan_duration: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
