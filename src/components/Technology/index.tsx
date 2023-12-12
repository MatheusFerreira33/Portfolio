"use client"

import {StyledContainerTechnology} from './style';
import {CardTech} from '../CardTech';
import {ArrayFront} from '../../utils/TechFrontEnd';
import {ArrayBack} from '../../utils/TechBackEnd';

export const Technology = ()=>{

    return (

        <StyledContainerTechnology>
            <h1>Tecnologias que dominio</h1>
            <h3 className='titleFront'>Front End</h3>
            <ul className='frontend'>
                {ArrayFront.map((tech=>{
                    return(
                        <CardTech id={tech.id} img={tech.img} name={tech.name} key={tech.id}/>
                    )
                }))}
            </ul><br/>
            <h3>Back End</h3>
            <ul className='backend'>
                {ArrayBack.map((tech=>{
                    return(
                        <CardTech id={tech.id} img={tech.img} name={tech.name} key={tech.id}/>
                    )
                }))}
            </ul>

        </StyledContainerTechnology>
    )
}