import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    bg: {
      100: '#ddd',
    },
    green: {
      600: '#017143'
    }
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins"
  },
  styles: {
    global: {
      body: {
        bg: 'bg.100',
      }
    }
  }
});