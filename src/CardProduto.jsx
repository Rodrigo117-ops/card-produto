import React from 'react'
import styled, { css } from 'styled-components'

const CardContainer = styled.article`
  width: 320px;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  padding: 20px;
  box-shadow: 0 10px 16px rgba(0, 0, 0, 0.06);
  display: grid;
  row-gap: 12px;
`

const ProductName = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  color: #111827;
  font-weight: 700;
`

const PriceTag = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #374151;
  strong {
    font-size: 1.125rem;
    color: #111827;
  }
`

const AddButton = styled.button`
  align-self: start;
  cursor: pointer;
  border: 0;
  border-radius: 10px;
  padding: 10px 14px;
  font-weight: 600;
  color: #ffffff;
  transition: transform 120ms ease, filter 120ms ease;

  ${(props) =>
    props.adicionado
      ? css`
          background: #198754;
          &:hover {
            filter: brightness(1.05);
          }
          &:active {
            transform: translateY(1px) scale(0.99);
          }
        `
      : css`
          background: #6c757d;
          &:hover {
            filter: brightness(1.02);
          }
          &:active {
            transform: translateY(1px) scale(0.99);
          }
        `}
`

const FooterNote = styled.small`
  color: #6b7280;
`
const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 8px;
`;

export default function CardProduto({ nome, preco, imagem, adicionado, onToggleAdicionar }) {
  return (
    <CardContainer>
      <ProductImage src={imagem} alt={nome} />
      <ProductName>{nome}</ProductName>
      <PriceTag>
        Preço: <strong>{preco}</strong>
      </PriceTag>
      <AddButton adicionado={adicionado} onClick={onToggleAdicionar}>
        {adicionado ? "Remover do carrinho" : "Adicionar ao carrinho"}
      </AddButton>
      <FooterNote>
        {adicionado
          ? "Este item está no seu carrinho."
          : "Clique para adicionar ao carrinho."}
      </FooterNote>
    </CardContainer>
  );
}


