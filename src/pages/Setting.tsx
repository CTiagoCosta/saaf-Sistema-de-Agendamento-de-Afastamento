import { Flex, Box } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export function Setting() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" mx="auto" px="6">
                <Sidebar />
            </Flex>
            
        </Box>
    )
}