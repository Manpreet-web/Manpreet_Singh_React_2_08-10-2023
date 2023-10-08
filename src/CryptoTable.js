// CryptoTable.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import CryptoTableRow from "./CryptoTableRow"; // Create this component separately

function CryptoTable() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((response) => {
        // Set the fetched data to the state variable
        setCryptoData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // The empty dependency array ensures this effect runs only once on component mount

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto, index) => (
            <CryptoTableRow key={index} crypto={crypto} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CryptoTable;
