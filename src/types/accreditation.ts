  export interface MembersType {
    email: string
    name: string;
    position: string;
    contactNumber: string;
    studentNumber: string;
  }
  
  export interface ActivityType {
    activity: string;
    learningOutcome: string;
    targetTime: string;
    targetGroup: string;
    personsInvolved: string;
  }
  
  export interface FinancialReportsType {
    title: string;
    dateAndTime: string;
    totalBudget: string;
    source: string;
    particulars: string;
    items: string;
    quantity: string;
    unitPrice: string;
    amount: string;
    receipt: string;
  }

  export interface AccomplishmentReportsType {
    title: string;
    date: string; 
    venue: string; 
    participants: string; 
    speaker: string; 
    body: string; 
  }
  
  export interface AccreditationType {
    constitutionsAndByLaws: string;
    organizationName: string;
    type: string;
    members: Array<MembersType>;
    planActivities: Array<ActivityType>;
    letter: string;
    appendices: string;
    membersFile: string;
    planFile: string; 
  }

  export interface reAccreditationType {
    // organizationName: string;
    // type: string; 
    members: Array<MembersType>;
    accomplishmentReports: Array<AccomplishmentReportsType>;
    financialReports: Array<FinancialReportsType>;
    planActivities: Array<ActivityType>;
    letter: string; 
    appendices: string; 
    membersFile: string;
    plansFile: string; 
  }
  
  // DONT TOUCH PLS
  // export interface SourceOfFundsType {
  //   source: string;
  //   particulars: string;
  // }
  
  // export interface BudgetAllocationType {
  //   items: string;
  //   quantity: string;
  //   unitPrice: string;
  //   amount: string;
  //   receipt: string;
  // }