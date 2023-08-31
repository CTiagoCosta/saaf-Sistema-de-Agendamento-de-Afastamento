import { Box, Button, Checkbox, Flex, Heading, Text, Link, Table, Tbody, Td, Th, Thead, Tr, Icon } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

export function Dashboard() {
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
                            <Button as="a" size="sm" fontSize="sm" bg="green.50" color="white" leftIcon={<Icon as={RiAddLine} fontSize="16"/> }> 
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="yellow"/>
                                </Th>
                                <Th>Lista de Afastamentos</Th>
                                <Th>Data de Cadastro</Th>
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="yellow"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Link color="white">
                                            <Text fontWeight="bold">Carlos Tiago</Text>
                                        </Link>
                                        <Text fontSize="sm" color="gray.300">teste@teste.com</Text>
                                    </Box>
                                </Td>
                                <Td>01 de agosto de 2023 à 15 de agosto de 2023 </Td>
                                    <Td>
                                    <Button as="a" size="sm" fontSize="sm" bg="green.50" leftIcon={<Icon as={RiPencilLine} color="white" fontSize="16"/> }>
                                        
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="yellow"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Link color="white">
                                            <Text fontWeight="bold">Carlos Tiago</Text>
                                        </Link>
                                        <Text fontSize="sm" color="gray.300">teste@teste.com</Text>
                                    </Box>
                                </Td>
                                <Td>01 de agosto de 2023 à 15 de agosto de 2023 </Td>
                                <Td>
                                    <Button as="a" size="sm" fontSize="sm" bg="green.50" leftIcon={<Icon as={RiPencilLine} color="white" fontSize="16"/> }>
                                        
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="yellow"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Link color="white">
                                            <Text fontWeight="bold">Carlos Tiago</Text>
                                        </Link>
                                        <Text fontSize="sm" color="gray.300">teste@teste.com</Text>
                                    </Box>
                                </Td>
                                <Td>01 de agosto de 2023 à 15 de agosto de 2023 </Td>
                                <Td>
                                    <Button as="a" size="sm" fontSize="sm" bg="green.50" leftIcon={<Icon as={RiPencilLine} color="white" fontSize="16"/> }>
                                        
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