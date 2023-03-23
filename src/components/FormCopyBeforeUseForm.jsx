import { useState } from "react";
const Form = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [desValue, setDesValue] = useState("");
  const handleSubmit = (e) => {
    console.log("Submited");
    e.preventDefault();
    const data = {
      name: productName,
      category: category,
      price: price,
      isAvailable: isAvailable
    };
    console.log(data);
    resetForm();
  };
  const resetForm = () => {
    setProductName("");
    setCategory("");
    setPrice("");
    setIsAvailable(false);
  };
  
    return (
        <div>
            <form action="">
        {/*<div>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
        </div>*/}
        <div>
          <label htmlFor="name">Nombre: </label>
          <input
            name="Nombre del producto"
            id="name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Categoría: </label>
          <input
            name="Categoria"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Precio: </label>
          <input
            name="Precio"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="isAvailable">Disponibilidad: </label>
          <input
            name="Disponibilidad"
            id="isAvailable"
            type="checkbox"
            checked={isAvailable}
            onChange={(e) => setIsAvailable(e.target.checked)}
            required
          />
        </div>
        <div>
          <strong>Que desea hacer?:</strong>
          <br />
          <label htmlFor="">Descargar</label>
          <input
            type="radio"
            name="des"
            id="Download"
            onChange={() => setDesValue("Download")}
            value={desValue === "Download"}
          />
          <label htmlFor="">Copiar enlace</label>
          <input
            type="radio"
            name="des"
            id="Copy"
            onChange={() => setDesValue("Copy")}
            value={desValue === "Copy"}
          />
          <label htmlFor="">Compartir</label>
          <input
            type="radio"
            name="des"
            id="Share"
            onChange={() => setDesValue("Share")}
            value={desValue === "Share"}
          />
        </div>
        <button type="submit">Enviar Formulario</button>
        <input type="button" value="Limpiar Formulario" onClick={resetForm} />
      </form>
    </div>
  );
}
/*- Nombre del producto (“name”).
- Categoria (”category”)
- Precio (”price”)
- Disponibilidad (”isAvailable”)*/

export default Form;
