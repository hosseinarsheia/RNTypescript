import React, { forwardRef, useImperativeHandle, useMemo } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  Text,
  ViewStyle,
} from 'react-native';
import { Icon } from '@rneui/themed';
import { observer, useLocalObservable } from 'mobx-react';
import { runInAction } from 'mobx';

import R from '../res/R';
import MyText from './MyText';
import { ICON_TYPE } from '../utils/Constants';

type DataType = { id: number | string; title: string };

export type MyDropDownProps = {
  data: DataType[];
  onPress: (value: DataType) => void;
  title: string;
  containerStyle: ViewStyle;
  onDropDownPress: (value: boolean) => void;
  required: boolean;
};

export type LocalObservable = {
  showList: boolean;
  selectedItemText: string;

  setShowList: (value: LocalObservable['showList']) => void;
  setSelectedItemText: (value: LocalObservable['selectedItemText']) => void;
};

const MyDropDown = forwardRef<any, MyDropDownProps>(
  ({ data, onPress, title, containerStyle, onDropDownPress, required }, ref) => {
    const localStore = useLocalObservable<LocalObservable>(() => ({
      showList: false,
      selectedItemText: '',

      setShowList(value) {
        this.showList = value;
      },

      setSelectedItemText(value) {
        this.selectedItemText = value;
      },
    }));

    const styles = useMemo(
      () => createdStyle(localStore.selectedItemText),
      [localStore.selectedItemText],
    );

    function onDropDownPressHanlde() {
      localStore.setShowList(true);
      if (onDropDownPress && typeof onDropDownPress === 'function') {
        if (data.length === 0) onDropDownPress(false);
        else onDropDownPress(true);
      }
    }

    function itemSelectHandler(item: DataType) {
      onPress(item);

      runInAction(() => {
        localStore.showList = false;
        localStore.selectedItemText = item.title?.toString();
      });
    }

    useImperativeHandle(ref, () => ({
      resetValues: () => {
        localStore.setSelectedItemText('');
      },
    }));

    return (
      <TouchableOpacity
        onPress={onDropDownPressHanlde}
        style={[styles.container, containerStyle]}>
        <View style={styles.wrapper}>
          <Icon
            containerStyle={styles.icon}
            name="keyboard-arrow-down"
            type={ICON_TYPE.material}
            color={R.colors.primaryColor}
          />
        </View>

        <Text numberOfLines={1} style={styles.titleText}>
          {localStore.selectedItemText ? localStore.selectedItemText : `${title}`}

          {!localStore.selectedItemText && (
            <MyText color={required ? R.colors.regularRed : R.colors.textColor}>
              {required ? ' *' : ''}
            </MyText>
          )}
        </Text>

        <Modal transparent visible={localStore.showList && data?.length > 0}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.modalContainer}
            onPress={() => localStore.setShowList(false)}>
            <View>
              <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={'handled'}
                data={data}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.itemContainer}
                    onPress={() => itemSelectHandler(item)}>
                    <MyText>{item.title}</MyText>
                    <View style={R.styles.lineDivider} />
                  </TouchableOpacity>
                )}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      </TouchableOpacity>
    );
  },
);

export default observer(MyDropDown);

export const createdStyle = (selectedItemText: LocalObservable['selectedItemText']) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'flex-end',
      marginVertical: R.dimensions.v5,
      borderWidth: 1,
      borderColor: R.colors.primaryColor,
      borderRadius: R.dimensions.radius5,
      paddingRight: R.dimensions.h10,
      minHeight: 50,
    },

    modalContainer: {
      backgroundColor: R.colors.modalBack,
      flex: 1,
      zIndex: 100,
      padding: R.dimensions.v15,
      justifyContent: 'center',
    },
    contentContainerStyle: {
      paddingVertical: R.dimensions.v10,
      backgroundColor: R.colors.white,
      borderRadius: R.dimensions.radius5,
    },

    wrapper: {
      flexDirection: 'row',
    },

    icon: {
      borderRightWidth: 1,
      borderColor: R.colors.primaryColor,
      justifyContent: 'center',
      alignItems: 'center',
    },

    itemContainer: {
      alignItems: 'center',
      paddingHorizontal: R.dimensions.h10,
    },

    titleText: {
      marginLeft: R.dimensions.h10,
      flex: 1,
      textAlignVertical: 'center',
      textAlign: 'right',
      fontFamily: R.fonts.IRANSansMobile,

      color: selectedItemText ? 'black' : R.colors.textLightGrayColor,
      fontSize: selectedItemText ? R.fontSizes.fs15 : R.fontSizes.fs12,
    },
  });
};
