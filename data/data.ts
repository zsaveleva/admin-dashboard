import { IAdditionalID } from "@/components/Sidebar"

interface IName {
    first: string
    last: string
}

interface IBasicInfo {
    name: IName
    date: string
}

export interface IOrder extends IBasicInfo {
    total: number
}

export interface ICustomer extends IBasicInfo {
    method: string
}

export interface IAdditionalOrder extends IOrder, ICustomer {
    status: string
}

interface IData extends IAdditionalOrder, IAdditionalID { }

export const data: IData[] = [
    {
        id: 1,
        name: {
            first: 'John',
            last: 'Smith',
        },
        total: 2795.95,
        status: 'On Hold',
        method: 'PayPal',
        date: '15 Minutes ago',
    },
    {
        id: 2,
        name: {
            first: 'Chris',
            last: 'Adams',
        },
        total: 1195.95,
        status: 'Processing',
        method: 'PayPal',
        date: '23 Minutes ago',
    },
    {
        id: 3,
        name: {
            first: 'Sarah',
            last: 'Smith',
        },
        total: 495.85,
        status: 'Completed',
        method: 'Visa',
        date: '1 Hour ago',
    },
    {
        id: 4,
        name: {
            first: 'Joseph',
            last: 'Choo',
        },
        total: 150.45,
        status: 'Processing',
        method: 'MasterCard',
        date: '1 Hour ago',
    },
    {
        id: 5,
        name: {
            first: 'Steve',
            last: 'Harding',
        },
        total: 175.25,
        status: 'On Hold',
        method: 'PayPal',
        date: '2 Hour ago',
    },
    {
        id: 6,
        name: {
            first: 'Laura',
            last: 'Croft',
        },
        total: 1295.75,
        status: 'Completed',
        method: 'Check',
        date: '3 Hour ago',
    },
    {
        id: 7,
        name: {
            first: 'Michael',
            last: 'Jones',
        },
        total: 89.95,
        status: 'Completed',
        method: 'MasterCard',
        date: '3 Hour ago',
    },
    {
        id: 8,
        name: {
            first: 'James',
            last: 'Bond',
        },
        total: 689.45,
        status: 'Completed',
        method: 'Visa',
        date: '7 Hour ago',
    },
    {
        id: 9,
        name: {
            first: 'Haley',
            last: 'Whiting',
        },
        total: 14.99,
        status: 'Completed',
        method: 'PayPal',
        date: '1 Day ago',
    },
    {
        id: 10,
        name: {
            first: 'Tim',
            last: 'Thomas',
        },
        total: 218.99,
        status: 'Completed',
        method: 'MasterCard',
        date: '1 Day ago',
    }
]
