import {useForm} from "react-hook-form"
import { useState, useEffect } from "react";
const Form = ({createProduct, selectedProduct, updateProduct}) => {
  const {register,formState:{errors},handleSubmit, reset}=useForm()
  
  useEffect(()=>{
    if(selectedProduct) {
        reset(selectedProduct)
    }else{
        clearForm()
    }
  },[selectedProduct])

  //Funcion para enviar informacion del formulario.
  const submit = data =>{
    if(selectedProduct){
        updateProduct(data)
        clearForm()
    }else{
    //data.productId=Date.now()
    //console.log(data)
    createProduct(data)
    clearForm()
    }
  } //fin funcion submit

  //Funcion para limpiar formulario
  const clearForm = ()=>{
    reset(
        {
            name: "",
            category: "",
            //description: "",
            price:"",
            isAvailable: false
        }
    )
  } //fin funcion clearForm

  return (
        <div className="form">
            <form onSubmit={handleSubmit(submit)} action="">
                <div>
                    <label htmlFor="name">Articulo: </label>
                    <input placeholder="Nombre del articulo" className="fields" name="Nombre del producto" id="name"  {...register("name",{required:true})} />
                    {errors.name?.type==="required"&& <small role="alert" style={{color: "orange"}} >El nombre es requerido</small>}
                </div>
                <div>
                    <label htmlFor="category">Categoría: </label>
                    <input placeholder="Categoria relacionada" className="fields" name="Categoria" id="category"  {...register("category",{required:true})} />
                    {errors.category?.type==="required"&& <small role="alert" style={{color: "orange"}} >La categoria es requerida</small>}
                </div>
                {/*<div>
                    <label htmlFor="description">Descripción: </label>
                    <input name="Descripcion" id="description"  {...register("description",{required:true})} type="textArea" 
                    />
                    {errors.description?.type==="required"&& <small role="alert" style={{color: "tomato"}} >La descripcion es requerida</small>}
                </div>*/}
                <div>
                    <label htmlFor="price">Precio: </label>
                    <input className="fields" name="Precio" id="price"  {...register("price",{required:true})}
                    placeholder="Solo números, sin puntos ni comas"/>
                    {errors.price?.type==="required"&& <small role="alert" style={{color: "orange"}} >El precio es requerido</small>}
                </div>
                <div>
                    <label htmlFor="isAvailable">Disponibilidad: </label>
                    <input name="Disponibilidad" id="isAvailable" type="checkbox"  {...register("isAvailable",{required:true})} />
                {errors.isAvailable?.type==="required"&& <small role="alert" style={{color: "orange"}} >Si estas creando es por que al menos hay 1, por favor marcar esta casilla</small>}
                </div>
                <button className="btn" type="submit">Enviar Formulario</button>
                <button className="btn" onClick={clearForm}>Limpiar Formulario</button>
            </form>
            
        </div>
  );
}
export default Form;