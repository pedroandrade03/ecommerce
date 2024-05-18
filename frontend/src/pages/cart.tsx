import { CartItem } from "@/types/CartItem";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IconArrowRight, IconXboxX } from "@tabler/icons-react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react"
import { useShoppingCart } from "@/context/CartContext";
import NavBar from "@/components/NavBar";

export const columns: ColumnDef<CartItem>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-center">Produtos</div>,
    cell: ({ row }) => {
      const product = row.original.product;
      return (
        <div className="flex items-center">
          <div className="relative object-scale-down h-[90px] w-[70px]">
            <Image
              src={product.image}
              fill={true}
              alt="Picture of the author"
            />
          </div>
          <p className="max-w-48 ml-5 font-medium">{product.name}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Preço Unitário",
    cell: ({ row }) => {
      const product = row.original.product;
      const price = product.price;
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price);

      return <div className="text-center">{formatted}</div>;
    },
  },
  {
    accessorKey: "quantity",
    header: "Quantidade",
    cell: ({ row }) => {
      const { increaseQuantity, decreaseQuantity } = useShoppingCart();

      const handleQuantityChange = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        const newQuantity = Number(event.target.value);

        if (newQuantity > row.original.quantity) {
          increaseQuantity(row.original.id);
        } else if (newQuantity < row.original.quantity) {
          decreaseQuantity(row.original.id);
        }
      };

      return (
        <div className="flex justify-center items-center">
          <Input
            type="number"
            value={row.original.quantity}
            onChange={handleQuantityChange}
            className="font-medium text-center w-16"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "subtotal",
    header: "Subtotal",
    cell: ({ row }) => {
      const { getItemQuantity } = useShoppingCart();
      const product = row.original.product;
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(product.price);

      return (
        <div className="flex justify-center">
          <p>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(getItemQuantity(1) * product.price)}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "remove",
    header: "Remove",
    cell: ({ row }) => {
      const { removeFromCart } = useShoppingCart();
      return (
        <div className="flex justify-center">
          <IconXboxX
            onClick={() => removeFromCart(row.original.id)}
            className="text-gray-400"
          />
        </div>
      );
    },
  },
];

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                Sem itens
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default function Cart() {
  const { cartItems } = useShoppingCart();
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      const product = item.product;
      const subtotal = product.price * item.quantity;
      totalPrice += subtotal;
    });
    return totalPrice;
  };

  useEffect(() => {
    const totalPrice = calculateTotal();
    setTotal(totalPrice);
  }, [cartItems]);

  const quantityItens = cartItems.length;

  return (
    <div className="flex flex-col justify-center">
      <div>
        <h1 className="font-semibold text-4xl">Seu carrinho</h1>
        <div className="font-semibold mt-5">
          <p className="text-gray-500 mb-12">
            Há <span className="text-green-500">{quantityItens}</span>{" "}
            {quantityItens == 1 ? "item" : "items"} no seu carrinho
          </p>
        </div>
        <div className="flex align-top gap-12 gap-y-6">
          <div>
            <DataTable columns={columns} data={cartItems} />
          </div>
          <div className="border w-[489px] h-[200px] rounded-2xl p-10">
            
            <div className="flex justify-between mb-7">
              <p className="text-gray-400 font-semibold">Total</p>
              <p className="text-green-600 font-semibold text-2xl">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(total)}
              </p>
            </div>
            <div>
              <Button className="flex gap-4 bg-green-600 w-full py-6">
                <p className="text-green-00 font-bold">Finalizar a Compra</p>
                <IconArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
