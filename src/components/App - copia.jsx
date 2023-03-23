import { useState, useEffect } from 'react'
import './App.css'
import Form from "./components/Form"
import ProductList from './components/ProductList'
import axios from "axios"


function App() {
  const [products, setProducts] = useState ([])
  const [productUpdate, setProductUpdate] = useState(null)

  
  const addProduct =productData=>{
    setProducts([...products, productData])
  }
  const deleteProduct =productData=>{
    const filteredProducts = products.filter(product=>product.productId!=productData)
    setProducts(filteredProducts)
  }
  
  const selectProduct=productData=>{
    console.log(productData)
    setProductUpdate(productData)
  }

  const productModificated = productData => {
    const item = products.findIndex(product => product.productId === productData.productId)
    products[item]=productData
    setProducts([...products])
    setProductUpdate(null)
  }

  return (
    <div className="App">
      <Form createProduct={data=>addProduct(data)} selectedProduct={productUpdate} updateProduct={data=>productModificated(data)}></Form>
      <ProductList productsData={products} deleteProductAction={id=>deleteProduct(id)} selectProduct={product=>selectProduct(product)}/>
    </div>
  )
}

export default App
