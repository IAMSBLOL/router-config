import LoginForm from './LoginForm'
import Header from '@/layout/appLayout/components/Header'

import { Footer } from '@/components'
import { useTranslation } from 'react-i18next'
const Login = () => {
  const { t } = useTranslation()
  return (

    <section>
      <Header hasUser={false} />
      <div className="px-8 py-36 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col">
            <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl">
                        Collaborating on single-page projects,
              <span className="text-gray-600">from any location</span>
            </h1>
            <p className="mt-4 text-base font-medium text-gray-500 text-pretty">
                        A rapid approach to collaborate in staging and provisional settings.
            </p>
          </div>
          <div className="p-2 border bg-gray-50 rounded-3xl">
            <div className="p-10 bg-white border shadow-lg rounded-2xl">
              <div>

                <div className="relative py-3">
                  <div className="absolute inset-0 flex items-center"
                    aria-hidden="true">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-2 text-sm text-black bg-white">{t('login.登陆')}</span>
                  </div>
                </div>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>

  )
}

export default Login
