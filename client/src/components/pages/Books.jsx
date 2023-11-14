import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Data from '../Data/dataBooks.json';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function BasicTable() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Book_name</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">departament</TableCell>
            <TableCell align="right">ip_address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((data => (
            <TableRow
              key={data.id}
            >
              <TableCell component="th" scope="row">
                {data.id}
              </TableCell>
              <TableCell align="right">{data.book_name}</TableCell>
              <TableCell align="right">{data.author}</TableCell>
              <TableCell align="right">{data.email}</TableCell>
              <TableCell align="right">{data.departament}</TableCell>
              <TableCell align="right">{data.ip_address}</TableCell>
            </TableRow>
          )))}
        </TableBody>
      </Table>
    </TableContainer>
    </ThemeProvider>
  );
}