export interface Program {
    id: string;
    level: string;
    title: string;
    description: string;
    investment: number;
    duration: string;
    sessionsPerWeek: number;
    hoursPerSession: string;
    totalHours: string;
    classSize: string;
    ratePerHour: string;

    payInFull?: {
        amount: number;
        save: number;
    };
}

export interface Installment {
    title: string;
    due: string;
    amount: number;
}

export interface InstallmentPlan {
    id: string;
    title: string;
    total: number;
    installments: Installment[];
}

export interface TimelineItem {
    month: string;
    title: string;
}

export interface IncludedItem {
    icon: string;
    title: string;
    description: string;
}

export interface Policy {
    text: string;
}