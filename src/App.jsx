import React, { useState } from 'react'
import CardProduto from './CardProduto.jsx'

export default function App() {
  const [adicionado, setAdicionado] = useState(false);

  const produto = {
    nome: "Teclado Mecânico RGB – K70",
    preco: "R$ 459,90",
    imagem: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#f9fafb",
        padding: 24
      }}
    >
      <CardProduto
        nome={produto.nome}
        preco={produto.preco}
        imagem={produto.imagem}
        adicionado={adicionado}
        onToggleAdicionar={() => setAdicionado((v) => !v)}
      />
    </main>
  );
}
