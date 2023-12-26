"use client";

import { ContainerServicesOffered } from "./style";
import Desktop from "../../../public/imgServices/desktop.png";
import System from '../../../public/imgServices/sistyma.png';
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export const ServicesOffered = () => {
  const [animated, setAnimated] = useState(false);
  const [animated2, setAnimated2] = useState(false);
  const imageFirstRef = useRef<HTMLDivElement | null>(null);
  const imageFirstRef2 = useRef<HTMLDivElement | null>(null);

  const checkVisibility = () => {
    const element = imageFirstRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible && !animated) {
      setAnimated(true);
    } else if (!isVisible && animated) {
      setAnimated(false);
    }
  };

  const checkVisibility2 = () => {
    const element = imageFirstRef2.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible && !animated2) {
        setAnimated2(true);
    } else if (!isVisible && animated2) {
        setAnimated2(false);
    }
  };

  useEffect(() => {
    checkVisibility();

    const handleScroll = () => {
      checkVisibility();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animated]);


  useEffect(() => {
    checkVisibility2();

    const handleScroll = () => {
      checkVisibility2();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animated2]);

  return (
    <>
      <ContainerServicesOffered animated={animated}>
        <h1>Tipos de serviços</h1>
        <div
          ref={imageFirstRef}
          className={`imageFirst ${animated ? "animate" : ""}`}
        >
          <img src={Desktop.src} alt="Desktop" />
          <UnorderedList className="UnorderedList">
            <strong>Desenvolvimento de WebSites:</strong>
            <br />
            <br />
            <ListItem>Criação de websites corporativos.</ListItem>
            <ListItem>Desenvolvimento de portfólios pessoais.</ListItem>
            <ListItem>
              Websites para pequenas empresas e empreendedores.
            </ListItem>
          </UnorderedList>
        </div>


        <div
          ref={imageFirstRef2}
          className={`TextFirst ${animated2 ? "animate" : ""}`}
        >
          <img src={System.src} alt="Desktop" />
          <UnorderedList className="UnorderedList">
            <strong>Desenvolvimento de Aplicações Web:</strong>
            <br />
            <br />
            <ListItem>Construção de aplicações web sob medida.</ListItem>
            <ListItem>Desenvolvimento de sistemas de gerenciamento de conteúdo (CMS).</ListItem>
            <ListItem>
            Aplicações web para comércio eletrônico (e-commerce).
            </ListItem>
          </UnorderedList>
        </div>
      </ContainerServicesOffered>
    </>
  );
};
