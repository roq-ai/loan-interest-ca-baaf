import * as yup from 'yup';

export const financialAdvisorValidationSchema = yup.object().shape({
  experience: yup.number().integer().nullable(),
  specialization: yup.string().nullable(),
  availability: yup.string().nullable(),
  rating: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
