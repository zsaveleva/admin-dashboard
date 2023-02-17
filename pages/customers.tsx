import { data, ICustomer } from '@/data/data'
import React, { FC } from 'react'

const CustomerCard: FC<ICustomer> = ({ name, date, method }): JSX.Element => {
    return (
        <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <div className='flex items-center'>
                <div className='bg-purple-100 p-3 rounded-lg'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z" fill="#6B21A8" />
                        <path d="M10 11.6667C5.85977 11.6714 2.50461 15.0265 2.5 19.1667C2.5 19.627 2.87309 20.0001 3.33332 20.0001H16.6666C17.1269 20.0001 17.5 19.627 17.5 19.1667C17.4954 15.0265 14.1402 11.6713 10 11.6667Z" fill="#6B21A8" />
                    </svg>
                </div>
                <p className='pl-4'>{name.first + ' ' + name.last}</p>
            </div>
            <p className='text-gray-600 sm:text-left text-right'>{name.first}@gamil.com</p>
            <p className='hidden md:flex'>{date}</p>
            <p>{method}</p>
        </li>
    )
}

const customers: FC = () => {
    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='flex justify-between p-4'>
                <h2>Customers</h2>
            </div>
            <div className='p-4'>
                <div className='w-full m-auto p-4 rounded-lg bg-white overflow-y-auto'>
                    <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                        <span>Name</span>
                        <span className='sm:text-left text-right'>Email</span>
                        <span className='hidden md:grid'>Last Order</span>
                        <span className='hidden sm:grid'>Method</span>
                    </div>
                    <ul>
                        {data.map((order) => {
                            return (
                                <CustomerCard
                                    key={order.id}
                                    name={order.name}
                                    date={order.date}
                                    method={order.method}
                                />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default customers
