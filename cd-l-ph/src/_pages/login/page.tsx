import { LoginForm } from "@/widgets/Forms/index";
import {useTranslations} from 'next-intl';

const Login = () => {
    const t = useTranslations('index')
    return(
        <div className=" min-h-svh bg-black">
            <h1>{t('title')}</h1>
            <LoginForm></LoginForm>
        </div>
    )
}

export default Login;