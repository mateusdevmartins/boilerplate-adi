import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Provider } from 'react-redux';
import store from './store';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { MyAccountView } from '../src/Account/views';
import { scale } from '../src/Shared/utils';

interface SectionType {
  children: React.ReactNode;
  title: string;
}

const Section = ({ children, title }: SectionType) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const getMoviesFromApi = async () => {
    return fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((json) => {
        console.log(json.movies);
        return json.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    // Update the document title using the browser API
    getMoviesFromApi();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
          <Header />
          <MyAccountView />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title="Step One">
              Edit <Text style={styles.highlight}>App.js</Text> to change this screen and then come
              back to see your edits.
            </Section>
            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            <Section title="Learn More">Read the docs to discover what to do next:</Section>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: scale(54),
    paddingHorizontal: scale(36),
  },
  sectionTitle: {
    fontSize: scale(36),
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: scale(12),
    fontSize: scale(30),
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
