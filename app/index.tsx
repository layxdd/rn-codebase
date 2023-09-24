import {
  Button,
  ButtonText,
  Center,
  Heading,
  VStack,
} from '@gluestack-ui/themed';
import { router } from 'expo-router';

export default function Welcome() {
  return (
    <Center h="$full" w="$full">
      <VStack space="md">
        <Heading alignSelf="center">Welcome</Heading>
        <Button onPress={() => router.replace('/login')}>
          <ButtonText>Go to Login</ButtonText>
        </Button>
        <Button onPress={() => router.replace('/register')}>
          <ButtonText>Go to Register</ButtonText>
        </Button>
      </VStack>
    </Center>
  );
}
