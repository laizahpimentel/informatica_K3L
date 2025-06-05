import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Facebook, Mail } from "lucide-react";
// import DynamicImageHover from "@/components/DynamicImageHover";
// import { utton } from "@/components/ui/button";

// import React from "react";
// import background from "./images/LOGO SEM FUNDO.png";

const portfolioItems = [
  
  {
    title: "Conserto de Notebook Dell",
    image: "/images/note.jpeg",
    description: "Notebook precisava da troca de HD para SSD.",
  },
  {
    title: "Projeto ProtoBoard",
    image: "/images/led.jpeg",
    description: "Reparo de curto e troca de capacitores.",
  },
  // Adicione mais itens conforme necessário
];


export default function HomePage() {

  return (
<div
  className="min-h-screen text-white"
  style={{
    backgroundImage: `linear-gradient(to bottom right, #1f1e1f, #2c2b2c, #3a393a)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat, no-repeat",
  }}
>
      <header className="flex justify-between items-center py-8 px-4">
        <div className="flex-1 text-center">
          {/* <h1 className="text-4xl font-bold">Informática K3L</h1> */}
          {/* <p className="text-lg">Montagem e Reparo de Computadores</p> */}
         </div>


        {/* Botao das pages */}
      <div>
           <a href="/sobre" target="_blank" rel="noreferrer">
            <Button
              variant="outline"
              className="text-white hover:text-gray-400 border-white hover:border-gray-400"
          >  Sobre Nós
            </Button>
          </a>
    </div>

    {/* Logo canto inferior esquerdo */}
        <div className="fixed bottom-0 left-6 w-24 h-24 z-50">
          <img
            src="/images/LOGO COM ESCRITA SEM FUNDO.png"
            alt="Logo TechGamer"
            className="block w-full h-full object-contain"
           />
        </div>

        {/* Logo no canto superior direito */}
        <div className="w-24 h-24 rounded-full border-4 border-indigo-500 overflow-hidden bg-white">
          <img
            src="/images/LOGO.png"
            alt="Logo TechGamer"
            className="block w-full h-full object-cover"
          />
        </div>
      </header>

      {/* Conteúdo principal */}
      <section className="py-6 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Nosso Portfólio</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <Card key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="rounded-t-xl w-full h-48 object-cover"
              />
              <CardContent>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-10 text-center px-4">
        <h2 className="text-2xl font-semibold mb-4">Sobre Nós</h2>
        <p className="max-w-2xl mx-auto text-white-700">
          Somos uma equipe apaixonada por tecnologia, especializada em montagem
          de PCs gamers personalizados e consertos de computadores em geral.
          Nosso foco é qualidade, desempenho e atendimento personalizado para
          cada cliente.
        </p>
      </section>

      <section className="text-center py-10 px-4">
        <h2 className="text-2xl font-semibold mb-4">Fale Conosco</h2>
        <div className="flex justify-center gap-4 mb-4 flex-wrap">
          <a href="mailto:desktop_K3L@outlook.com" target="_blank" rel="noreferrer">
            <Button
              variant="outline"
              className="text-white hover:text-gray-400 border-white hover:border-gray-400"
            >
              <Mail className="mr-2 text-white hover:text-gray-400" />
    
            </Button>
          </a>
          <a href="https://instagram.com/sualoja" target="_blank" rel="noreferrer">
            <Button
              variant="outline"
              className="text-white hover:text-gray-400 border-white hover:border-gray-400"
            >
               <Instagram className="mr-2 text-white hover:text-gray-400" />
            </Button>
          </a>
          <a href="https://facebook.com/sualoja" target="_blank" rel="noreferrer">
            <Button
              variant="outline"
              className="text-white hover:text-gray-400 border-white hover:border-gray-400"
            >
              <Facebook className="mr-2 text-white hover:text-gray-400" />
            </Button>
          </a>
        </div>

        <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            Entrar em Contato via WhatsApp
          </Button>
        </a>
      </section>

      <footer className="text-center text-sm text-gray-500 py-4">
        &copy; {new Date().getFullYear()} Informática K3L. Todos os direitos
        reservados.
      </footer>

      {/* <DynamicImageHover /> */}
    </div>
  );
}
