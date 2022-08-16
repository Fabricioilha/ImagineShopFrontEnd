import Image from "next/image";
import Link from "next/link";
import * as C from './productCss'
import { Iproduct } from "../../types/types";


const Products = ({data}:{data: Iproduct[]}) => {
  return (
    <C.ProductContainer>
      <C.Title>
        <span>De</span>staque
      </C.Title>
      <C.ProductsList>
        {data.map((product, index)=> (
          <Link href={`/products/${product._id}`} key={index}>              
              <C.ProductItem>    
                  <Image src={product.image} width={300} height={230} />
                    <C.ProductName>{product.name}</C.ProductName>
                    <C.ProductPrice>{product.formatedPrice}</C.ProductPrice>
                    <C.ProductSplitPrice>Ou parcelado em até 10x</C.ProductSplitPrice>
              </C.ProductItem>              
          </Link>
        ))}
      </C.ProductsList>
    </C.ProductContainer>
  );
};



export default Products;
