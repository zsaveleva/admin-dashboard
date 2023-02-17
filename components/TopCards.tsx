import React, { FC } from 'react'
import { IAdditionalID, IClassName } from './Sidebar'

interface ITopCard extends IClassName {
    value: string
    text: string
    percent: string
}

interface IAdditionalTopCard extends ITopCard, IAdditionalID { }

const Card: FC<ITopCard> = ({ value, text, percent, className }): JSX.Element => {
    return (
        <div className={className}>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>
                    {value}
                </p>
                <p className='text-gray-600'>
                    {text}
                </p>
            </div>
            <p className='bg-green-200 flex jusify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>
                    {percent}
                </span>
            </p>
        </div>
    )
}

const topCardInfo: IAdditionalTopCard[] = [
    {
        id: 1,
        value: '$10,700',
        text: 'Per day',
        percent: '+18%',
        className: 'lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'
    },
    {
        id: 2,
        value: '$1,437,876',
        text: 'For all the time',
        percent: '+25%',
        className: 'lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'
    },
    {
        id: 3,
        value: '17,437',
        text: 'Customers',
        percent: '+10%',
        className: ' bg-white flex justify-between w-full border p-4 rounded-lg'
    }
]

export const TopCards: FC = () => {
    return (
        <div className='grid lg:grid-cols-5 gap-4 p-4'>
            {topCardInfo.map((el) => {
                return (
                    <Card
                        key={el.id}
                        value={el.value}
                        text={el.text}
                        percent={el.percent}
                        className={el.className}
                    />
                )
            })}
        </div>
    )
}
