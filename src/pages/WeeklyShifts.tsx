import { Flex, Box, Divider, Heading } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";


export function WeeklyShifts() {
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
                    <Heading size="lg" fontWeight="normal">Plantões Semanais</Heading>

                    <Divider my="6" borderColor="gray.400" />

                </Box>
            </Flex>
        </Box>
    )
}