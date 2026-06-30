import ArticleLayout from "@/components/article/ArticleLayout"
import Layout from "@/components/layout"
import Meta from "@/components/meta"
import { Heading, Text, VStack } from "@chakra-ui/layout"
import config from "@/contents/site-settings.json"

export default function About() {
  const siteName = config.site_name || config.site_title

  return (
    <Layout>
      <ArticleLayout>
        <Meta
          title="About Us"
          description={`About ${siteName}`}
          url="/about-us"
          keywords={["About Us", `About ${siteName}`]}
        />
        <Heading mb={{ base: 4, md: 6 }} as="h1">
          About Us
        </Heading>
        <VStack spacing={4}>
          <Text>
            {siteName} is a dedicated crypto editorial platform delivering
            breaking news, in-depth market analysis, and educational guides on
            Bitcoin, Ethereum, DeFi, NFTs, meme coins, and everything happening
            in the Web3 ecosystem.
          </Text>

          <Text>
            Our mission is simple: cut through the noise and bring you accurate,
            timely, and insightful coverage of the cryptocurrency markets.
            Whether you are a seasoned trader tracking on-chain data or a
            curious newcomer learning about blockchain for the first time,{" "}
            {siteName} has something for you.
          </Text>

          <Text>
            Founded by a team passionate about decentralized finance and digital
            assets, {siteName} operates independently and is committed to
            transparent, unbiased reporting. We cover everything from Bitcoin
            price movements and Ethereum protocol upgrades to the latest meme
            coin launches and regulatory developments worldwide.
          </Text>

          <Text>
            Our contributors include crypto analysts, blockchain developers, and
            experienced traders who bring real expertise to every article. If
            you are interested in contributing, advertising, or partnering with
            us, please reach out via the contact form — we'd love to hear from
            you.
          </Text>

          <Text>
            Thank you for choosing {siteName}. We're committed to being your
            most trusted source in the crypto space — stay informed, stay ahead.
          </Text>
        </VStack>
      </ArticleLayout>
    </Layout>
  )
}
