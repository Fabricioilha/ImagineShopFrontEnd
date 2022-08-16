import Image, { StaticImageData } from "next/image"
import * as C from "./bannerCSS"

interface bannerProps {
    image:StaticImageData,
    width:number,
    height: number
}
const Banner = ({image, width, height}: bannerProps)=>{
    return(
        <C.BannerContainer>
            <Image src={image} width={width} height={height} />
        </C.BannerContainer>
    )
}


export default Banner

