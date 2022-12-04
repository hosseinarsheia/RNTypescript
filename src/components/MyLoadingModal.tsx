import React from 'react';
import { StyleSheet } from 'react-native';
import Spinner from 'react-native-spinkit';

import R from '../res/R';
import MyModal from './MyModal';

export type MyLoadingModalProps = {};

function MyLoadingModal({ visible = false, type = 'Circle', color = R.colors.white }) {
  return (
    <MyModal visible={visible} panelStyle={styles.panelStyle}>
      <Spinner color={color} type={type} />
    </MyModal>
  );
}

export default MyLoadingModal;

const styles = StyleSheet.create({
  panelStyle: {
    alignItems: 'center',
    padding: R.dimensions.v40,
    backgroundColor: 'rgba(0,0,0,0)',
    width: null,
  },
});
