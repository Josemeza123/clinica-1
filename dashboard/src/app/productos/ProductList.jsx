import Link from "next/link";

function ProductList({ product }) {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.descripcion}</td>
      <td>{product.stock}</td>
      <td>
        <Link href={`/productos/${product.id}`}>ver</Link>
      </td>
    </tr>
  );
}

export default ProductList;
