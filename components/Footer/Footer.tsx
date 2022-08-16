import Image from "next/image"
import { faFacebookSquare, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import * as C from "./footerCss"
import logo from "../../public/images/logo.png"

const Footer = ()=>{
    return(
        <C.StyledFooter>
            <C.FooterContainer>
                <div>
                    <Image src={logo} height={60} width={120} />
                </div>
                <C.Contact>
                    Fabricio Nascimento - 21 99939-2427 Rua Alagada 123 Chuva Forte, Rio de janeiro - RJ
                </C.Contact>
                <C.SocialNetworksList>
                    <C.SocialNetworkIcon icon={faFacebookSquare} />
                    <C.SocialNetworkIcon icon={faInstagram} />
                    <C.SocialNetworkIcon icon={faYoutube} />
                </C.SocialNetworksList>
            </C.FooterContainer>
        </C.StyledFooter>
    )
}



export default Footer