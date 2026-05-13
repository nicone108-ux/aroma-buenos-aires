import { useEffect, useState } from "react";
import ItemList from "./ItemList.jsx";
import listContainerStyles from "./ItemListContainer.module.css"

function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/data/productos.json")
      .then((respuesta) => {
        console.log('Respuesta cruda del servidor:', respuesta);
        return respuesta.json();
      })
      .then((data) => { 
        console.log('¡Productos cargados!', data);
        setProductos(data);
      })
      .catch((error) => console.log('¡Ups! Hubo un error:',error));
  }, []);

      return (
    <div>
        <h1 className={listContainerStyles.titulo}>Listado de Productos</h1>
        <div className={listContainerStyles.productos}>
        <ItemList productos={productos} />
        </div>
    </div>
);}

export default ItemListContainer;