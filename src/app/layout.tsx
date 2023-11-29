import { Inter } from 'next/font/google';
import { ChakraProvider } from '@chakra-ui/react';
import StyledComponentsRegistry from './lib/registry';
import { GlobalStyle } from '../style/Global';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className} style={{
        background:'red',
        display:'none',
        margin:'0',
        boxSizing:'border-box'
      }}>
        <ChakraProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ChakraProvider>
      </body>
    
    </html>
  );
}
