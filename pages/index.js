import {
	Box,
	Container,
	Divider,
	HStack,
	Text,
	Image,
	Stack,
	Link,
	Flex,
} from "@chakra-ui/react";
import Head from "next/head";
import Hero from "./components/hero";
import {
	SiHtml5,
	SiStyledcomponents,
	SiChakraui,
	SiJavascript,
	SiReact,
	SiNodedotjs,
	SiNextdotjs,
} from "react-icons/si";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Gilberto Portfólio</title>
				<meta name="description" content="Generated by create next app" />
			</Head>
			<Hero />
			<Divider maxW={["xl", "4xl"]} mx="auto" size="2px" color="black" />
			<Container maxW={"7xl"} py="10">
				<Box mx="auto">
					<Text
						textAlign={"center"}
						fontSize={{ base: "2xl", sm: "4xl" }}
						fontWeight="semibold"
						lineHeight={"110%"}
					>
						My Expertise
					</Text>
					<Stack
						justify={"center"}
						mt="8"
						spacing={[10, 20]}
						direction={["column", "row"]}
					>
						<Box
							textAlign={"center"}
							border="1px solid"
							p="9"
							rounded="lg"
							borderColor={"gray.400"}
						>
							<Text mb="5" fontWeight={"semibold"} fontSize="2xl">
								Design
							</Text>
							<HStack spacing={8} justify={"center"}>
								<Box color="gray.500">
									<SiHtml5 size={48} />
								</Box>
								<Box color="gray.500">
									<SiStyledcomponents size={48} />
								</Box>
								<Box color="gray.500">
									<SiChakraui size={48} />
								</Box>
							</HStack>
						</Box>
						<Box
							textAlign={"center"}
							border="1px solid"
							p="9"
							rounded="lg"
							borderColor={"gray.400"}
						>
							<Text mb="5" fontWeight={"semibold"} fontSize="2xl">
								Code
							</Text>
							<HStack spacing={8} justify={"center"}>
								<Box color="gray.500">
									<SiJavascript size={48} />
								</Box>
								<Box color="gray.500">
									<SiReact size={48} />
								</Box>
								<Box color="gray.500">
									<SiNextdotjs size={48} />
								</Box>
							</HStack>
						</Box>
					</Stack>
				</Box>
			</Container>
			<Divider maxW={["xl", "4xl"]} mx="auto" size="2px" color="black" />
			<Container maxW={"7xl"} py={["10", "16"]}>
				<Box mx="auto">
					<Text
						textAlign={"center"}
						fontSize={{ base: "2xl", sm: "4xl" }}
						fontWeight="semibold"
						lineHeight={"110%"}
					>
						Featured Projects
					</Text>
					<Stack
						direction={["column", "row"]}
						justify="center"
						align="center"
						spacing={[8, 16]}
						mt="16"
					>
						<Link href="https://tractian.com/en" target="_blank">
							<Flex
								rounded={"xl"}
								w={["300px", "350px"]}
								h="200px"
								border="1px solid"
								borderColor="gray.400"
								p="6"
								align="center"
								justify={"center"}
								_hover={{
									color: "green.400",
									borderColor: "green.400",
									cursor: "pointer",
								}}
							>
								<Text fontSize={["base", "xl"]} fontWeight="semibold">
									Tractian - Website
								</Text>
							</Flex>
						</Link>
						<Link href="https://piucco.vercel.app/" target="_blank">
							<Flex
								rounded={"xl"}
								w={["300px", "350px"]}
								h="200px"
								border="1px solid"
								borderColor="gray.400"
								p="6"
								align="center"
								justify={"center"}
								_hover={{
									color: "green.400",
									borderColor: "green.400",
									cursor: "pointer",
								}}
							>
								<Text fontSize={["base", "xl"]} fontWeight="semibold">
									MyDesign School - Website
								</Text>
							</Flex>
						</Link>
						<Link href="https://ecovolt-site.vercel.app/" target="_blank">
							<Flex
								rounded={"xl"}
								w={["300px", "350px"]}
								h="200px"
								border="1px solid"
								borderColor="gray.400"
								p="6"
								align="center"
								justify={"center"}
								_hover={{
									color: "green.400",
									borderColor: "green.400",
									cursor: "pointer",
								}}
							>
								<Text fontSize={["base", "xl"]} fontWeight="semibold">
									Ecovolt Solar Energy - Website
								</Text>
							</Flex>
						</Link>
					</Stack>
				</Box>
			</Container>
			<Flex py="5" bg="black" align="center" justify={"center"} color="white">
				<Box textAlign={"center"}>
					<Text>© Gilberto Beltrame Neto</Text>
					<Text>Build with Next.js and ❤</Text>
				</Box>
			</Flex>
		</div>
	);
}
