import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";
import {
  IconUser,
  IconShoppingCart,
  IconSearch,
  IconCategory,
  IconFlame,
  IconCircleFilled,
} from "@tabler/icons-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useShoppingCart } from "@/context/CartContext";

const all_categories: { title: string; href: string }[] = [
  {
    title: "Cosméticos",
    href: "/categorias/categoriaId",
  },
  {
    title: "Dietas Especiais",
    href: "/categorias/categoriaId",
  },
  {
    title: "Ecológicos",
    href: "/categorias/categoriaId",
  },
  {
    title: "Fitoterápicos",
    href: "/categorias/categoriaId",
  },
  {
    title: "Mercearia",
    href: "/categorias/categoriaId",
  },
  {
    title: "Orientais",
    href: "/categorias/categoriaId",
  },
  {
    title: "Veganos",
    href: "/categorias/categoriaId",
  },
];

export default function NavBar() {
  const { cartItems } = useShoppingCart();

  return (
    <header className="flex flex-col items-center w-full px-4 lg:px-32 mb-4">
      <div className="flex items-center justify-between border-b-2 py-2 w-full">
        <Link href="/">
          <Image
            src={"/logo.svg"}
            height={100}
            width={100}
            alt="Picture of the author"
          />
        </Link>
        <div className="flex w-full max-w-xl items-center relative">
          <Input type="text" placeholder="Pesquisar por itens..." />
          <Button
            type="submit"
            className="absolute inset-y-0 right-0 bg-transparent text-slate-500 hover:text-white"
          >
            <IconSearch />
          </Button>
        </div>
        <div className="flex gap-8 text-slate-700">
          <div className="flex items-center">
            <IconUser />
            <p className="text-gray-500">Conta</p>
          </div>
          <Link href="/cart">
            <div className="flex items-center">
              <div className="flex relative">
                <IconShoppingCart />
                <div className="absolute -right-2 -top-3 flex items-center justify-center">
                  <IconCircleFilled className="w-6 h-6 text-green-500 relative" />
                  <p className="text-sm text-center text-white absolute">
                    {cartItems.length}
                  </p>
                </div>
              </div>
              <p className="text-gray-500">Carrinho</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex gap-2 py-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="flex gap-2 text-white bg-green-500">
                <IconCategory />
                Pesquisar todas categorias
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col p-2 lg:w-[150px]">
                  {all_categories.map((all_categories) => (
                    <ListItem
                      key={all_categories.title}
                      title={all_categories.title}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/categorias/10bccd70-a9f0-44ae-b359-5646e337701c"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Cosméticos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/categorias/296380a5-787f-4113-988b-1e295dcaec62"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Dietas Especiais
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/categorias/31e5ca52-4c1f-4320-8ea7-ddbf9ca10a2e"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Ecológicos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/categorias/357165e7-8d55-4e2b-82a3-c329214557ce"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Fitoterápicos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/categorias/3e4f2d7c-0224-466a-ab13-e0c5e086e94e"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Mercearia
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/categorias/8027fd25-a0ba-4693-81fa-a0c2a5312791"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Veganos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

const ListItem = ({ title }: { title: string }) => {
  return (
    <li>
      <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
        <p className="text-sm font-medium leading-none">{title}</p>
      </div>
    </li>
  );
};
ListItem.displayName = "ListItem";
