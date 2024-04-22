import Link from 'next/link'
 
export default function NotFoundPage() {
  return (
    <div className='h-svh flex items-center justify-center text-black'>
      <Link href="/">Return Home</Link>
    </div>
  )
}