import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCryptoData } from "../redux/cryptoSlice";
import Container from '@mui/material/Container';
import TableSticky from "../components/TableSticky";

export default function HomePage() {
  const dispatch = useDispatch();
  const cryptoData = useSelector((state) => state.crypto.cryptoData);

  useEffect(() => {
    dispatch(fetchCryptoData());
  }, [dispatch]);

  console.log(cryptoData)

  return (
    <Container maxWidth="xl">
      <h1>Home Page</h1>
      <p>Powered by CoinGecko</p>
      {/* data={cryptoData} */}
      <TableSticky data={cryptoData}></TableSticky>
    </Container >
  );
}
