import Layout from "../../Components/Layout/layout"
import { useForm } from "react-hook-form"
import Button from "../../Components/Button"
import Input from "../../Components/Input"

function LoginForm() {
    // El hook useForm y cualquier otro código lógico deberían ir aquí

    return (
      <Layout>
        <div className='flex w-full min-h-screen'>
          <div className='w-1/2 h-screen flex flex-col justify-center px-8 bg-gray-200'>
            <img src='https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='login' className='w-full h-full object-cover' />
          </div>
          <form className='w-1/2 h-screen flex flex-col gap-8 justify-center pl-8 rounded-s bg-gray-200'>
            <p className='font-bold text-5xl'>
              Ingresa tus credenciales
            </p>
            <Input
              type='email'
              placeholder='Email'
              className="text-base text-black flex-grow outline-none rounded-l-2xl px-4 py-2"
              // Aquí deberías conectar este input con react-hook-form
            />
            <Input
              type='password'
              placeholder='Password'
            />
            <Button text='Login' type='submit' />
          </form>
        </div>
      </Layout>
    )
  }
  
export default LoginForm
