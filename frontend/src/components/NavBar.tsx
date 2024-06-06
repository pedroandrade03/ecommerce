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

const all_categories: { title: string; href: string }[] = [
  {
    title: "Cosméticos",
    href: "/",
  },
  {
    title: "Dietas Especiais",
    href: "/",
  },
  {
    title: "Ecológicos",
    href: "/",
  },
  {
    title: "Fitoterápicos",
    href: "/",
  },
  {
    title: "Mercearia",
    href: "/",
  },
  {
    title: "Orientais",
    href: "/",
  },
  {
    title: "Veganos",
    href: "/",
  },
];

const cosmetics: { title: string; href: string }[] = [
  {
    title: "Argilas",
    href: "/",
  },
  {
    title: "Hidratantes",
    href: "/",
  },
  {
    title: "Higiene",
    href: "/",
  },
  {
    title: "Higiene Bucal",
    href: "/",
  },
];

const special_diets: { title: string; href: string }[] = [
  {
    title: "Sem Açucar",
    href: "/",
  },
  {
    title: "Sem Glúten",
    href: "/",
  },
  {
    title: "Sem Lactose",
    href: "/",
  },
];

const ecological: { title: string; href: string }[] = [
  {
    title: "Diversos",
    href: "/",
  },
  {
    title: "Produtos de Limpeza",
    href: "/",
  },
];

const herbal_medicine: { title: string; href: string }[] = [
  {
    title: "Acessórios",
    href: "/",
  },
  {
    title: "Encapsulados",
    href: "/",
  },
  {
    title: "Hidrolatos",
    href: "/",
  },
];

const vegan: { title: string; href: string }[] = [
  {
    title: "Congelados",
    href: "/",
  },
  {
    title: "Refrigerados",
    href: "/",
  },
  {
    title: "Sorvetes",
    href: "/",
  },
];

export default function NavBar() {
  return (
    <header className="w-full px-8">
      <div className="flex items-center justify-between">
        <div className="relative h-[103px] w-[74px]">
          <Image src={"/logo.svg"} fill={true} alt="Picture of the author" />
        </div>
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
          <div className="flex items-center">
            <div className="flex relative">
              <IconShoppingCart />
              <div className="absolute -right-2 -top-3 flex items-center justify-center">
                <IconCircleFilled className="w-6 h-6 text-green-500 relative" />
                <p className="text-sm text-center text-white absolute">4</p>
              </div>
            </div>
            <p className="text-gray-500">Carrinho</p>
          </div>
        </div>
      </div>
      <div className="flex justify- gap-2">
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
                      href={all_categories.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <div className="flex items-center">
                    <IconFlame className="text-green-500" />
                    <p className="text-base font-semibold">Ofertas</p>
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <p className="text-base">Início</p>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base">
                Cosméticos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col p-2 lg:w-[150px]">
                  {cosmetics.map((cosmetics) => (
                    <ListItem
                      key={cosmetics.title}
                      title={cosmetics.title}
                      href={cosmetics.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base">
                Dietas Especiais
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col p-4 lg:w-[150px]">
                  {special_diets.map((special_diets) => (
                    <ListItem
                      key={special_diets.title}
                      title={special_diets.title}
                      href={special_diets.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base">
                Ecológicos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col p-4 lg:w-[150px]">
                  {ecological.map((ecological) => (
                    <ListItem
                      key={ecological.title}
                      title={ecological.title}
                      href={ecological.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base">
                Fitoterápicos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col p-4 lg:w-[150px]">
                  {herbal_medicine.map((herbal_medicine) => (
                    <ListItem
                      key={herbal_medicine.title}
                      title={herbal_medicine.title}
                      href={herbal_medicine.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <p className="text-base">Mercearia</p>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <p className="text-base">Orientais</p>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base">
                Veganos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col p-2 lg:w-[150px]">
                  {vegan.map((vegan) => (
                    <ListItem
                      key={vegan.title}
                      title={vegan.title}
                      href={vegan.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
