import { Button, ButtonText, Center, Text } from '@gluestack-ui/themed';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <Center h="$full" w="$full">
      <Text>Home Screen</Text>
      <Button action="negative" onPress={() => router.replace('/')}>
        <ButtonText>Logout</ButtonText>
      </Button>
    </Center>
  );
}
