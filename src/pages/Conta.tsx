import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { CardInfo } from "../components/CardInfo";
import { api } from "../api";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../components/AppContext";

interface userData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

export const Conta = () => {
  const [userData, setUserData] = useState<null | userData>();

  const { isLoggedIn } = useContext(AppContext)

  const { id } = useParams();
  const navigate = useNavigate();

  !isLoggedIn && navigate('/')

  useEffect(() => {
    const getData = async () => {
      const data: any | userData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  const actualData = new Date()

  if (userData && id !== userData.id) {
    navigate('/')
  }

  return (
    <Center>
     <SimpleGrid columns={2} spacing={8} paddingTop={16}>
      {
        userData === undefined || userData === null ?
        (
          <Center>
            <Spinner size={"xl"} color="white" />
          </Center>
        ) :
        (
          <>
          <CardInfo mainContent={`Bem vinda ${userData?.name}`} content={`${actualData.getDay()} / ${actualData.getDay()} / ${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`} />
          <CardInfo mainContent="Saldo" content={`R$ ${userData.balance}`} />
          </>
        )
      }
     </SimpleGrid>
    </Center>
  );
};
