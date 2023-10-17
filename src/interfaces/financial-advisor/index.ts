import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface FinancialAdvisorInterface {
  id?: string;
  user_id: string;
  experience?: number;
  specialization?: string;
  company_id: string;
  availability?: string;
  rating?: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface FinancialAdvisorGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  specialization?: string;
  company_id?: string;
  availability?: string;
}
