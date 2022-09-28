import styles from '../styles/components/Icon.module.css'

import Image from 'next/image'

import component from '../public/Analysis.png'


export default function Step(){
    return(
        <Image src={component} alt="Picture of the author" width='100px' height='100px' />
    )
}