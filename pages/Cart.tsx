import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import * as C from "../styles/Cart";
import { IProduct } from "../types/types";
import Layout from "../components/Layout/Layout";

const ShoppingCart: NextPage = () => {
  const {
    getProducts,
    deleteProduct,
    getTotalValue,
    getTotalProducts,
    getShippingValue,
    clearAll,
  } = useContext(ShoppingCartContext);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [refresh, setRefresh] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const values = getProducts();
    setProducts(values);
  }, [refresh]);

  const handleDeleteProduct = (id: string) => {
    toast.success("Produto removido do carrinho", {
      position: "bottom-right",
      autoClose: 3000,
    });
    deleteProduct(id);
    setRefresh((oldValue) => oldValue + 1);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const api = "http://localhost:5000";
    const token = await getTokenLogin(api, email, password);
    if (!token) {
      toast.error("Login inválido", {
        position: "bottom-right",
        autoClose: 3000,
      });
      return;
    }
    const productIds: string[] = [];
    products.map((product) => productIds.push(product._id));
    const sell = await sellProducts(api, token, productIds);
    if (!sell) {
      toast.error("Compra inválida", {
        position: "bottom-right",
        autoClose: 3000,
      });
      return;
    }
    clearAll();
    router.push("/success");
  };

  const getTokenLogin = async (
    api: string,
    email: string,
    password: string
  ): Promise<string | null> => {
    const result = await fetch(`${api}/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { 
        "Content-type": "application/json; charset=utf-8"
     }
      
    });
    
    if (result.status !== 200) {
      return null;
    }
    const { token } = await result.json();
    return token;
  };

  const sellProducts = async (
    api: string,
    token: string,
    products: string[]
  ): Promise<string | null> => {
    const result = await fetch(`${api}/products/sell`, {
      method: "POST",
      body: JSON.stringify({ products }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (result.status !== 200) {
      return null;
    }
    return "success";
  };

  return products && products.length > 0 ? (
    <Layout>
      <C.Main>
        <C.Title>Meu Carrinho</C.Title>
        <C.SubTitle>Produtos</C.SubTitle>
        <C.ShoppingCartContainer>
          <C.ShoppingCartProducts>
            <C.Separator></C.Separator>
            {products &&
              products.map((product, index) => (
                <div key={index}>
                  <C.ButtonContainer>
                    <button onClick={() => handleDeleteProduct(product._id)}>
                      <C.DeleteIcon icon={faX}></C.DeleteIcon>
                    </button>
                  </C.ButtonContainer>
                  <C.Product>
                    <div>
                      <Image src={product.image} width={180} height={180} />
                    </div>
                    <C.ProductName>{product.name}</C.ProductName>
                    <C.ProductPrice>{product.formatedPrice}</C.ProductPrice>
                  </C.Product>
                  <C.Separator></C.Separator>
                </div>
              ))}
          </C.ShoppingCartProducts>

          <section>
            <C.ShoppingCartPayment>
              <C.PaymentTitle>1. Resumo do pedido</C.PaymentTitle>
              <C.PaymentValue>
                <span>{products.length} Produtos</span>{" "}
                <span>{getTotalProducts()}</span>
              </C.PaymentValue>
              <C.PaymentShipping>
                <span>Frete</span> <span>{getShippingValue()}</span>
              </C.PaymentShipping>
              <C.PaymentTotal>
                <span>Total</span> <span>{getTotalValue()}</span>
              </C.PaymentTotal>
              <C.Separator></C.Separator>
              <C.LoginTitle>2. Login</C.LoginTitle>
              <C.InputGroup>
                <span>E-MAIL:</span>
                <input
                  type="text"
                  value={email || ""}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </C.InputGroup>
              <C.InputGroup>
                <span>SENHA:</span>
                <input
                  type="password"
                  value={password || ""}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </C.InputGroup>
              <C.Button type="submit" onClick={handleSubmit}>
                Continuar
              </C.Button>
            </C.ShoppingCartPayment>
          </section>
        </C.ShoppingCartContainer>
      </C.Main>
      <ToastContainer />
    </Layout>
  ) : (
    <Layout>
        <C.Main>Sem produto</C.Main>
    </Layout>
  );
};

export default ShoppingCart;
