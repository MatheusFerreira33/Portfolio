'use client'
import Link from 'next/link';
import {StyledMenu} from './style';
import { Menu, MenuButton, MenuList, useMediaQuery,IconButton } from '@chakra-ui/react';
import { BiSolidFoodMenu } from "react-icons/bi";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import {Item} from '../MenuItem';

export const Header = ()=>{
    const [isWideScreen] = useMediaQuery("(min-width: 800px)")

    return(
        <>
            <header>
                <StyledMenu>
                    <Link href={"/"}
                    style={{
                        display:'flex',
                        alignItems:'center',
                    }} >
                        <IoIosArrowBack/>Matheus Ferreira /<IoIosArrowForward/>
                    </Link>
                    {isWideScreen ? (
                        <>
                            <ul>
                                <li>Projetos</li>
                                <li>Contato</li>
                                <li>Sobre Mim</li>
                                <li>Tecnologias</li>
                                <li>Serviços Oferecidos</li>
                            </ul> 
                        </>
                    ) :
                    <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label='Options'
                      style={{
                        fontSize:'25px',
                        backgroundColor:'white'
                      }}
                      icon={<BiSolidFoodMenu />}
                      variant='outline'
                    />
                    <MenuList style={{
                        border:'1px solid #623CEA',
                        backgroundColor:'#0A0A0B',
                        opacity:'5',
                        transition: '0.5s ease'
                    }}>
                        <Item name='Projetos'/>
                        <Item name='Contato'/>
                        <Item name='Sobre Mim'/>
                        <Item name='Tecnologias'/>
                        <Item name='Serviços Oferecidos'/>
                        </MenuList>
                  </Menu>
                  
                  }
                </StyledMenu>
            </header>
        </>
    )
}