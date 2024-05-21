import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock";
import "./ItemDetailContainer.css";

export default function ItemDetailContainer() {
    const [product, setProduct] =  useState(null);
    const {id} = useParams();

    useEffect(() => {
        getProduct(id).then((data) => setProduct(data));
    }, [id]);

    if(!product){
      return <div className="DetailCharging">Cargando...</div>;
    }

    return(
        <>
        <div className="Detail">
          <div className="DetailContainer">
              <h1>Detalles</h1>
                <img src={product.img} alt={product.nombre} />
                <h4>{product.nombre}</h4>
                <p>
                  Descripción: {product.descripcion}
                </p>
                <p>Categoria: {product.categoria}</p>
                <p>RD${product.precio.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
          </div>
        </>
    );
}

