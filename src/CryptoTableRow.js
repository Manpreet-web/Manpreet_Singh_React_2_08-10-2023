// CryptoTableRow.js
import React from "react";

function CryptoTableRow({ crypto }) {
  return (
    <tr>
      <td>{crypto.name}</td>
      <td>{crypto.symbol}</td>
      <td>{crypto.current_price}</td>
      {/* Add more columns as needed */}
    </tr>
  );
}

export default CryptoTableRow;
