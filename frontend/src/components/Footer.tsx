import Image from "next/image";
import {
  IconMapPin,
  IconHeadphones,
  IconSend,
  IconClock,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 px-4 lg:px-32 mt-4 py-12">
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col w-full md:w-1/2 mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Informações</h2>
          <ul className="flex flex-col text-sm gap-1">
            <li className="mb-2 flex gap-1 items-center">
              <IconMapPin />
              <div>
                <strong>Endereço: </strong>Av. Salvador Milego, 524 - Jardim
                Vera Cruz, Sorocaba - SP, 18050-010
              </div>
            </li>
            <li className="mb-2 flex gap-1 items-center">
              <IconHeadphones />
              <div>
                <strong>Contato: </strong>(15) 3358-8677
              </div>
            </li>
            <li className="mb-2 flex gap-1 items-center">
              <IconSend />
              <div>
                <strong>Email: </strong>vemdaterra@vemdaterraemporio.com.br
              </div>
            </li>
            <li className="flex gap-1 items-center">
              <IconClock />
              <div>
                <strong>Horário: </strong>09:00 - 19:00, Seg - Sex 09:00 -
                13:00, Sab
              </div>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/6 mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Empresa</h2>
          <ul className="text-sm">
            <li className="mb-2">
              <Link href="#" className="hover:text-green-600">
                Quem somos
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:text-green-600">
                Política de privacidade
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-green-600">
                Termos e condições
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/6 mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Conta</h2>
          <ul className="text-sm">
            <li className="mb-2">
              <Link href="#" className="hover:text-green-600">
                Entrar
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-green-600">
                Exibir carrinho
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/6 mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Pagamento</h2>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Pague na entrada com: </p>
            <div className="relative h-[30px] w-[200px]">
              <Image
                src={"/payment-method 1.png"}
                fill={true}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-8 border-t pt-4 text-sm">
        <div>
          <p>
            &copy; 2024,{" "}
            <Link href="#" className="text-green-600 hover:underline">
              Vêm da Terra Empório
            </Link>{" "}
            - Todos os direitos reservados.
          </p>
        </div>
        <div className="flex items-center">
          <span className="mr-2">Redes Sociais: </span>
          <div className="flex items-center space-x-2">
            <Link href="#" className="hover:text-green-600">
              <IconBrandFacebook />
            </Link>
            <Link href="#" className="hover:text-green-600">
              <IconBrandTwitter />
            </Link>
            <Link href="#" className="hover:text-green-600">
              <IconBrandInstagram />
            </Link>
            <Link href="#" className="hover:text-green-600">
              <IconBrandPinterest />
            </Link>
            <Link href="#" className="hover:text-green-600">
              <IconBrandYoutube />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
