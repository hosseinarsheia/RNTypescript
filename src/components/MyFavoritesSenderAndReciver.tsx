import React from 'react';
import { StyleSheet, Modal, View } from 'react-native';
import { observer } from 'mobx-react';

import R from '../res/R';
import { MyCard, MyButton } from './index';

export type MyFavoritesSenderAndReciver = {
  title: string;
  showItem: boolean;
  children: JSX.Element;
  backButtonPresshandler: () => void;
};

const MyFavoritesSenderAndReciver = ({
  title = 'علاقه مندی ها ',
  showItem = false,
  children,
  backButtonPresshandler,
}: MyFavoritesSenderAndReciver) => {
  return (
    <Modal animationType="slide" transparent visible={showItem}>
      <View style={styles.container}>
        <View style={styles.cardWrapper}>
          <MyCard
            containerStyle={styles.cardContainerStyle}
            iconName="heart"
            title={title}>
            {children}
          </MyCard>

          <MyButton
            containerStyle={{ width: '100%' }}
            title={R.strings.back}
            onPress={backButtonPresshandler}
          />
        </View>
      </View>
    </Modal>
  );
};

export default observer(MyFavoritesSenderAndReciver);

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: R.colors.white,
    flex: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  cardContainerStyle: {
    width: '100%',
    flex: 1,
  },
});
