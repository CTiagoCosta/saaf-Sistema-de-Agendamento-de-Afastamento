import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                 <Box mr="4" textAlign="right">
                 <Text color="gray.800" fontSize="18">Carlos Tiago</Text>
                 <Text color="gray.800" fontSize="18">
                     tiago@teste.com
                 </Text>
             </Box>
            )}
        <Avatar size="md" name="Carlos Tiago" src="https://github.com/CTiagoCosta.png"/>
    </Flex>
    );
}