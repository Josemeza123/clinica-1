import axios from "axios";
import ProductList from "./ProductList";
import Th from "@/components/ui/Th";

async function getProducts() {
  const { data } = await axios.get("http://localhost:3000/api/productos");
  return data;
}

async function Productos() {
  const products = await getProducts();
  return (
    <div>
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <Th>Nombre</Th>
            <Th>Precio</Th>
            <Th>Descripcion</Th>
            <Th>Stock</Th>
            <Th>Acciones</Th>
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
