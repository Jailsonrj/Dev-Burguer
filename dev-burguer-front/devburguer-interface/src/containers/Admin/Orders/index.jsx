
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './row';
import { api } from '../../../services/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { Filter, FilterOption } from './styles';


export function Orders() {

  const [orders, setOrders] = useState([]);
  const [ordersFiltered, setOrdersFiltered] = useState([]);
  const [rows, setRows] = useState([]);
  const [activeStatus, setActiveStatus] = useState(0);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get("/orders");

      setOrders(data);
      setOrdersFiltered(data);
    }
    loadOrders();
  }, []);

   const Orderoptions = [
    { id: 0, value: 'Todos', label: 'Todos' },
    { id: 1, value: 'Pedido realizado', label: 'Pedido realizado' },
    { id: 2, value: 'Em preparação', label: 'Em preparação' },
    { id: 3, value: 'Pedido pronto', label: 'Pedido pronto' },
    { id: 4, value: 'Pedido à caminho', label: 'Pedido à caminho' },
    { id: 5, value: 'Entregue', label: 'Entregue' },
  ]

  function handleStatus(status) {
    if (status.id === 0 ) {
      setOrdersFiltered(orders);
    } else {
      const newOrdersFiltered = orders.filter((order) => order.status === status.value);
      setOrdersFiltered(newOrdersFiltered);
    }

    setActiveStatus(status.id);
  }

  useEffect(() => {
    if (activeStatus === 0) {
      setOrdersFiltered(orders);
    } else {
  const statusIndex = Orderoptions.findIndex((status) => status.id === activeStatus);
  const newOrdersFiltered = orders.filter((order) => order.status === Orderoptions[statusIndex].value);
  setOrdersFiltered(newOrdersFiltered);
    }
  }, [orders]);

  useEffect(() => {
    const newRows = ordersFiltered.map((order) => createData(order));
    setRows(newRows);
  }, [ordersFiltered]);

    function createData(order) {
    return {

      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products,

    };
  }

  return (
<>
   <Filter>
      {Orderoptions.map((status) => (
        <FilterOption
         key={status.id}
         onClick={() => handleStatus(status)}
         $isActive={activeStatus === status.id}>
         {status.label}
         </FilterOption>
      ))}
   </Filter>


    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Pedido</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Data do pedido</TableCell>
            <TableCell>Status</TableCell>         
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.orderId} row={row} orders={orders} setOrders={setOrders}  />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
