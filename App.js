import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  image: {
    width: 250,
    height: 250,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://i.redd.it/jz33b0xo7a951.jpg',
        }}
      />
    </View>
  );
}

export default App;
