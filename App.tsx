import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'

import { NavigationContainer } from '@react-navigation/native';
import { TamaguiProvider, YStack, Text } from 'tamagui';
import config from './tamagui.config';

export default function App(): JSX.Element | null {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }
  return (
    <NavigationContainer>
      <TamaguiProvider config={config}>
        <YStack f={1}>
          <Text color="$gray10">Hello</Text>
        </YStack>
        <StatusBar />
      </TamaguiProvider>
    </NavigationContainer>
  );
}
