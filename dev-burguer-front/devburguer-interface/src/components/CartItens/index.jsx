import { useCart } from "../../hooks/CartContext";
import { Table  } from "../index";
import { formatPrice } from "../../utils/formatPrice";
import { ButtonGroup, ProductImage, TrashButton } from "./styles";
import Trash from "../../assets/trash.svg";

export function CartItens() {

    const { cart, increseProduct, decreseProduct, deleteProduct } = useCart();

    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>
           <Table.Tbody >
                {cart?.length ? cart.map(item => (
                    <Table.Tr key={item.id}>
                        <Table.Td><ProductImage src={item.url} alt={item.name} /></Table.Td>
                        <Table.Td>{item.name}</Table.Td>
                        <Table.Td>{formatPrice(item.price)}</Table.Td>
                        <Table.Td>
                           <ButtonGroup>
                             <button onClick={() => decreseProduct(item.id)}>-</button>
                            {item.quantity}
                            <button onClick={() => increseProduct(item.id)}>+</ button>
                           </ButtonGroup>
                        </Table.Td>
                        <Table.Td style={{fontWeight:"bold"}}>{formatPrice(item.price * item.quantity)}</Table.Td>
                        <Table.Td><TrashButton src={Trash} alt="Remover" onClick={() => deleteProduct(item.id)} /></Table.Td>
                    </Table.Tr> 
                )) : (<Table.Tr><Table.Td colSpan={5}>Nenhum item no carrinho</Table.Td></Table.Tr>)}
                <Table.Tr style={{fontWeight:"bold"}}><Table.Td colSpan={4}>Total</Table.Td><Table.Td>{formatPrice(cart.reduce((acc, item) => acc + item.price * item.quantity, 0))}</Table.Td></Table.Tr>
            </Table.Tbody> 
        </Table.Root>
    )
}
