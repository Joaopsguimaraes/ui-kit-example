import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Heading } from "./components/Heading";
import { Link } from "./components/Link";
import { Text } from "./components/Text";
import { Nav } from "./components/Nav";
import { Span } from "./components/Span";
import { Flex } from "./components/Flex";
import { Image } from "./components/Image";
import { ArrowRight, GithubLogo } from "phosphor-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import imgHome from "./assets/media.svg";
import logoHome from "./assets/logo.svg";


export function Home() {
  return (
    <>
      <Nav
        display="flex"
        AlignItems="itemsCenter"
        justifyContent="justifyAround"
      >
        <Image src={logoHome} alt="logo lorem ipsum" size="md" />
        <Flex>
          <Link
            color="gray"
            href="https://www.linkedin.com/in/joaovpsguimaraes/"
            target="_blank"
            hoverIcons="true"
          >
            <FaLinkedin size={20} />
          </Link>
          <Link
            color="gray"
            href="https://www.instagram.com/joaov.ps/"
            target="_blank"
            hoverIcons="true"
          >
            <FaInstagram size={20} />
          </Link>
          <Link
            color="gray"
            href="malito.psjoaovictor@gmail.com"
            target="_blank"
            hoverIcons="true"
          >
            <SiGmail size={20} />
          </Link>
          <Link
            color="gray"
            href="https://github.com/Joaopsguimaraes"
            target="_blank"
            hoverIcons="true"
          >
            <FaGithub size={20} />
          </Link>
        </Flex>
      </Nav>
      <Container display="flex" alignItems="center" width="100vw" height="auto">
        <Container width="lg" margin="center">
          <Heading
            color="gray"
            size="lg"
            marginBottom={2}
            textAlign="center"
          >
            CREATE YOURS APP WITH{" "}
            <Span color="indigo" fontWeight="bold">
              EASE
            </Span>{" "}
            AND{" "}
            <Span color="indigo" fontWeight="bold">
              SPEED
            </Span>
          </Heading>
          <Container
            display="flex"
            flexDirection="flexColumn"
            width="xlg"
            margin="center"
            alignItems="center"
            gap="small"
          >
            <Text color="gray" size="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <img
              src={imgHome}
              alt="image pagina inicial"
              style={{ width: "35%", height: "auto" }}
            />
          </Container>

          <Container
            display="flex"
            alignItems="center"
            width="md"
            margin="center"
            justifyContent="justifyBetween"
            wrap="wrap"
          >
            <Button
              color="darkIndigo"
              size="xlg"
              rounded="sm"
              shadow="md"
            >
              <ArrowRight size={22} />
              GET STARTED
            </Button>
            <Button
              color="indigo"
              size="xlg"
              rounded="sm"
              variant="outline"
              shadow="sm"
            >
              <GithubLogo size={22} />
              GitHub
            </Button>
          </Container>
        </Container>
      </Container>
    </>
  );
}
