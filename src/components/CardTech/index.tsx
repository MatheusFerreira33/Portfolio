'use client'
import {CardStyled} from './style';
import { StaticImageData } from 'next/image';

type TProps={
    id:number
    img:StaticImageData,
    name:string
}
export const CardTech = ({img,name,id}:TProps)=>{
    return(
        <CardStyled key={id}>
            <img src={img.src} alt={name} />
        </CardStyled>
    )
}