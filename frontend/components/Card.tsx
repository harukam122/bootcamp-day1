import {Box, Text, Button} from "@chakra-ui/react"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import {useState} from "react";

function Card() {
    const [isClicked, setIsClicked] = useState(false)
    const [text, setText] = useState("hi")

    function onClick() {
        setIsClicked(!isClicked)
        if (text == "hi") {
            setText("bye")
        }
        else {
            setText("hi")
        }
    }

    return <div>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' p='12'>
            <Text fontSize='5xl'>Hi this is Haruka</Text>
            <Text fontSize='sm'>I need to finish my CS homework</Text>
            <Text> {text} </Text>
            <Button colorScheme='teal' variant='solid' onClick={() => onClick()}>
                Click Me
            </Button>
        </Box>
    </div>
}

export default Card;