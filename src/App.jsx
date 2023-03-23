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
    //setProducts([...products, productData])
    axios
      .post("https://products-crud.academlo.tech/products/", productData)
      .then(()=>getInfo())
      .catch(error=>console.error(error))
  }
  const deleteProduct =productData=>{
    //const filteredProducts = products.filter(product=>product.productId!=productData)
    //setProducts(filteredProducts)
    axios
      .delete(`https://products-crud.academlo.tech/products/${productData}/`)
      .then(()=>getInfo())
      .catch(error=>console.error(error))
  }
  
  const selectProduct=productData=>{
    setProductUpdate(productData)
  }

  const productModificated = productData => {
    /*const item = products.findIndex(product => product.productId === productData.productId)
    products[item]=productData
    setProducts([...products])
    setProductUpdate(null)*/
    axios
      .put(`https://products-crud.academlo.tech/products/${productData.id}/`, productData)
      .then(()=>{
        getInfo()
        setProductUpdate(null)
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