import { LoanInterface } from 'interfaces/loan';
import { GetQueryInterface } from 'interfaces';

export interface PaymentScheduleInterface {
  id?: string;
  loan_id: string;
  due_date: any;
  due_amount: number;
  payment_date?: any;
  payment_amount?: number;
  balance?: number;
  created_at?: any;
  updated_at?: any;

  loan?: LoanInterface;
  _count?: {};
}

export interface PaymentScheduleGetQueryInterface extends GetQueryInterface {
  id?: string;
  loan_id?: string;
}
