import { Link as ChakraLink, Text, Icon, LinkProps as ChakraLinkPropos } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkPropos{
    icon: ElementType;
    children: string;
    href: string;
}

export function NavLink( {icon, children, ...rest }: NavLinkProps) {
    return (
        
        <ChakraLink display="flex" {...rest}>
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="medium">{children}</Text>
        </ChakraLink>
     
)
}