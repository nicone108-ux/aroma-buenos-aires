//import { useEffect, useState } from "react";
import Item from './Item.jsx';

function ItemList({productos}) {
    return (
    <div>
      <h1 style={{ backgroundColor: "#d9a5a5", fontSize: "30px", marginBottom: "5px" }}>Catálogo de perfumes</h1>
        {productos.map(prod => 
         <Item key={prod.id} {...prod} />
      )}
    </div>
    )
}
export default ItemList;    
