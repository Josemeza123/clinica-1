import Link from "next/link";

function ProductList({ product }) {
  return (
    <tr>
      <td className="bg-gray-300 border-black border-2 align-text-left">{product.name}</td>
      <td className="bg-gray-300 border-black border-2 align-text-left">{product.price}</td>
      <td className="bg-gray-300 border-black border-2 align-text-left">{product.descripcion}</td>
      <td className="bg-gray-300 border-black border-2 align-text-left">{product.stock}</td>
      <td className="bg-gray-300 border-black border-2 align-text-left">
        <Link href={`/productos/${product.id}`}>ver</Link>
      </td>
    </tr>
  );
}

export default ProductList;
