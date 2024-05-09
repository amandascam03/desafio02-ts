import { Box } from "@chakra-ui/react"
import { Header } from "./Header/Header"

export const Layout = ({ children }: any) => {
  return(
    <Box minH={"100vh"} backgroundColor={"purple.500"}>
      <Header />
      { children }
    </Box>
  )
}
