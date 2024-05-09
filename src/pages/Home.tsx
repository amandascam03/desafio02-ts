import { Box, Center, ChakraProvider, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { useContext, useState } from "react";
import { ButtonLogin } from "../components/ButtonLogin";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";

export const Home = () => {

  const [email, setEmail] = useState<string>("");
  const {setIsLoggedIn} = useContext(AppContext)
  const navigate = useNavigate()

  const validateUser = async (email: string) => {
    const loggedIn = await login(email)

    if (!loggedIn) {
      return alert("Email inválido")
    }
    
    setIsLoggedIn(true)
    changeLocalStorage({ login: true })
    navigate('/conta/3')
  }

  return (
    <ChakraProvider>
      <Box padding={"25px"}>
        <Card>
          <Center>
            <h1>Faça o login</h1>
            <br />
          </Center>
          <Input
            placeholder="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input placeholder="password" />
          <ButtonLogin event={() => validateUser(email)} />
        </Card>
      </Box>
    </ChakraProvider>
  );
};
