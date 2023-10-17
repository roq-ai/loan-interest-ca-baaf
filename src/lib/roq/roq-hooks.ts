/* eslint-disable */
import useSWR from 'swr';
import type { Prisma } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';
import { useRoqClient } from './roq-client-provider';
import { SWRRequestOptions, RequestOptions } from './roq-sdk';

export function useCompanyFindMany<
  T extends Prisma.companyFindManyArgs,
  R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCompanyFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.company.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCompanyCount<T extends Prisma.companyCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.companyCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCompanyCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.company.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCompanyFindManyWithCount<
  T extends Prisma.companyFindManyArgs,
  R extends { data: GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCompanyFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.company.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCompanyFindFirst<
  T extends Prisma.companyFindFirstArgs,
  R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.companyFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCompanyFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.company.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useFinancialAdvisorFindMany<
  T extends Prisma.financial_advisorFindManyArgs,
  R extends GetFindResult<Prisma.$financial_advisorPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.financial_advisorFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useFinancialAdvisorFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.financial_advisor.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useFinancialAdvisorCount<T extends Prisma.financial_advisorCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.financial_advisorCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useFinancialAdvisorCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.financial_advisor.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useFinancialAdvisorFindManyWithCount<
  T extends Prisma.financial_advisorFindManyArgs,
  R extends { data: GetFindResult<Prisma.$financial_advisorPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.financial_advisorFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useFinancialAdvisorFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.financial_advisor.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useFinancialAdvisorFindFirst<
  T extends Prisma.financial_advisorFindFirstArgs,
  R extends GetFindResult<Prisma.$financial_advisorPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.financial_advisorFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useFinancialAdvisorFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.financial_advisor.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useLoanFindMany<
  T extends Prisma.loanFindManyArgs,
  R extends GetFindResult<Prisma.$loanPayload<DefaultArgs>, T>[],
>(args?: Prisma.SelectSubset<T, Prisma.loanFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useLoanFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.loan.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useLoanCount<T extends Prisma.loanCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.loanCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useLoanCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.loan.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useLoanFindManyWithCount<
  T extends Prisma.loanFindManyArgs,
  R extends { data: GetFindResult<Prisma.$loanPayload<DefaultArgs>, T>[]; count: number },
>(args?: Prisma.SelectSubset<T, Prisma.loanFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useLoanFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.loan.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useLoanFindFirst<
  T extends Prisma.loanFindFirstArgs,
  R extends GetFindResult<Prisma.$loanPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.loanFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useLoanFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.loan.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useLoanOfficerFindMany<
  T extends Prisma.loan_officerFindManyArgs,
  R extends GetFindResult<Prisma.$loan_officerPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.loan_officerFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useLoanOfficerFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.loan_officer.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useLoanOfficerCount<T extends Prisma.loan_officerCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.loan_officerCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useLoanOfficerCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.loan_officer.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useLoanOfficerFindManyWithCount<
  T extends Prisma.loan_officerFindManyArgs,
  R extends { data: GetFindResult<Prisma.$loan_officerPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.loan_officerFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useLoanOfficerFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.loan_officer.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useLoanOfficerFindFirst<
  T extends Prisma.loan_officerFindFirstArgs,
  R extends GetFindResult<Prisma.$loan_officerPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.loan_officerFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useLoanOfficerFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.loan_officer.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function usePaymentScheduleFindMany<
  T extends Prisma.payment_scheduleFindManyArgs,
  R extends GetFindResult<Prisma.$payment_schedulePayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.payment_scheduleFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['usePaymentScheduleFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.payment_schedule.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function usePaymentScheduleCount<T extends Prisma.payment_scheduleCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.payment_scheduleCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['usePaymentScheduleCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.payment_schedule.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function usePaymentScheduleFindManyWithCount<
  T extends Prisma.payment_scheduleFindManyArgs,
  R extends { data: GetFindResult<Prisma.$payment_schedulePayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.payment_scheduleFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['usePaymentScheduleFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.payment_schedule.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function usePaymentScheduleFindFirst<
  T extends Prisma.payment_scheduleFindFirstArgs,
  R extends GetFindResult<Prisma.$payment_schedulePayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.payment_scheduleFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['usePaymentScheduleFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.payment_schedule.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindMany<
  T extends Prisma.userFindManyArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
>(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserCount<T extends Prisma.userCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindManyWithCount<
  T extends Prisma.userFindManyArgs,
  R extends { data: GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]; count: number },
>(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindFirst<
  T extends Prisma.userFindFirstArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
