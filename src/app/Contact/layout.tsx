
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ReactNode } from 'react';


// Create a theme with dark mode support
// const themes = extendTheme({
//   config: {
//     initialColorMode: 'dark',
//     useSystemColorMode: false,
//   },
//   styles: {
//     global: {
//       'html, body': {
//         color: 'white',
//         bg: 'gray.800',
//       },
//     },
//   },
// });

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
        
        <ChakraProvider >
          {children}
        </ChakraProvider>
     
        </>
  );
};

export default RootLayout;
