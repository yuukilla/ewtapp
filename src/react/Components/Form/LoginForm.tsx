import { Button, Input } from '@material-tailwind/react'
import axios from 'axios';
import React, { FormEvent, useState } from 'react'

export const LoginForm = () => {

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLoginForm = async (event: FormEvent) => {
    event.preventDefault();
    console.log("dat5a")
  
  }
  return (
    <div className='h-full'>
      <form onSubmit={ handleLoginForm }>
        <div className='h-3/4 my-3 flex flex-col items-center justify-center gap-2'>
          <div className='w-2/3'>
            <Input
              label='Username'
              id='username' 
              size="lg" 
              color='blue-gray'
              onChange={ (e) => setLoginUsername( e.target.value ) }
            />
          </div>
          <div className="w-2/3">
            <Input
              label='Password'
              type="password"
              id="password" 
              size='lg' 
              color='blue-gray'
              onChange={ (e) => setLoginPassword( e.target.value ) }
            />
          </div>
        </div>
        <div className='h-1/4 flex justify-center items-center'>
          <Button type='submit' variant='outlined' size='md' className='px-20'>
            Log in
          </Button> 
        </div>
      </form>
    </div>
  )
}
