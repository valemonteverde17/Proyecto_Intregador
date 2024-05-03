import { Box, Flex, Button, Image, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import app from "../../firebase-config";
import MButton from "./ui-elements/MButton";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [navItems, setNavItems] = useState([]);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email);
        console.log("Usuario autenticado:", user);
      } else {
        setUser(null);
        console.log("No hay usuario autenticado");
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setNavItems(
      user
        ? [
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Acerca De",
              href: "/about",
            },
            {
              label: "Perfil",
              href: "/profile",
            },
          ]
        : []
    );
  }, [user]);

  return (
    <Box>
      <Flex
        bg={"#CCCCFF"}
        borderRadius={"30px"}
        color={"white"}
        py={2}
        px={5}
        align={"center"}
      >
        <Image
          style={{
            filter:
              "drop-shadow(1px 1px 0 white) drop-shadow(-2px 2px 0 white) drop-shadow(2px -2px 0 white) drop-shadow(-1px -1px 0 white)",
            WebkitFilter:
              "drop-shadow(1px 1px 0 white) drop-shadow(-2px 2px 0 white) drop-shadow(2px -2px 0 white) drop-shadow(-1px -1px 0 white)",
          }}
          boxSize="40px"
          src="/public/Logo.png"
          alt="Maristanet"
        />
        <Flex flex={1} justify={"start"}>
          <Flex display={"flex"} ml={10}>
            <DesktopNav navItems={navItems} />
          </Flex>
        </Flex>
        <HStack justify={"flex-end"} spacing={6}>
          {!user && (
            <>
              <Button
                as={NavLink}
                to={"/signin"}
                fontSize={"sm"}
                color={"white"}
                fontWeight={400}
                variant={"link"}
              >
                Iniciar Sesión
              </Button>
              <Button
                as={NavLink}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                borderRadius={"30px"}
                bg={"#FF3F0099"}
                to={"/signup"}
                _hover={{
                  bg: "blue.200",
                }}
              >
                Registrarse
              </Button>
            </>
          )}
        </HStack>
      </Flex>
    </Box>
  );
}

const DesktopNav = ({ navItems }) => {
  return (
    <HStack spacing={4}>
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <NavLink
            to={navItem.href ?? "#"}
            style={({ isActive }) =>
              isActive
                ? {
                    padding: "8px",
                    fontSize: "sm",
                    fontWeight: 800,
                    color: "white",
                  }
                : {
                    padding: "8px",
                    fontSize: "sm",
                    fontWeight: 200,
                    color: "white",
                  }
            }
          >
            {navItem.label}
          </NavLink>
        </Box>
      ))}
    </HStack>
  );
};
