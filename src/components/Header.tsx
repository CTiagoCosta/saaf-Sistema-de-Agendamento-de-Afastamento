import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";
import { NotificationNav } from "./NotificationNav";
import { RiMenuLine } from "react-icons/ri";
import { Profile } from "./Profile";


export function Header() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })
    return (
        <Flex 
            as="header"
            w="100%"
            h="32"
            mx="auto"
            display="flex"
            px="6"
            align="center"
            bg="white"
        >
            
            { !isWideVersion && (
                <IconButton
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    mr="2"
                >

                </IconButton>
            )}
        
        <Logo />
        
        <Flex
            align="center"
            ml="auto"
        >


        </Flex>

        <SearchBox />

        <Flex
            align="center"
            ml="auto"
        >
            
            <NotificationNav />

            <Profile showProfileData={isWideVersion}/>
            
        </Flex>
            
        </Flex>
    )
}
