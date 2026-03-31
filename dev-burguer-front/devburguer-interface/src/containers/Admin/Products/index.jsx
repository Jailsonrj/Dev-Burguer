import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useEffect } from "react";
import { Container, EditButton, ProductImage } from "./styles";
import { api } from "../../../services/api";
import { useState } from "react";
import { CheckCircleIcon, PencilIcon, XCircleIcon } from '@phosphor-icons/react';
import { formatPrice } from '../../../utils/formatPrice';
import { useNavigate } from 'react-router-dom';
export function Products() {

    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get("/products");
   
            setProducts(data);
        }
        loadProducts();
    }, [])

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Preço</TableCell>
                            <TableCell align="center">Produto em oferta</TableCell>
                            <TableCell align="center">Imagem do produto</TableCell>
                            <TableCell align="center">Editar</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center" >{formatPrice(row.price)}</TableCell>
                                <TableCell align="center" >{row.offer ?  <CheckCircleIcon size={32} color="green" /> : <XCircleIcon size={32} color="red" /> }</TableCell>
                                <TableCell align="center" ><ProductImage src={row.url} /></TableCell>
                                <TableCell align="center" ><EditButton onClick={() => navigate(`/admin/editar-produto`, { state: row })} ><PencilIcon size={32} /></EditButton> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

