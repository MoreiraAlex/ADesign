import Image from 'next/image'


export default function Step({src, alt, width, height}){
    return(
        <Image src={src} alt={alt} width={width} height={height} style={{borderRadius: '50%'}}/>
    )
}