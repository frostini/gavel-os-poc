import Link from 'next/link';
import Image from 'next/image';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import { useState } from "react"

const ConfirmAuth = ({ user, setStatus, setUser }) => {
  const { handleSubmit, register } = useForm();
  const router = useRouter()

  async function confirmSignUp({ code }) {
    try {
      await Auth.confirmSignUp(user.username, code);

      await Auth.signIn(user.username, user.password);

      router.push('/auctions-list')
      console.log(code)
    } catch (error) {
      console.log('error confirming sign up', error);
    }
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
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Confirm Account</h2>
        <p className="mt-2 text-sm text-gray-600">
          Enter the confirmation code you received in your email.
        </p>
      </div>

      <div className="mt-8">
        <div className="mt-6">
        <form onSubmit={handleSubmit(confirmSignUp)}
          className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Confirmation Code
              </label>
              <div className="mt-1">
                <input
                  {...register("code")} 
                  id="code"
                  name="code"
                  type="number"
                  placeholder="123456"
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
                Confirm New Account
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Request a new confirmation code
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
export default ConfirmAuth;