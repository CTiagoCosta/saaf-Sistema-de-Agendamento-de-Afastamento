import { Flex, Box, Button, Divider, HStack, Heading, Input, Link, SimpleGrid, Text, Stack, InputGroup, Avatar, Select, InputLeftElement } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";



export function Setting() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" mx="auto" px="6">
                <Sidebar />

                <Box 
                    as="form" 
                    flex="1" 
                    borderRadius={8} 
                    bg="gray.800" 
                    p={["6", "8"]} 
                >
                    <Heading size="lg" fontWeight="normal">Seus Dados</Heading>

                    <Divider my="6" borderColor="gray.400" />
                    
                    <Stack display="flex" flexDirection="row-reverse" justifyContent="space-evenly">
                        <SimpleGrid  width="50%">
                            <Box height='40px'>
                                <Text>Nome:</Text>
                                <InputGroup>
                                    <Input 
                                        name="name" 
                                        bg="white"
                                        color="black"
                                        placeholder="Digite seu nome completo"
                                        />
                                </InputGroup>
                            </Box>
                            <SimpleGrid columns={2} spacing={10}>
                                <Box height='40px'>
                                    <Text>Cargo:</Text>
                                    <Select bg="white"
                                            color="black"
                                            placeholder='Selecione o Cargo'
                                        >
                                        <option value='option1'>Defensor Público</option>
                                        <option value='option2'>Servidor Público</option>
                                        <option value='option3'>Terceirizado</option>
                                        <option value='option4'>Estagiário</option>
                                    </Select>
                                </Box>
                                <Box height='40px'>
                                    <Text>Telefone:</Text>
                                    <InputGroup>
                                    <InputLeftElement pointerEvents='none'>
                                        <PhoneIcon color='gray.300' />
                                    </InputLeftElement>
                                        <Input 
                                            name="phone" 
                                            type="phone"
                                            bg="white"
                                            color="black"
                                            placeholder="(99) 99999-9999"
                                        />
                                    </InputGroup>
                                </Box>

                            </SimpleGrid>
                            <Box height='40px'>
                                <Text>Email:</Text>
                                <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                        <EmailIcon color='gray.300' />
                                    </InputLeftElement>
                                    <Input 
                                        name="email" 
                                        bg="white"
                                        color="black"
                                        placeholder="email@email.com"
                                    />
                                </InputGroup>
                            </Box>
                        </SimpleGrid>
                            <Box display="flex" justifyContent="space-around">
                                <Avatar 
                                    height='280px'
                                    width='280px' 
                                    name="Carlos Tiago" 
                                    src="https://github.com/CTiagoCosta.png" />
                            </Box>
                    </Stack>
                            <Box height='80px'>
                                <Flex mt="10" justify="center" display="flex">
                                    <HStack spacing="6">
                                    <Link href="/">
                                        <Button 
                                            as="a" 
                                            colorScheme="whiteAlpha"
                                            height='48px'
                                            width='200px'
                                            textDecor="none"
                                        >
                                            Cancelar
                                        </Button>
                                    </Link>
                                        <Button 
                                            type="submit" 
                                            color="white" 
                                            colorScheme='teal'
                                            variant='solid' 
                                            height='48px'
                                            width='200px'
                                        >
                                            Salvar
                                        </Button>
                                    </HStack>
                                </Flex>
                            </Box>
                </Box>
            </Flex>
        </Box>
    )
}