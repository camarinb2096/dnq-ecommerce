import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout/layout'
import Card from '../../Components/Card/index'
import ProductDetail from '../../Components/ProductDetail/index'

function Home() {
const [items, setItems] = useState(null)

useEffect(() => {
  const fetchData = async () => {
    const apiVersion = 'v1'
    const productsApi = `${import.meta.env.VITE_APP_URL}${apiVersion}/products`
    const response = await fetch(productsApi)
    const data = await response.json()
    setItems(data.data)
  }
  
  fetchData()

}, [])


  return (
    <Layout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg mt-24'>
      {
        items?.map(item => (
          <Card key={item.id} data={item}/>
        ))
      }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home