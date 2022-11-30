import React, { type PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native';

import TestingTypescript from './src/screen/TestingTypescript';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TestingTypescript />
    </SafeAreaView>
  );
};

export default App;
