import { Button, Center, Flex, Spacer, Text } from "@chakra-ui/react";
import "./Header.css";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../../services/storage";

export const Header = () => {
  const { setIsLoggedIn, isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({ login: false })
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Flex bgColor={"purple.600"} p={"5px"}>
      <Center h={"10"}>
        <Text fontSize={"3xl"}>Dio Bank</Text>
      </Center>
      {isLoggedIn && (
        <>
          <Spacer />
          <Button onClick={() => logout()}>Sair</Button>
        </>
      )}
    </Flex>
  );
};
