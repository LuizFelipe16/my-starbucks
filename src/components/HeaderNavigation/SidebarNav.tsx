import { useRef } from "react";
import { Flex, Drawer, HStack, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack, useBreakpointValue, Button, Icon, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { FaIndent } from "react-icons/fa";

import { NavItem } from "./NavItem";

export function SidebarNav() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Flex
        w="100vw"
        h="14vh"
        position="fixed"
        bg="transparent"
        zIndex="10000"
        align="center"
        justify="flex-end"
        py="6"
        px="10"
        top="0"
      >
        <Button
          bg='green.600'
          borderWidth={1}
          borderColor="green.600"
          size="lg"
          color="white"
          onClick={onOpen}
          transition="0.2s"
          _hover={{
            filter: 'brightness(85%)'
          }}
        >
          <Icon as={FaIndent} />
        </Button>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay zIndex="100000">
          <DrawerContent bg="bg.100" p="4">
            <DrawerCloseButton onClick={onClose} color="green.600" mt="6" />
            <DrawerHeader
              display="flex"
              flexDirection="row"
              mb="12"
              color="green.600"
              fontSize="2xl"
            >
              Navegue
            </DrawerHeader>
            <DrawerBody>
              <VStack
                w="100%"
                color="gray.50"
                fontSize="lg"
                spacing="10"
                align="flex-start"
                fontFamily="Montserrat"
              >
                <NavItem text="HOME" href="/" />
                <NavItem text="MENU" href="/menu" />
                <NavItem text="IMPACTO SOCIAL" href="/social" />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}