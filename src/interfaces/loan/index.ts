import { PaymentScheduleInterface } from 'interfaces/payment-schedule';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface LoanInterface {
  id?: string;
  loan_type: string;
  loan_amount: number;
  interest_rate: number;
  loan_duration: number;
  user_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  payment_schedule?: PaymentScheduleInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {
    payment_schedule?: number;
  };
}

export interface LoanGetQueryInterface extends GetQueryInterface {
  id?: string;
  loan_type?: string;
  user_id?: string;
  company_id?: string;
}
