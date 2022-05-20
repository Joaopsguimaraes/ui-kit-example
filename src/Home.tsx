import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Heading } from "./components/Heading";
import { Link } from "./components/Link";
import { Text } from "./components/Text";
import { Nav } from "./components/Nav";
import { Span } from "./components/Span";
import { ArrowRight, GithubLogo } from "phosphor-react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import imgHome from "./assets/media.svg";
import logoHome from "./assets/react.svg";


export function Home() {
  return (
    <>
      <Nav
        display="flex"
        AlignItems="itemsCenter"
        justifyContent="justifyAround"
        background="gray"
      >
        <img src={logoHome} alt="logo react" />
        <Link color="gray" href="#">
          <FaLinkedin size={20} />
        </Link>
        <Link color="gray" href="#">
          <FaDiscord size={20} />
        </Link>
        <Link
          color="gray"
          href="https://github.com/Joaopsguimaraes"
          target="_blank"
        >
          <FaGithub size={20} />
        </Link>
      </Nav>
      <Container
        display="flex"
        alignItems="center"
        width="100vw"
        height="auto"
      >
        <Container width="large" margin="center">
          <Heading color="gray" size="lg" marginTop={2} marginBottom={2} textAlign="center">
            CREATE YOURS APP WITH{" "}
            <Span color="indigo" fontWeight="true">
              EASE
            </Span>{" "}
            AND{" "}
            <Span color="indigo" fontWeight="true">
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
              style={{ width: "38%", height: "auto" }}
            />
          </Container>

          <Container
            display="flex"
            alignItems="center"
            width="medium"
            margin="center"
            justifyContent="justifyBetween"
            wrap="wrap"
          >
            <Button
              color="blue"
              size="xlg"
              rounded="sm"
              style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
            >
              <ArrowRight size={22} />
              GET STARTED
            </Button>
            <Button
              color="blue"
              size="xlg"
              rounded="sm"
              variant="outline"
              style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
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
