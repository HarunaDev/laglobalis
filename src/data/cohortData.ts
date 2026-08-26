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

export const installmentPlans: InstallmentPlan[] = [
    {
        id: "a1",
        title: "A1 Cohort",
        total: 280000,

        installments: [
            {
                title: "Installment 1",
                due: "Before August/September (Registration)",
                amount: 80000,
            },
            {
                title: "Installment 2",
                due: "Before October",
                amount: 70000,
            },
            {
                title: "Installment 3",
                due: "Before November",
                amount: 70000,
            },
            {
                title: "Installment 4",
                due: "Before January",
                amount: 60000,
            },
        ],
    },

    {
        id: "a2",
        title: "A2 Cohort",
        total: 350000,

        installments: [
            {
                title: "Installment 1",
                due: "Before September (Registration)",
                amount: 100000,
            },
            {
                title: "Installment 2",
                due: "Before October",
                amount: 90000,
            },
            {
                title: "Installment 3",
                due: "Before December",
                amount: 90000,
            },
            {
                title: "Installment 4",
                due: "Before February",
                amount: 70000,
            },
        ],
    },
];

export const timeline: TimelineItem[] = [
    {
        month: "AUGUST",
        title: "Registration Opens",
    },
    {
        month: "AUG WK 2",
        title: "Student Onboarding",
    },
    {
        month: "SEP WK 2",
        title: "Classes Begin",
    },
    {
        month: "DECEMBER",
        title: "Midpoint Review",
    },
    {
        month: "FEBRUARY",
        title: "Cohort Completion",
    },
];

export const included: IncludedItem[] = [
    {
        icon: "🎤",
        title: "Live Classes",
        description:
            "3 sessions weekly via Microsoft Teams with speaking & pronunciation training.",
    },

    {
        icon: "📚",
        title: "Learning Hub",
        description:
            "Google Classroom access — notes, PDFs, recordings, quizzes & vocabulary.",
    },

    {
        icon: "📝",
        title: "12 Modules",
        description:
            "Structured curriculum covering full A1 or A2 completion.",
    },

    {
        icon: "🎧",
        title: "Audio Resources",
        description:
            "Exclusive listening materials created for each module.",
    },

    {
        icon: "👥",
        title: "Community",
        description:
            "WhatsApp support group for reminders, support & student connection.",
    },

    {
        icon: "📖",
        title: "Storybooks",
        description:
            "Academy storybooks available for purchase.",
    },
];

export const policies: Policy[] = [
    {
        text: "First installment confirms your seat in the cohort.",
    },

    {
        text: "All payments are non-refundable once made.",
    },

    {
        text: "Subsequent installments are due before the stated month begins.",
    },

    {
        text: "Students must commit to 3 hours of class weekly.",
    },

    {
        text: "Slots are limited to a maximum of 10 students.",
    },

    {
        text: "Missed classes are not deducted from fees.",
    },

    {
        text: "Full upfront payment attracts a discounted rate.",
    },

    {
        text: "Certificate issued upon cohort completion.",
    },
];

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