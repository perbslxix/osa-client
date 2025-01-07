export interface MembersType{
    name:string;
    position:string;
    contactNumber:string;
    studentNumber:string;
}

export interface ActivityType{
    activity:string;
    learningOutcome:string;
    targetTime:string;
    targetGroup:string;
    personsInvolved:string;
}

export interface FinancialReportsType{
    title:string;
    dateAndTime:string;
    totalBudget:string;
}

export interface AccreditationType{
    constitutionsAndByLaws:string;
    organizationName:string;
    type:string;
    members:Array<MembersType>;
    planActivities:Array<ActivityType>;
    letter:string;
    appendices:string;
}