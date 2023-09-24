import {
  Button,
  ButtonText,
  Center,
  Heading,
  VStack,
} from '@gluestack-ui/themed';
import { router } from 'expo-router';

export default function RegisterScreen() {
  return (
    <Center h="$full" w="$full">
      <VStack space="md">
        <Heading alignSelf="center">Register</Heading>
        <Button onPress={() => router.replace('/home')}>
          <ButtonText>Register</ButtonText>
        </Button>
        <Button action="secondary" onPress={() => router.replace('/')}>
          <ButtonText>Back</ButtonText>
        </Button>
      </VStack>
    </Center>
  );
}
