import { Center, Button } from "@chakra-ui/react"

interface Event {
  event: () => void
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