import Link from 'next/link';
import Image from 'next/image';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useState } from "react"
import { useAuth } from '../contexts/auth'
import { 
  ConfirmAuth,
  RegisterAuth,
  SignInAuth } from '../components/auth';

const SignUp = () => {
  const [status, setStatus] = useState('signin')
  const [user, setUser] = useState(null)
  const { login } = useAuth()
  return (
    <div className="min-h-screen bg-white flex">
      {status === 'signin' ? <SignInAuth nextPath="/auctions-show" nextStatus="signup" setStatus={setStatus} setUser={setUser} user={user} login={login} /> : null}
      {status === 'signup' ? <RegisterAuth nextStatus="confirm" setStatus={setStatus} setUser={setUser} user={user} /> : null}
      {status === 'confirm' ? <ConfirmAuth useRouter={useRouter} nextPath="/auctions-list" setStatus={setStatus} setUser={setUser} user={user} /> : null}

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