import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
const apiKey = import.meta.env.VITE_API_KEY;

export default function HomePage() {
  const [cryptoData, setCryptoData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL, {
          header: {
            "X-CMC_PRO_API_KEY": apiKey,
          },
        });
        setCryptoData(response.data);
      } catch (e) {
        console.error("Error al obtener datos: ", e);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Home Page</h1>
      <Link to={"/crypto"}>Crypto</Link>
      {cryptoData && (
        <ul>
          {cryptoData.map((crypto) => (
            <li key={crypto.id}>
              {crypto.name} ({crypto.symbol}) :
              {crypto.quote.USD.price}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
