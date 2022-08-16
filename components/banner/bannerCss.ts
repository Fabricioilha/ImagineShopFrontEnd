import styled from "styled-components";
import { container } from "../../styles/utils";

export const BannerContainer = styled.section`
    ${container}
    border-top: 3px solid ${({theme})=> theme.colors.primary};
    border-bottom: 3px solid ${({theme})=> theme.colors.primary};
`