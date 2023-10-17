import * as yup from 'yup';

export const loanOfficerValidationSchema = yup.object().shape({
  experience: yup.number().integer().nullable(),
  availability: yup.string().nullable(),
  rating: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
