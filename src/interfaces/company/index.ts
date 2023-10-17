import { FinancialAdvisorInterface } from 'interfaces/financial-advisor';
import { LoanInterface } from 'interfaces/loan';
import { LoanOfficerInterface } from 'interfaces/loan-officer';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  established_date?: any;
  location?: string;
  sector?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  financial_advisor?: FinancialAdvisorInterface[];
  loan?: LoanInterface[];
  loan_officer?: LoanOfficerInterface[];
  user?: UserInterface;
  _count?: {
    financial_advisor?: number;
    loan?: number;
    loan_officer?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  sector?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
