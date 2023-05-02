import { Box, Text } from '@trendyol/baklava-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Linking, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Home() {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <SafeAreaView>
        <Box mt="5xl" flexDirection="row" justifyContent="center">
          <Image
            style={styles.image}
            source={require('../../assets/baklava.png')}
            resizeMode="contain"
          />
        </Box>
        <Box p="m">
          <Text mt="xl" textAlign="center" variant="subtitle01Bold">
            Baklava React Native
          </Text>
          <Text mt="xl" textAlign="center" variant="captionText">
            Baklava is a design system provided by Trendyol to create a
            consistent UI/UX for app users.
          </Text>
          <Text mt="2xl" textAlign="center" variant="captionText">
            It is built on top of React Native and Restyle, allowing you to
            develop apps for Android and iOS. Our target is providing a UI
            library that has neatly designed and developed for providing best
            possible user experience for the users of applications that uses
            Baklava DS.
          </Text>
        </Box>
        <Box px="m">
          <Text pl="2xs" pb="2xs" mt="2xl" variant="subtitle03Bold">
            Useful Links
          </Text>
          <Text
            p="2xs"
            color="primaryColor"
            variant="captionTextLink"
            onPress={() =>
              Linking.openURL(
                'https://github.com/Trendyol/baklava-react-native',
              )
            }>
            GitHub Repo
          </Text>
          <Text
            p="2xs"
            color="primaryColor"
            variant="captionTextLink"
            onPress={() =>
              Linking.openURL(
                'https://trendyol.github.io/baklava-react-native/',
              )
            }>
            Storybook Documentation
          </Text>
          <Text
            p="2xs"
            color="primaryColor"
            variant="captionTextLink"
            onPress={() =>
              Linking.openURL(
                'https://www.figma.com/file/RrcLH0mWpIUy4vwuTlDeKN/Baklava-Design-Guide',
              )
            }>
            Figma Design Document
          </Text>
          <Text
            p="2xs"
            color="primaryColor"
            variant="captionTextLink"
            onPress={() => Linking.openURL('https://baklava.design')}>
            Web (Web Component) Implementation
          </Text>
        </Box>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
  },
});
