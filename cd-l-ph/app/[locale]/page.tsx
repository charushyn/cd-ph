import {useTranslations} from 'next-intl';
 
export default function Index() {
  const t = useTranslations('Index');
  return (
    <div className='h-svh'>
        <h1>{t('title')}</h1>
    </div>);
}