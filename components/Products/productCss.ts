import styled from "styled-components";
import { container } from "../../styles/utils";

export const ProductContainer = styled.section`
  ${container}
a {
  text-decoration: none;
  color: black;
}
`;
export const Title = styled.p`
  font-size: 1.875rem;
  font-weight: 700;
  margin-top: 3.125rem;
  margin-bottom: 2.8rem;
  span {
    text-decoration: underline ${({ theme }) => theme.colors.primary};
  }
  `;

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.875rem;
  margin-bottom: 11.25rem;
  `;

export const ProductItem = styled.div`
  border: 1px solid #eaeaea;
  height: 23.125rem;
  border-radius: 4px;
  box-shadow: 5px 0px 10px #d9d9d9;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 10px 10px #d9d9d9;
    p {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ProductName = styled.p`
  font-size: 0.875rem;
`;
export const ProductPrice = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
`;
export const ProductSplitPrice = styled.small`
  font-size: 0.75rem;
  font-weight: 700;
  color: #999;
`;