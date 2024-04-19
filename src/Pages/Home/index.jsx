import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout/layout'
import Card from '../../Components/Card/index'
import ProductDetail from '../../Components/ProductDetail/index'

function Home() {
const [items, setItems] = useState(null)

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('http://localhost:8080/api/v1/products/')
    const data = await response.json()
    setItems(data.data)
  }
  fetchData()

  // fetch('http://localhost:8080/api/v1/products/').
  // .then(response => response.json())
  // .then(data => setItems(data))
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