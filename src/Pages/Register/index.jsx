import { useForm } from "react-hook-form"
import Button from "../../Components/Button"
import Layout from "../../Components/Layout/layout"
import Input from "../../Components/Input"

function RegisterForm() {

  const prefix = "+57"; // Prefijo fijo por ahora, más adelante puede venir de un estado o prop
 
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
      defaultValues: {
        name: '',
        email: '',
        address: '',
        phone: '',
        password: '',
        confirmPassword: ''
      }
  })

  const onSubmit = (data) => {
    console.log(data)
    Axios.post('http://localhost:8080/api/v1/ruser', {
      name: data.name,
      email: data.email,
      address: data.address,
      phone: data.phone,
      password: data.password,
      confirmPassword: data.confirmPassword
    }).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
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
              <Input type='text' placeholder='Nombre completo' className='w-2/3 h-10 px-4 py-4' {...register("name", {required: true, maxLength: 100,})}/>
            </div>
            <div className='flex flex-row justify-center'> 
              <Input type='text' placeholder='Correo electronico' className='w-2/3 h-10 px-4 py-4' {...register("email", {required: true, maxLength: 100,})}/>
            </div>
            <div className='flex flex-row justify-center'> 
              <Input type='text' placeholder='Dirección' className='w-2/3 h-10 px-4 py-4' {...register("address", {required: true, maxLength: 100,})}/>
            </div>
            <div className='flex flex-row gap-4 justify-center'>
              <span className='px-4 py-2 bg-white border border-gray-300 rounded-2xl font-bold' {...register("prefix", {required: true, maxLength: 3,})}>{prefix}</span>
              <Input type='text' placeholder='Numero celular' className='h-10 px-4 py-2 bg-white border border-gray-300' {...register("phone", {required: true, maxLength: 100,})}/>
            </div>
            <div className='flex flex-row justify-center'> 
              <Input type='password' placeholder='Contraseña' className='w-2/3 h-10 px-4 py-4'{...register("password", {required: true, maxLength: 100,})}/>
            </div>
            <div className='flex flex-row justify-center'> 
              <Input type='password' placeholder='Repita tu contraseña' className='w-2/3 h-10 px-4 py-4' {...register("confirmPassword", {required: true, maxLength: 100,})}/>
            </div>
            <div className='flex flex-row justify-center'> 
              <Button type='submit' text='Registrarse' className=''/>
            </div>
          </div>
      </form>

    </Layout>
  );
}

export default RegisterForm
  