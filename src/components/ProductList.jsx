

const ProductList = ({productsData, deleteProductAction, selectProduct}) => {
    const confirmDel = (id) => {
        const resultConfirm = confirm("¿Esta seguro?")
        if(resultConfirm){
            deleteProductAction(id)
        }

    }
    return (
        <div >
            <ul >
                {
                    productsData?.map(product=>(
                    <div className="productCard">
                        
                        <li type="none" key="product.productId">
                        <div className="productCardSelf">
                            <span><strong>Producto: </strong></span>{product.name} <br />
                            <span><strong>Categoría: </strong></span>{product.category} <br />
                            {/*<span><strong>Descripción: </strong></span>{product.description} <br />*/}
                            <span><strong>Precio: </strong></span>{product.price} <br />
                            <span><strong>Disponible: </strong></span>{product.isAvailable ? "  Yes":"  No"}<br />
                            <button className="btn" onClick={()=>confirmDel(product.id)}>Eliminar</button>
                            <button className="btn" onClick={()=>selectProduct(product)}>Editar</button>
                            </div>
                        </li>
                        
                    </div>
                    ))
                }
                
            </ul>
            
        </div>
    );
};

export default ProductList;