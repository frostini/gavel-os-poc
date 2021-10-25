import Link from 'next/link';
import Image from 'next/image';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import { useState } from "react"

const SignInAuth = ({ user, setStatus, setUser, nextStatus, nextPath }) => {
  const { handleSubmit, register } = useForm();
  const router = useRouter()

  async function onSubmit({ username, password }) {
    try {
      const user = await Auth.signIn(username, password);
      console.log(`sign inuser: `, user)
      // router.push(nextPath)
    } catch (error) {
      console.log('error signing in', error);
    }
  }
  function setSignup(e) {
    e.preventDefault();
    console.log('clicked to set signup')
    setStatus('signup')
  }
  
  return (
    <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div className="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <Image
          src="/gavel_os_logo.svg"
          width="120px"
          height="60px"
        />
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        <p className="mt-2 text-sm text-gray-600">
          Or{' '}
          <a href="#" onClick={setSignup} className="font-medium text-indigo-600 hover:text-indigo-500">
            Click here to sign up for a new one
          </a>
        </p>
      </div>

      <div className="mt-8">
        <div className="mt-6">
        <form onSubmit={handleSubmit(onSubmit)}
          className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-1">
                <input
                  {...register("username")} 
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  placeholder="awsomeuser1"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  {...register("password")}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign In
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )

}
export default SignInAuth;