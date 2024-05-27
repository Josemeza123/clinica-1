import axios from "axios";
import ProductList from "./ProductList";

async function getProducts() {
  const { data } = await axios.get("http://localhost:3000/api/productos");
  return data;
}

async function Productos() {
    const products = await getProducts();
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripcion</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductList product={product} key={product.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Productos;
