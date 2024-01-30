import { Flex, Text, Button, Card, Avatar, Box } from "@radix-ui/themes";

export default function Home() {
  return (
    <div>
      <h1>Radix Yo</h1>
      <h2>Home</h2>
      <p>lorem ipsum dolor sit amet</p>
      <p>lorem ipsum dolor sit amet</p>
      <p>lorem ipsum dolor sit amet</p>
      <button>Whats this?</button>
      <ul>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
      </ul>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Let&apos;s go</Button>
      </Flex>
      <Card style={{ maxWidth: 240 }}>
        <Flex gap="3" align="center">
          <Avatar
            size="3"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            radius="full"
            fallback="T"
          />
          <Box>
            <Text as="div" size="2" weight="bold">
              Teodros Girmay
            </Text>
            <Text as="div" size="2" color="gray">
              Engineering
            </Text>
          </Box>
        </Flex>
      </Card>
    </div>
  );
}
