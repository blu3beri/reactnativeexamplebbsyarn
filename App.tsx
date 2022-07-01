import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  blsSign,
  generateBls12381G2KeyPair,
} from '@animo-id/react-native-bbs-signatures';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const run = async () => {
    const keyPair = await generateBls12381G2KeyPair();
    const signature = await blsSign({keyPair, messages: [new Uint8Array([0])]});
    console.log(signature);
  };

  run();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>foo</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
