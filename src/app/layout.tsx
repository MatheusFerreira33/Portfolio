import StyledComponentsRegistry from './lib/registry'
import { ChakraProvider} from '@chakra-ui/react';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>      
      <body style={{
          margin:0,
          padding:0,
          boxSizing:'border-box',
          backgroundColor:'#151517'
      }}>
        <StyledComponentsRegistry>
            <ChakraProvider>
              {children}
            </ChakraProvider>
          </StyledComponentsRegistry>
      </body>

    </html>
  )
}