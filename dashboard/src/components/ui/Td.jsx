import React from "react";

function Td({ children }) {
  return (
    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900 text-center">
      {children}
    </td>
  );
}

export default Td;
