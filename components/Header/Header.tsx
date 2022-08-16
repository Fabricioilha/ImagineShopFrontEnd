import Image from "next/image"
import Link from "next/link"
import logo from '../../public/images/logo.png'
import cart from "../../public/images/carrinho.png"
import * as C from './headerCss'

const Header = () => {
    return(
        <C.StyledHeader>
            <C.StyledNavBar>
                <Image src={logo} height={100} width={200} />
                <C.MenuList>                    
                    <C.MenuItem><Link href="/" >Home</Link></C.MenuItem>
                    <C.MenuItem><Link href="/about" >Sobre</Link></C.MenuItem>
                    <C.MenuItem><Link href="/Cart" ><a><Image src={cart} width={40} height={40} /></a></Link></C.MenuItem>
                </C.MenuList>
            </C.StyledNavBar>
        </C.StyledHeader>
    )
}


export default Header