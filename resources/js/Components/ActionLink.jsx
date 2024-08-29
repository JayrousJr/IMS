import { Link } from '@inertiajs/react'
import React from 'react'

const ActionLink = ({children,href}) => {
  return (
    <Link className='bg-primary text-dark-200 rounded-3xl font-bold gap-1 px-6 py-2 hover:opacity-90 duration-300' href={route(`${href}`)}>
    {children}
    </Link>
  )
}

export default ActionLink