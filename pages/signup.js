import { DonutIcon }  from '../components/Shared/Icons'
import Button  from '../components/Shared/Button'
import Input  from '../components/Shared/Input'
import Link from 'next/link'
import '../styles/style.scss'

const Signup = () => {
  return (
    <div className="signup-container min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="signup-content p-8 max-w-md w-full">
        <div className='signup-header'>
          <DonutIcon />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Set up your account
          </h2>
        </div>
        <form className="mt-8" action="#" method="POST">
          <div className="rounded-md shadow-sm">
            <div className='mb-2'>
              <Input
                ariaLabel="Account Name" name="name" type="text" extraClasses="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Account name" required
              />
            </div>
            <div className='mb-2'>
              <Input
                ariaLabel="Email address" name="email" type="email" extraClasses="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address" required
              />
            </div>
            <div className="-mt-px">
              <Input
                ariaLabel="Password" name="password" type="password" extraClasses="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" required
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
                <p className="mt-2 text-center text-sm leading-5 text-gray-600">
                Already have an account?
                <Link href='/login'>
                  <a className="ml-2 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">Login now</a>
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Button
              extraClasses={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out`}
              label={'Sign up'}
              onClick={() => { console.log('clicked') }}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup