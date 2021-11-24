/**
 * 1º Legibilidade
 *
 * A legibilidade é a maneira mais simples de avaliar a qualidade do código e a mais direta de corrigir.
 * É a coisa mais óbvia que você vê ao abrir um trecho de código e geralmente consiste em:
 * Formatação
 * Nomes de variáveis
 * Nomes de funções
 * Quantidade de argumentos de função
 * Comprimento da função (número de linhas)
 * Níveis de aninhamento
 */

import { useState } from "react";

interface CartStateItem {
  product: string;
  img: string;
  desc: string;
  price: number;
  id: number;
  c: string;
}
interface CartState {
  c: string;
  p: CartStateItem[];
}

const cartGlobal: CartState = {
  c: "usd",
  p: [
    {
      product: "Flashlight",
      img: "https://via.placeholder.com/40",
      desc: "A really great flashlight",
      price: 100,
      id: 1,
      c: "usd",
    },
    {
      product: "Tin can",
      img: "https://via.placeholder.com/40",
      desc: "Pretty much what you would expect from a tin can",
      price: 32,
      id: 2,
      c: "usd",
    },
    {
      product: "Cardboard Box",
      img: "https://via.placeholder.com/40",
      desc: "It holds things",
      price: 5,
      id: 3,
      c: "usd",
    },
  ],
};

const Cart: React.FC = () => {
  const [cart] = useState<CartState>(cartGlobal);
  return (
    <div>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
          {cart.p.map(function (i, idx) {
            return (
              <tr key={idx}>
                <td>{i.product}</td>
                <td>
                  <img src={i.img} alt="" />
                </td>
                <td>{i.desc}</td>
                <td>{i.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { Cart };
