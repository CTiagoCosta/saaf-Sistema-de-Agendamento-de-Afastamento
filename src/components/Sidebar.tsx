import {  Stack } from "@chakra-ui/react";
import { NavSection } from "./NavSection";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";


export function Sidebar() {
  return (
    <Stack 
      spacing="12" 
      align="flex-start" 
      //bg="gray.700" 
      borderRadius="4px" 
      padding="20px" >
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/">Home</NavLink>
        <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
        <NavLink icon={RiDashboardLine} href="/">Configurações</NavLink>
      </NavSection>
      <NavSection title="PLANTÕES">
        <NavLink icon={RiDashboardLine} href="/">Platões Semanais</NavLink>
        <NavLink icon={RiDashboardLine} href="/">Plantões de atendimento</NavLink>
        <NavLink icon={RiDashboardLine} href="/">Cadastro de Plantões</NavLink>
      </NavSection>
      <NavSection title="USUÁRIOS">
        <NavLink icon={RiContactsLine} href="/">Cadastro de Usuários</NavLink>
        <NavLink icon={RiContactsLine} href="/">Cadastro de Afastamentos</NavLink>
        <NavLink icon={RiContactsLine} href="/">Cadastro de Administrador</NavLink>
      </NavSection>
      <NavSection title="RELATÓRIOS">
        <NavLink icon={RiInputMethodLine} href="/">Relatórios de Férias</NavLink>
        <NavLink icon={RiGitMergeLine} href="/">Relatórios de Licenças</NavLink>
        <NavLink icon={RiGitMergeLine} href="/">Relatórios de Folgas</NavLink>
        <NavLink icon={RiGitMergeLine} href="/">Relatórios de Cursos</NavLink>
      </NavSection>
    </Stack>
   
  )
}