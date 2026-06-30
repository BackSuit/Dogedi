import { Text, Box, VStack } from "@chakra-ui/layout"
import { Flex } from "@chakra-ui/react"
import Link from "next/link"

// Dogedi crypto coin mark — hexagonal "D" icon
function CoinMark() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Hexagonal background */}
      <path d="M22 2L38.5 11.5V30.5L22 40L5.5 30.5V11.5L22 2Z" fill="#F7931A" />
      {/* Inner hex ring */}
      <path
        d="M22 6L35 13.5V28.5L22 36L9 28.5V13.5L22 6Z"
        fill="none"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="0.8"
      />
      {/* Bold "D" letterform */}
      <path
        d="M15 13H22C27.5 13 31 16.5 31 21C31 25.5 27.5 29 22 29H15V13Z"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* D crossbar hint */}
      <line
        x1="15"
        y1="21"
        x2="27"
        y2="21"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

/**
 * Logo component.
 * @param {boolean} isLight  – if true, renders white text (for dark backgrounds like footer)
 */
export default function Logo({ isLight = false }) {
  return (
    <Box
      as={Link}
      href="/"
      display="flex"
      alignItems="center"
      gap={2}
      _hover={{ opacity: 0.85 }}
      lineHeight={1}
      flexShrink={0}
    >
      <CoinMark />
      <VStack spacing={0} align="flex-start">
        <Text
          as="span"
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="900"
          fontFamily="'Space Grotesk', 'Inter', sans-serif"
          letterSpacing="-0.03em"
          color={isLight ? "white" : "brand.secondary"}
          lineHeight={1}
        >
          DOGE
        </Text>
        <Text
          as="span"
          fontSize={{ base: "xs", md: "sm" }}
          fontWeight="700"
          fontFamily="'Space Grotesk', 'Inter', sans-serif"
          letterSpacing="0.15em"
          color={isLight ? "orange.300" : "brand.primary"}
          lineHeight={1.3}
          textTransform="uppercase"
        >
          DI
        </Text>
      </VStack>
    </Box>
  )
}
