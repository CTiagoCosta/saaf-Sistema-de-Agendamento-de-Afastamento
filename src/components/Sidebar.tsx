import {  Stack } from "@chakra-ui/react";
import { NavSection } from "./NavSection";
import { RiArrowRightCircleLine,
         RiBriefcase4Line,
         RiCalendar2Line,
         RiCustomerService2Line,
         RiFileChartLine,
         RiFileCopy2Line,
         RiFileCopyLine,
         RiFileEditLine,
         RiHome2Line,
         RiSettings5Line,
         RiUserAddLine
        } from "react-icons/ri";
import { NavLink } from "./NavLink";


export function Sidebar() {
  return (
    <Stack 
      spacing="12" 
      align="flex-start" 
      borderRadius="4px" 
      padding="20px" >
      <NavSection title="GERAL">
        <NavLink icon={RiHome2Line} href="#home">Home</NavLink>
        <NavLink icon={RiSettings5Line} href="#setting">Configurações</NavLink>
      </NavSection>
      <NavSection title="PLANTÕES">
        <NavLink icon={RiCalendar2Line} href="/">Platões Semanais</NavLink>
        <NavLink icon={RiCustomerService2Line} href="/">Plantões de atendimento</NavLink>
      </NavSection>
      <NavSection title="CADASTROS">
        <NavLink icon={RiUserAddLine} href="/">Cadastro de Usuários</NavLink>
        <NavLink icon={RiArrowRightCircleLine} href="/">Cadastro de Afastamentos</NavLink>
        <NavLink icon={RiBriefcase4Line} href="/">Cadastro de Plantões</NavLink>
      </NavSection>
      <NavSection title="RELATÓRIOS">
        <NavLink icon={RiFileChartLine} href="/">Relatórios de Férias</NavLink>
        <NavLink icon={RiFileCopyLine} href="/">Relatórios de Licenças</NavLink>
        <NavLink icon={RiFileCopy2Line} href="/">Relatórios de Folgas</NavLink>
        <NavLink icon={RiFileEditLine} href="/">Relatórios de Cursos</NavLink>
      </NavSection>
    </Stack>
   
  )
}