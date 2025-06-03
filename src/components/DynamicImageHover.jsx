import React, { useState } from "react";

export default function DynamicImageHover() {
  const [hovered, setHovered] = useState(false);

  return (
  <>
      {/* Área invisível no canto direito da tela para detectar o hover */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(true)}
        className="fixed top-0 right-0 h-full w-20 cursor-pointer z-50"
        style={{ backgroundColor: hovered ? "rgba(0,0,0,0.05)" : "transparent" }}
      >
        {/* Div só para pegar hover */}
      </div>

      {/* Imagem dinâmica maior que aparece ao passar mouse */}
      {hovered && (
        <div
          className="fixed top-0 right-0 rounded-l-lg shadow-lg overflow-hidden transition-all duration-300 z-50 bg-white"
          style={{
            height: "70vh",      // ocupa 70% da altura da tela
            width: "auto",
            maxWidth: "45vw",    // máximo 45% da largura da tela
            cursor: "pointer",
          }}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src="/images/about.jpeg"
            alt="Destaque"
            style={{
              height: "100%",
              width: "auto",
              objectFit: "contain", // mantém a imagem inteira visível sem corte
              display: "block",
            }}
          />
        </div>
      )}

      {/* Imagem fixa no canto inferior direito quando não está hover */}
      {!hovered && (
        <div
          className="fixed bottom-6 right-6 w-24 h-16 rounded-lg shadow-lg overflow-hidden transition-all duration-300 cursor-pointer z-40"
          style={{ backgroundColor: "white" }}
          onMouseEnter={() => setHovered(true)}
        >
          <img
            src="/images/about.jpeg"
            alt="Destaque pequeno"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </>
  );
}
