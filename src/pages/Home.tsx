import { Box, Button, Checkbox, Flex, Heading, Text, Link, Table, Tbody, Td, Th, Thead, Tr, Icon } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

export function Home() {
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Afastamentos
                        
                        </Heading>
                        <Link href="">
                            <Button as="a" size="md" fontSize="md" colorScheme='teal' variant='solid' textDecor="none" leftIcon={<Icon as={RiAddLine} fontSize="22"/> }> 
                                Cadastro de Afastamento
                            </Button>
                        </Link>
                    </Flex>
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="yellow"/>
                                </Th>
                                <Th>Tipo de Afastamentos</Th>
                                <Th>Afastados</Th>
                                <Th>Período de Afastamentos</Th>
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="yellow"/>
                                </Td>
                                <Td>Férias</Td>
                                <Td>
                                    <Box>
                                        <Link color="white">
                                            <Text fontWeight="bold">Félix Kury</Text>
                                        </Link>
                                        <Text fontSize="sm" color="gray.300">teste@teste.com</Text>
                                    </Box>
                                </Td>
                                <Td>01/08/2023 <br/><br/> 15/08/2023 </Td>
                                    <Td>
                                    <Button as="a" size="sm" fontSize="sm" colorScheme='teal' variant='solid' leftIcon={<Icon as={RiPencilLine} color="white" fontSize="16"/> }>
                                        
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="yellow"/>
                                </Td>
                                
                                <Td>Folga</Td>
                                <Td>
                                    <Box>
                                        <Link color="white">
                                            <Text fontWeight="bold">Carmem Lúcia</Text>
                                        </Link>
                                        <Text fontSize="sm" color="gray.300">teste@teste.com</Text>
                                    </Box>
                                </Td>
                                <Td>01/08/2023 <br/>  <br/> 15/08/2023 </Td>
                                <Td>
                                    <Button as="a" size="sm" fontSize="sm" colorScheme='teal' variant='solid' leftIcon={<Icon as={RiPencilLine} color="white" fontSize="16"/> }>
                                        
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="yellow"/>
                                </Td>
                                
                                <Td>Licença Maternidade</Td>
                                <Td>
                                    <Box>
                                        <Link color="white">
                                            <Text fontWeight="bold">Maria do Carmo</Text>
                                        </Link>
                                        <Text fontSize="sm" color="gray.300">teste@teste.com</Text>
                                    </Box>
                                </Td>
                                <Td>01/08/2023 <br/>  <br/> 15/08/2023 </Td>
                                <Td>
                                    <Button as="a" size="sm" fontSize="sm" colorScheme='teal' variant='solid' leftIcon={<Icon as={RiPencilLine} color="white" fontSize="16"/> }>
                                        
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            </Flex>
        </Box>
    )
}