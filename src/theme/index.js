import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Space Grotesk', 'Inter', -apple-system, sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    serif: "'Space Grotesk', 'Inter', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
  colors: {
    brand: {
      // Dogedi crypto editorial palette
      primary: "#F7931A", // Bitcoin orange — iconic crypto color
      secondary: "#1A1A2E", // Deep dark navy — authority & tech
      accent: "#627EEA", // Ethereum blue/purple — DeFi & Web3
      success: "#10B981", // Bull green — gains
      cream: "#FFFFFF",
      parchment: "#F6F7FB", // Cool off-white — section backgrounds
      ink: "#0D0F1A", // Near black — crisp readable text
      gray: "#6B7280",
      lightGray: "#E2E8F0",
    },
  },
  breakpoints: {
    sm: "30em", // small phone
    md: "48em", // ipad
    lg: "62em", // ipad pro
    xl: "80em", // laptop
    xxl: "96em", // pc
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "sm",
      },
      variants: {
        primary: {
          bg: "brand.primary",
          color: "white",
          _hover: { bg: "#E07B0A", transform: "translateY(-1px)" },
        },
        outline: {
          borderColor: "brand.primary",
          color: "brand.primary",
          _hover: { bg: "orange.50" },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "'Space Grotesk', 'Inter', sans-serif",
        fontWeight: "700",
        color: "brand.ink",
      },
    },
    Text: {
      baseStyle: {
        color: "gray.700",
        lineHeight: "1.7",
      },
    },
    Link: {
      baseStyle: {
        color: "brand.primary",
        _hover: { textDecoration: "underline", color: "brand.secondary" },
      },
    },
  },
  styles: {
    global: {
      "::selection": {
        color: "white",
        background: "#F7931A",
      },
      "::-webkit-scrollbar": {
        width: "0.5em",
      },
      "::-webkit-scrollbar-track": {
        background: "#F6F7FB",
      },
      "::-webkit-scrollbar-thumb": {
        transition: "150ms background ease-in-out",
        bgColor: "#CBD5E0",
        borderRadius: "full",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#F7931A",
      },
      html: {
        scrollBehavior: "smooth",
      },
      "html, body": {
        overflowX: "hidden",
        backgroundColor: "#FFFFFF",
        color: "#0D0F1A",
        fontSize: "16px",
        lineHeight: "1.7",
      },
      ".dogedi-logo": {
        fontFamily: "'Space Grotesk', 'Inter', sans-serif",
      },
      ".markdown": {
        "div.end-p": {
          marginBottom: 4,
        },
        a: {
          color: "#F7931A",
          fontWeight: "500",
          _hover: {
            textDecoration: "underline",
            color: "#E07B0A",
          },
        },
        p: {
          lineHeight: "1.9",
          marginY: 6,
          fontSize: "1.1rem",
          color: "#2D3748",
          fontFamily: "'Inter', -apple-system, sans-serif",
        },
        "h1, h2, h3, h4, h5, h6": {
          fontFamily: "'Space Grotesk', 'Inter', sans-serif",
          fontWeight: 700,
          marginTop: 8,
          marginBottom: 4,
          textOverflow: "ellipsis",
          lineHeight: "1.3",
          color: "#1A202C",
        },
        h1: {
          fontSize: "4xl",
        },
        h2: {
          fontSize: "3xl",
        },
        h3: {
          fontSize: "2xl",
        },
        h4: {
          fontSize: "xl",
        },
        h5: {
          fontSize: "lg",
        },
        h6: {
          fontSize: "md",
        },
        blockquote: {
          pl: 6,
          py: 2,
          my: 6,
          pos: "relative",
          fontStyle: "italic",
          color: "#4A5568",
          bg: "#FFF8F0",
          borderRadius: "md",
          _before: {
            content: "''",
            display: "block",
            pos: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "4px",
            bgColor: "#F7931A",
            borderRadius: "full",
          },
        },
        table: {
          maxWidth: "full",
          borderSpacing: 0,
          mt: 6,
          borderRadius: "md",
          overflow: "hidden",
          thead: {
            background: "#F7FAFC",
          },
          th: {
            fontWeight: 600,
            color: "#1A202C",
          },
          "th, td": {
            padding: "0.75em 1em",
            border: "1px solid #E2E8F0",
          },
        },
        "ol, ul": {
          padding: 0,
          fontSize: "lg",
        },
        li: {
          lineHeight: "1.8",
          marginLeft: 6,
          paddingLeft: 2,
          marginBottom: 3,
        },
      },
      "#nprogress": {
        pointerEvents: "none",
      },
      "#nprogress .bar": {
        background: "#F7931A",
        pos: "fixed",
        zIndex: 99999,
        top: 0,
        left: 0,
        width: "full",
        height: "3px",
      },
      ".nprogress-custom-parent": {
        overflow: "hidden",
        position: "absolute",
      },
    },
  },
})

export default theme
