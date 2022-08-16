import styled from "styled-components"
import { container } from "../../styles/utils"

export const StyledHeader = styled.header`
    margin: 1.87rem 0 3.125rem 0 ;
`
export const StyledNavBar = styled.nav`
    ${container}
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const MenuList = styled.ul`
    list-style: none;
    display: flex;
    gap: 2.5rem;
    align-items: center;
`

export const MenuItem = styled.li`
    font-size: 1rem;
    font-weight: 700;
    a{
        text-decoration: none;
        color: #000;
    }
    a:hover{
        color: ${({theme})=> theme.colors.primary };
    }
`