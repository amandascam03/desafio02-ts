import { Center, Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface Event {
  event: MouseEventHandler
}

export const ButtonLogin = ({ event }: Event) => {
    return (
        <Center>
            <Button
              onClick={event}
              colorScheme="teal"
              size="sm"
              width="100%"
              marginTop="5px"
            >
              Button
            </Button>
          </Center>
    )
}