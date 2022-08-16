import { GetServerSideProps, NextPage } from 'next'
import Banner from '../components/banner/Banner'
import Layout from '../components/Layout/Layout'
import Products from '../components/Products/Products'
import * as C from '../styles/index'
import { IProduct, ProductProps } from '../types/types'
import bannerimg from '../public/images/BANNER 01.png'

export const getServerSideProps: GetServerSideProps = async ()=> {
  const api = `https://backendimagineshop.herokuapp.com`
  const result = await fetch(`${api}/products`)
  const data = await result.json()
  data.forEach((product : IProduct) => {
    product.image = `${api}/uploads/${product.filename}`
    product.formatedPrice = (new Intl.NumberFormat("pt-br",{style: "currency", currency:"BRL"})).format(product.price)
  });
  return {props: {products: data}}
}

const Home: NextPage<ProductProps> = ({products}) => {
  
  return ( 
    <Layout>
      <C.Main>
        <Banner image={bannerimg} width={1140} height={325} /> 
        <Products data={products} />
      </C.Main>
    </Layout>
  )
}

export default Home
