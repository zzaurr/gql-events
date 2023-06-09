import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { GET_EVENTS } from './apollo/events';
import { CircularProgress } from '@mui/material';
import { useQuery } from '@apollo/client'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const App = () => {

  const { loading, error, data } = useQuery(GET_EVENTS);

  if(loading) {
    return <CircularProgress />
  }

  if(error) {
    return <h2>Error</h2>
  }

  return (
    <>
    <h1>Event list</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell align="left">Date</StyledTableCell>
              <StyledTableCell align="left">City</StyledTableCell>
              <StyledTableCell align="left">Country</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.event.find.map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  {item.title}
                </StyledTableCell>
                <StyledTableCell align="left">{item.startDate}</StyledTableCell>
                <StyledTableCell align="left">{item.city.titleRu}</StyledTableCell>
                <StyledTableCell align="left">{item.city.country.titleRu}</StyledTableCell>

              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default App

