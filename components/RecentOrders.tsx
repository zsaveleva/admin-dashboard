import React, { FC } from 'react'
import { data, IOrder } from '../data/data'

const OrderCard: FC<IOrder> = ({ name, total, date }): JSX.Element => {
  return (
    <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
      <div className='bg-purple-100 rounded-lg p-3'>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 7.5C20 6.83696 19.7366 6.20107 19.2678 5.73223C18.7989 5.26339 18.163 5 17.5 5H15C15 3.67392 14.4732 2.40215 13.5355 1.46447C12.5979 0.526784 11.3261 0 10 0C8.67392 0 7.40215 0.526784 6.46447 1.46447C5.52678 2.40215 5 3.67392 5 5H2.5C1.83696 5 1.20107 5.26339 0.732233 5.73223C0.263392 6.20107 0 6.83696 0 7.5L0 15.8333C0.00132321 16.938 0.440735 17.997 1.22185 18.7782C2.00296 19.5593 3.062 19.9987 4.16667 20H15.8333C16.938 19.9987 17.997 19.5593 18.7782 18.7782C19.5593 17.997 19.9987 16.938 20 15.8333V7.5ZM6.66667 5C6.66667 4.11594 7.01786 3.2681 7.64298 2.64298C8.2681 2.01786 9.11594 1.66667 10 1.66667C10.8841 1.66667 11.7319 2.01786 12.357 2.64298C12.9821 3.2681 13.3333 4.11594 13.3333 5H6.66667Z" fill="#6B21A8" />
        </svg>
      </div>
      <div className='pl-4'>
        <p className='text-gray-800 font-bold'>
          ${total}
        </p>
        <p className='text-gray-400 text-sm'>
          {name.first}
        </p>
      </div>
      <p className='lg:flex md:hidden absolute right-6 text-sm'>
        {date}
      </p>
    </li >
  )
}

export const RecentOrders: FC = () => {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-y-scroll'>
      <h1>Recent Orders </h1>
      <ul>
        {data.map((order) => {
          return (
            <OrderCard
              key={order.id}
              total={order.total}
              name={order.name}
              date={order.date}
            />
          )
        })}
      </ul>
    </div>
  )
}
