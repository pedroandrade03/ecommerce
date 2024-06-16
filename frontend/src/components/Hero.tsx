import Image from "next/image";
import { Button } from "@/components/ui/button";
import {} from "@tabler/icons-react";

export default function Hero() {
  return (
    <div className="flex items-center justify-between bg-blue-100 rounded-lg p-10 shadow-lg max-w-screen-xl">
      <div className="flex flex-col">
        <div className="relative h-[100px] w-[100px] mb-4">
          <Image src="/logo.svg" fill={true} alt="Logo" />
        </div>
        <h1 className="text-5xl font-bold text-gray-800 leading-tight">
          Não perca as ofertas em produtos veganos!
        </h1>
        <p className="mt-4 text-lg text-gray-600">Incrível açougue vegano</p>
        <div className="rounded-lg">
          <Button className="mt-6 bg-green-500 text-white px-8 py-4 shadow-md hover:bg-green-600 text-lg rounded-full">
            Comprar agora
          </Button>
        </div>
      </div>
      <div className="relative w-[400px] h-[400px] mt-[-2rem] mr-[-2rem]">
        <Image
          src="/image-removebg-preview.svg"
          fill={true}
          alt="Produtos veganos"
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
