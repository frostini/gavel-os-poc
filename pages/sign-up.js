import Link from 'next/link';
import Image from 'next/image';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import { useState } from "react"
import { RegisterAuth, ConfirmAuth } from '../components/auth';

const SignUp = () => {
  const [status, setStatus] = useState('confirm')
  const [user, setUser] = useState(null)

  return (
    <div className="min-h-screen bg-white flex">
      {status === 'signup' ? <RegisterAuth setStatus={setStatus} setUser={setUser} user={user} /> : null}
      {status === 'confirm' ? <ConfirmAuth setStatus={setStatus} setUser={setUser} user={user} /> : null}

      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>



    </div>
  )
}
export default SignUp;