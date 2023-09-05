import { useNavigate } from 'react-router-dom';
import { Button, Flex, Input, Stack, Image, Text, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { EmailIcon, LockIcon } from '@chakra-ui/icons';


export function SingIn() {
    const navigate = useNavigate();

    const getData = async () => {
        navigate('home');
    }
    return (
       <Flex 
       marginTop="100px"
       marginBottom="100px"
        align="center"
        justify="center"
        >
            <Flex 
                as="form"
                width="100%" 
                maxWidth={460}
                bg="gray.500"
                p="8"
                borderRadius={8}
                flexDir="column"
                >
                <Image src='https://www.dpu.def.br/images/home-2021/Logo_Preferencial_SEMFUNDO_PRETA.png' alt="logo dpu" marginBottom="40px" />
                    <Stack spacing="4">
                        <Text fontWeight="black">E-mail:</Text>
                        <InputGroup>
                            <InputLeftElement top="4px" pointerEvents='none'>
                                <EmailIcon color='gray.300' />
                            </InputLeftElement>
                            <Input
                                name="email" 
                                type="email"
                                size='lg'
                                bgColor="white"
                                color="black"
                                placeholder='Digite seu E-mail'
                            />
                        </InputGroup>
                        <Text fontWeight="black">Senha:</Text>
                        <InputGroup>
                            <InputLeftElement top="4px" pointerEvents='none'>
                                <LockIcon color='gray.300' />
                            </InputLeftElement>
                            <Input
                                name="password" 
                                type="password" 
                                size='lg'
                                bgColor="white"
                                color="black"
                                placeholder='Digite sua Senha'
                            />
                        </InputGroup>
                        <Button 
                            type="submit" 
                            mt="6" 
                            bg="green.50"
                            color="white"
                            size="lg"
                            colorScheme='teal'
                            onClick={getData}
                            >
                            ENTRAR
                        </Button>
                    </Stack>
            </Flex>
       </Flex>
    )
}