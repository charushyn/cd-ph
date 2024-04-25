import { Link, Title } from "@/shared/ui/index"
 
export default function NotFoundPage() {
  return (
    <div className='h-svh flex flex-col items-center justify-center text-black gap-4'>
      <Title text={'Схоже, цієї сторінки не існує'} className=" font-Acrom_Bold"></Title>
      <Link href="/" isArrowIconNeeded={true} className="" isHoverEffect={true} text={'на головну'}></Link>
    </div>
  )
}