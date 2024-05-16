'use client'

import Head from 'next/head';

import {redirect, usePathname} from 'next/navigation';


export default function RootPage() {
    const pathname = usePathname()
    console.log(pathname)
    if(pathname.includes('crm')){
        return(
            <div className='text-black'>
                request...
            </div>
        )
    } else {
        redirect('/pl')
    }
}