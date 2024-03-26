import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function TableSticky({ cryptoData }) {

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Symbol</TableCell>
            <TableCell align="right">Current price (USD)</TableCell>
            <TableCell align="right">Total volume</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
          {cryptoData.map((crypto) => (
            <TableRow
              key={crypto.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {crypto.name}
              </TableCell>
              <TableCell align="right">{crypto.symbol}</TableCell>
              <TableCell align="right">{crypto.current_price}</TableCell>
              <TableCell align="right">{crypto.total_volume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
