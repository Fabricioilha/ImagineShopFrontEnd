import { GetServerSideProps, NextPage } from "next";
import Banner from "../../components/banner/Banner";
import { IProduct, ProductProps } from "../../types/types";
import bannerImg from '../../public/images/BANNER 02.png'
import Image from "next/image";
import * as C from './productIdCss'
import Layout from "../../components/Layout/Layout";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { useContext } from "react";


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const productId = ctx.params?.productID;
  const api = 'https://backendimagineshop.herokuapp.com';
  const result = await fetch(`${api}/product/${productId}`);
  const product: IProduct = await result.json();
  product.image = `${api}/uploads/${product.filename}`;
  product.formatedPrice = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })).format(product.price);
  return {
    props: {
      product
    }
  }
}


const ProductId: NextPage<ProductProps> = ({ product }) => {
  const {addProduct} = useContext(ShoppingCartContext)
  
  const handleAddProduct = async ()=>{
    addProduct(product)
  }

  return (
    <Layout>
      <C.ProductContainer>
        <Banner image={bannerImg} width={1140} height={145} />
        <C.ProductDetail>
          <C.ImageContainer>
            <Image src={product.image} width={200} height={200} />
          </C.ImageContainer>

          <div>
            <C.ProductName>
              {product.name}
            </C.ProductName>

            <C.ProductPrice>
              {product.formatedPrice}
            </C.ProductPrice>

            <C.ProductSplitPrice>
              10x de {product.formatedPrice} sem juros
            </C.ProductSplitPrice>

            <C.Button onClick={handleAddProduct}>
              Adicionar ao carrinho
            </C.Button>

            <C.ProductDescription>
              {product.description}
            </C.ProductDescription>
          </div>
        </C.ProductDetail>

        <C.SummaryTitle>
          <span>Inf</span>ormações do produto
        </C.SummaryTitle>

        <C.Summary>
          {product.summary}
        </C.Summary>
      </C.ProductContainer>
    </Layout>
  )
}



export default ProductId