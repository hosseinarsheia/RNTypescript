import React, { useEffect } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';

import MyText from '../../components/MyText';

function TestingTypescript() {
  return (
    <View style={styles.container}>
      <MyText>
        <Text>sss</Text>
      </MyText>
    </View>
  );
}

export default TestingTypescript;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
