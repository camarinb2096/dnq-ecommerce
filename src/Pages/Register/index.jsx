import { useForm } from "react-hook-form"
import { useEffect } from "react"
import Button from "../../Components/Button"
import Layout from "../../Components/Layout/layout"
import Input from "../../Components/Input"
import Axios from "axios"
import ConfirmModal from "../../Components/Modal"
import { useState } from "react"
import {useNavigate} from 'react-router-dom'


function RegisterForm() {
 
  const { register, handleSubmit, formState: { errors }, setValue,reset} = useForm({
      defaultValues: {
        name: '',
        email: '',
        address: '',
        prefix: '',
        phone: '',
        password: '',
        confirmPassword: ''
      }
  })

  useEffect(() => {
    setValue('prefix', '+57');
  }, [setValue]);

  const [message, setMessage] = useState({ title: '', body: '' })
  const [showModal, setShowModal] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log("data", data)
    Axios.post('http://localhost:8080/api/v1/user/', data)
    .then(response => {
      // console.log("response", response)
      setMessage({ title: 'Registro Exitoso', body: 'Usuario registrado correctamente' })
      setShowModal(true);
      setIsRegistered(true)
      reset()
    })
    .catch(error => {
      console.log("error", error)
      setMessage({ title: 'Registro Fallido', body: String(error.response.data.error)})
      setShowModal(true)
    })
  }
  // console.log("Errores", errors)
  const closeModal = () => {
    setShowModal(false); 
    if (isRegistered) {
      navigate('/login')
    }
  }

  function mayus(e) {
    e.value = e.value.toUpperCase()
  }

  return (
    <Layout>
      <form className='flex w-full justify-center min-h-screen bg-red-300' onSubmit={handleSubmit(onSubmit)}>
          <div className='justify-center w-5/12 h-auto flex flex-col px-8 bg-gray-200 shadow-red-700 mt-32 mb-8 rounded-2xl shadow-2xl gap-9'>
            <div>
              <p className='text-5xl font-bold text-left mb-12'>
                Regístrate
              </p>
            </div>
            <div className='flex flex-row justify-center'> 
              <Input 
                name="name" 
                type="text" 
                placeholder="Nombre completo"  
                onChange={(e) => {e.target.value = e.target.value.toUpperCase();}} 
                className='w-2/3 h-10 px-4 py-4' 
                {...register('name', { required: true, maxLength: 100 })}/>
            </div>
            <div className='flex flex-row justify-center'> 
              <Input 
                name="email" 
                type="text" 
                placeholder="Email" 
                className='w-2/3 h-10 px-4 py-4' 
                {...register('email', { required: true, maxLength: 100 })}/>
            </div>
            <div className='flex flex-row justify-center'> 
              <Input 
                name="address" 
                type="text" 
                placeholder="Dirección" 
                className='w-2/3 h-10 px-4 py-4' 
                {...register('address', { required: true, maxLength: 100 })}/>
            </div>
            <div className='flex flex-row gap-4 justify-center'>
              <input 
                type='text' readOnly 
                className='px-4 py-2 w-20 bg-white border border-gray-300 rounded-2xl font-bold' 
                value="+57" 
                {...register('prefix')}/>
              <Input 
                name="phone" 
                type="text" 
                placeholder="Telefono" 
                className='h-10 w-38 px-4 py-2 bg-white border border-gray-300 text-center' 
                {...register('phone', { required: true, maxLength: 100 })}/>
            </div>
            <div className='flex flex-row justify-center'> 
              <Input 
                name="password" 
                type="password" 
                placeholder="Contraseña" 
                className='w-2/3 h-10 px-4 py-4' 
                {...register('password', { required: true, maxLength: 100 })}
                onCopy={(e) => e.preventDefault()}/>
            </div>
            <div className='flex flex-row justify-center'> 
              <Input 
                name="confirmPassword" 
                type="password" 
                placeholder="Confirmar contraseña" 
                className='w-2/3 h-10 px-4 py-4' 
                {...register('confirmPassword', { required: true, maxLength: 100 })}
                onCopy={(e) => e.preventDefault()}/>
            </div>
            <div className='flex flex-row justify-center'>  
              <Button type='submit' text='Registrarse'/>
            </div>
          </div>
      </form>
      <ConfirmModal show={showModal} close={closeModal} message={message} />
    </Layout>
  );
}

export default RegisterForm
  