import { GluestackUIProvider, config } from '@gluestack-ui/themed';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <GluestackUIProvider config={config.theme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" options={{}} />
        <Stack.Screen name="login" options={{}} />
      </Stack>
    </GluestackUIProvider>
  );
}
