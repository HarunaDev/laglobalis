import {
    IncludedItem,
    InstallmentPlan,
    Policy,
    Program,
    TimelineItem,
} from "../types/cohort";

export const programmes: Program[] = [
    {
        id: "a1",
        level: "A1 Cohort",
        title: "Débutant",
        description: "Zero to A1 Completion\nFor absolute beginners",

        investment: 280000,

        payInFull: {
            amount: 260000,
            save: 20000,
        },

        duration: "6 Months",
        sessionsPerWeek: 3,
        hoursPerSession: "1 Hour",
        totalHours: "~72 Hours",
        classSize: "4–10 Students",
        ratePerHour: "₦4,000",
    },

    {
        id: "a2",

        level: "A2 Cohort",

        title: "Élémentaire",

        description: "A1 to A2 Completion\nFor continuing learners",

        investment: 350000,

        payInFull: {
            amount: 320000,
            save: 30000,
        },

        duration: "6 Months",
        sessionsPerWeek: 3,
        hoursPerSession: "1 Hour",
        totalHours: "~72 Hours",
        classSize: "4–10 Students",
        ratePerHour: "₦5,000",
    },
];

export const installmentPlans: InstallmentPlan[] = [];

export const timeline: TimelineItem[] = [];

export const included: IncludedItem[] = [];

export const policies: Policy[] = [];

export const cohortData = {
    academy: "LA GLOBALIS LUMIÈRE FRENCH ACADEMY",

    cohort: {
        title: "Cohort One",
        subtitle: "August 2026",
        description: "Programme Investment & Structure",
    },

    programmes,

    installmentPlans,

    timeline,

    included,

    policies,
};