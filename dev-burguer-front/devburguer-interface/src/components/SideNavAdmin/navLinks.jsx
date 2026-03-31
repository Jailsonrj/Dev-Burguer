import { ListIcon, ListPlusIcon, ReceiptIcon } from "@phosphor-icons/react";

export const navLinks = [
    {
        id: 1,
        title: "Pedidos",
        path: "/admin/pedidos",
        icon: <ReceiptIcon size={32} />
    },
    {
        id: 2,
        title: "Produto",
        path: "/admin/produtos",
        icon: <ListIcon size={32} />
    },
    {
        id: 3,
        title: "Adicionar produto",
        path: "/admin/novo-produto",
        icon: <ListPlusIcon size={32} />
    }
]