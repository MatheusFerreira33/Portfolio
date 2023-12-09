'use client'
import {StyledSectionAboutMe} from './style';
import MinhaFoto from '../../../public/minha_foto-PhotoRoom.png-PhotoRoom.png';
import Typed from 'typed.js';
import React from 'react';
import { Button } from '@chakra-ui/react';
import {saveAs}  from 'file-saver';

export const AboutMe = ()=>{

    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Ola, sou Matheus Ferreira','Desenvolvedor Web Full-Stack'],
        typeSpeed: 50,
        loop:true
      });
  
      return () => {
        typed.destroy();
      };
    }, []);

    const handleDownload = async() => {
        const filePath = 'http://localhost:3000/MatheusFerreira%20Web%20Full-Stack.pdf';

        const response = await fetch(filePath);
        const arrayBuffer = await response.arrayBuffer();
  
        const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
        saveAs(blob, 'dev Matheus Ferreira');
      };

    return (
        <>
            <StyledSectionAboutMe>

                <div className='box1'>
                    <img src={MinhaFoto.src}/>

                </div>

                <div className='box2'>
                    <span ref={el}/>

                    <h1>Eu <b>amo</b> criar e <b>desenvolver</b> projetos</h1>
                    <p>
                        Minha paixão pela programação 
                        começou aos 14 anos, ao longo dos anos estou adquirindo conhecimento Web, 
                        essa combinação de conhecimentos técnicos sólidos, experiência prática e 
                        dedicação contínua me permite enfrentar desafios no desenvolvimento de software 
                        e buscar novas oportunidades para crescer profissionalmente. Estou 
                        constantemente buscando expandir meu conjunto de habilidades e me manter atualizado 
                        com as tendências e avanços no campo da T.I.
                    </p>
                    <Button backgroundColor={'#623CEA'} onClick={()=>handleDownload()}>Download CV</Button>
                </div>

            </StyledSectionAboutMe>
        </>
    )
}

