import React from "react";

function Th({ children }) {
  return (
    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
      {children}
    </th>
  );
}

export default Th;
