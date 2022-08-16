import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { container } from "../../styles/utils"

export const StyledFooter = styled.footer`
    height: 12.5rem;
    background-color: #f4f4f4;
`

export const FooterContainer = styled.div`
    ${container}
    display: grid;
    grid-template-columns: 130px auto 130px;
    padding-top: 2.5rem;
`

export const Contact = styled.p`
    font-size: .75rem;
    color: ${({theme})=> theme.colors.secondary};
    text-align: center;
    margin-top: 8rem;
`
export const SocialNetworksList = styled.ul`
    list-style: none;
    display: flex;
    gap: 1.5rem;
`

export const SocialNetworkIcon = styled(FontAwesomeIcon)`
    color: ${({theme})=> theme.colors.secondary}
`