import { Button, Card, CardBody, CardFooter, CardHeader, Input, Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react'
import React from 'react'
import { LoginForm } from '../Components/Form/LoginForm'
import { RegisterForm } from '../Components/Form/RegisterForm'

export const Join = () => {
  if (localStorage.getItem("token")) {
    window.location.href="/profile"
  } 
  const data = [
    {
      label: "Login",
      value: "login",
      content: <LoginForm />
    },
    {
      label: "Register",
      value: "register",
      content: <RegisterForm />
    }
  ]
  return (
    <div className='h-screen font-poppins flex items-center justify-center'>
      <div className='w-1/3 backdrop-blur-md rounded-lg border border-black'>
        
        <Tabs value="login" className="h-full">
          <div className='flex justify-center items-center'>
          <TabsHeader
            className='bg-transparent w-[15rem]'
            indicatorProps={{
              className: "bg-blue-500/10 shadow-none text-blue-500"
            }}
          >
            {
              data.map( ({ label, value }) => (
                <Tab key={value} value={value} className="font-medium text-lg">
                  {label}
                </Tab>
              ) )
            }
          </TabsHeader>
          </div>
          <TabsBody className='h-full'>
            {
              data.map( ({ value, content}) => (
                <TabPanel key={value} value={value} className="h-full">
                  {content}
                </TabPanel>
              ))
            }
          </TabsBody>
        </Tabs>

      </div>
    </div>
  )
}
