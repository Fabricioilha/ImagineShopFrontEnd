import type { NextPage } from 'next'
import styled from 'styled-components'
import { container } from './utils';

const Success: NextPage = () => {
  return (
    <Main>
      <span>Compra realizada com sucesso.</span>
    </Main>
  )
}

const Main = styled.main`
  ${container};
  min-height: 589px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Success