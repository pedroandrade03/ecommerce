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

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <div className="relative h-[100px] w-[100px] mt-[-1.5rem]">
              <Image
                src={"/logo.svg"}
                fill={true}
                alt="Picture of the author"
              />
            </div>
            <ul className="text-sm">
              <li className="mb-2 flex items-center gap-1">
                <IconMapPin className="h-[39px] w-[39px]" />
                <div>
                  <strong>Endereço: </strong>Av. Salvador Milego, 524 - Jardim
                  Vera Cruz, Sorocaba - SP, 18050-010
                </div>
              </li>
              <li className="mb-2 flex items-center gap-1">
                <IconHeadphones />
                <div>
                  <strong>Contato: </strong>(15) 3358-8677
                </div>
              </li>
              <li className="mb-2 flex items-center gap-1">
                <IconSend />
                <div>
                  <strong>Email: </strong>vemdaterra@vemdaterraemporio.com.br
                </div>
              </li>
              <li className="flex items-center gap-1">
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
                <a href="#" className="hover:text-green-600">
                  Quem somos
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-green-600">
                  Política de privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Termos e condições
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/6 mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Conta</h2>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#" className="hover:text-green-600">
                  Entrar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Exibir carrinho
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/6 mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Pagamento</h2>
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
        {/*
            Direitos reservados
        */}
        <div className="flex justify-between items-center mt-8 border-t pt-4 text-sm">
          <div>
            <p>
              &copy; 2024,{" "}
              <a href="#" className="text-green-600 hover:underline">
                Vêm da Terra Empório
              </a>{" "}
              - Todos os direitos reservados.
            </p>
          </div>
          <div className="flex items-center">
            <span className="mr-2">Redes Sociais: </span>
            <div className="flex items-center space-x-2">
              <a href="#" className="hover:text-green-600">
                <IconBrandFacebook />
              </a>
              <a href="#" className="hover:text-green-600">
                <IconBrandTwitter />
              </a>
              <a href="#" className="hover:text-green-600">
                <IconBrandInstagram />
              </a>
              <a href="#" className="hover:text-green-600">
                <IconBrandPinterest />
              </a>
              <a href="#" className="hover:text-green-600">
                <IconBrandYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
