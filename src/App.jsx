import { useState, useEffect } from 'react'
import './App.css'
import Form from "./components/Form"
import ProductList from './components/ProductList'
import axios from "axios"

function App() {
  const [products, setProducts] = useState ([])

  const [productUpdate, setProductUpdate] = useState(null)
  useEffect(()=>{
      getInfo()    
  },[])

  const getInfo =()=>{
    axios
      .get("https://products-crud.academlo.tech/products/")
      .then(resp=>setProducts(resp.data))
      .catch(error=>console.error(error))


  }
  const addProduct =productData=>{
    axios
      .post("https://products-crud.academlo.tech/products/", productData)
      .then(()=>{
        getInfo()
        confirm("Producto Creado")})
      .catch(error=>console.error(error))
  }
  const deleteProduct =productData=>{
    axios
      .delete(`https://products-crud.academlo.tech/products/${productData}/`)
      .then(()=>{
        getInfo()
        confirm("Producto Eliminado")})
      .catch(error=>console.error(error))
  }
  
  const selectProduct=productData=>{
    setProductUpdate(productData)
  }

  const productModificated = productData => {
    axios
      .put(`https://products-crud.academlo.tech/products/${productData.id}/`, productData)
      .then(()=>{
        getInfo()
        setProductUpdate(null)
        confirm("Producto Modificado")
      })
      .catch(error=>console.error(error))
  }

  return (
    <div className="App">
      <Form createProduct={data=>addProduct(data)} selectedProduct={productUpdate} updateProduct={data=>productModificated(data)}></Form>
      <ProductList productsData={products} deleteProductAction={id=>deleteProduct(id)} selectProduct={product=>selectProduct(product)}/>
    </div>
  )
}

export default App
