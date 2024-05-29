import Td from "@/components/ui/Td";
import Link from "next/link";

function ProductList({ product }) {
  return (
    <tr>
      <Td>{product.name}</Td>
      <Td>{product.price}</Td>
      <Td>{product.descripcion}</Td>
      <Td>{product.stock}</Td>
      <Td>
        <Link href={`/productos/${product.id}`}>ver</Link>
      </Td>
    </tr>
  );
}

export default ProductList;
