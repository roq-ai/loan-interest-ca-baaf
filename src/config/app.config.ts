interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Financial Advisor'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Loan Officer', 'Financial Advisor'],
  tenantName: 'Company',
  applicationName: 'Loan Interest Calculator Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View personal user information',
    'View loan details',
    'View payment schedule',
    'Communicate with financial advisors and loan officers',
  ],
  ownerAbilities: [
    'Manage financial advisor information',
    'Manage loan information',
    'Manage company information',
    'Manage user information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/7fe99c0f-28e5-42ee-bb55-7eee1ed4b1a6',
};
