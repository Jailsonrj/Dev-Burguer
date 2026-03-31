import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import { formatDate } from '../../../utils/formatDate';
import { ProductImg, SelectStatus } from './styles';
import { api } from '../../../services/api';
import { set } from 'react-hook-form';

export function Row(props) {
  const { row } = props;
  const { orders} = props;
  const { setOrders } = props;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);



  async function newOrderStatus(orderId, status) {
    try {
      setLoading(true);
      await api.put(`/orders/${orderId}`, { status });

      const newOrders = orders.map(order => {
        if (order._id === orderId) {
          return {
            ...order,
            status,
          }
        }
        return order;
      })

      setOrders(newOrders);
    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  }

  const Orderoptions = [
    { id: 0, value: 'Todos', label: 'Todos' },
    { id: 1, value: 'Pedido realizado', label: 'Pedido realizado' },
    { id: 2, value: 'Em preparação', label: 'Em preparação' },
    { id: 3, value: 'Pedido pronto', label: 'Pedido pronto' },
    { id: 4, value: 'Pedido à caminho', label: 'Pedido à caminho' },
    { id: 5, value: 'Entregue', label: 'Entregue' },
  ]



  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.orderId}
        </TableCell>
        <TableCell >{row.name}</TableCell>
        <TableCell > {formatDate(row.date)} </TableCell>
        <TableCell >
          <SelectStatus
            defaultValue={Orderoptions.find(option => option.value === row.status)}
            options={Orderoptions.filter(option => option.id !== 0)}
            placeholder='Status'
            onChange={(option) => newOrderStatus(row.orderId, option.value)}
            isLoading={ loading }
            menuPortalTarget={ document.body }
          /> </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Pedido
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Quantidade</TableCell>
                    <TableCell>Produto</TableCell>
                    <TableCell>Categoria</TableCell>
                    <TableCell>Ilustração</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((productRow) => (
                    <TableRow key={productRow.id}>
                      <TableCell component="th" scope="row">
                        {productRow.id}
                      </TableCell>
                      <TableCell>{productRow.name}</TableCell>
                      <TableCell>{productRow.category}</TableCell>
                      <TableCell><ProductImg src={productRow.url} alt={productRow.name} /></TableCell>
                    </TableRow>
                  ))}


                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    orderId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        pice: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ).isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};