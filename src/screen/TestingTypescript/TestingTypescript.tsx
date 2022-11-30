import React, { useEffect } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';

import R from '../../res/R';
import MyText from '../../components/MyText';
import MyButton from '../../components/MyButton';
import MyButtonGroup from '../../components/MyButtonGroup';
import MyCard from '../../components/MyCard';

function TestingTypescript() {
  return (
    <View style={styles.container}>
      <MyText>hello</MyText>
      <MyButton title="hello" onPress={() => {}} />
      <MyButtonGroup />
      <MyCard title="hello">
        <View style={{ width: R.dimensions.windowWidth - 20 }}>
          <Text>hello</Text>
        </View>
      </MyCard>
    </View>
  );
}

export default TestingTypescript;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
