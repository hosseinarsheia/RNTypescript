import { StyleSheet } from 'react-native';
import colors from './colors';
import dimensions from './dimensions';
import fonts from './fonts';
import fontSizes from './fontSizes';
import lineHeight from './lineHeight';
import images from './images';

const R = {
  colors,
  dimensions,
  fonts,
  fontSizes,
  lineHeight,
  images,
};

export const styles = StyleSheet.create({
  roundedPanel: {
    backgroundColor: R.colors.white,
    borderTopLeftRadius: R.dimensions.radius20,
    borderTopRightRadius: R.dimensions.radius20,
    padding: R.dimensions.b15,
    transform: [{ translateY: -30 }],
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: R.fontSizes.fs18,
    textAlign: 'center',
    fontFamily: R.fonts.IRANSansMobile,
    color: R.colors.black,
  },
  welcome2: {
    fontSize: R.fontSizes.fs18,
    fontFamily: R.fonts.IRANSansMobile,
    color: R.colors.black,
  },

  checkBoxContainer: {
    margin: 0,
    marginHorizontal: 0,
    padding: 0,
    paddingHorizontal: 0,
    marginVertical: 0,
    paddingVertical: 0,
    marginBottom: R.dimensions.v10,
    marginLeft: 0,
    marginRight: 0,
  },
  //   contactus: {
  //     fontSize: R.fontSizes.big,
  //     textAlign: 'center',
  //     fontFamily: R.fonts.IRANSansMobile,
  //     lineHeight: R.fontSizes.lineHeight.big,
  //     color: R.colors.black,
  //   },
  //   comment: {
  //     fontSize: R.fontSizes.normal,
  //     textAlign: 'center',
  //     marginLeft: R.dimensions.normalPadding,
  //     marginRight: R.dimensions.normalPadding,
  //     fontFamily: R.fonts.IRANSansMobile,
  //     color: R.colors.black,
  //   },
  //   instructions: {
  //     textAlign: 'center',
  //     color: R.colors.xDarkGray,
  //     marginBottom: R.dimensions.vHalfPadding,
  //     fontFamily: R.fonts.IRANSansMobile,
  //   },
  //   header: {
  //     flex: 1,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     paddingHorizontal: R.dimensions.normalPadding,
  //   },
  //   headerCaption: {
  //     textAlign: 'center',
  //     fontFamily: R.fonts.IRANSansMobile,
  //     fontSize: R.fontSizes.medium,
  //     color: R.colors.white,
  //     backgroundColor: R.colors.lightBlueGreen,
  //   },
  //   footer: {
  //     flex: 1,
  //     paddingHorizontal: R.dimensions.normalPadding,
  //   },
  //   btnGroupRow: {
  //     flex: 1,
  //     flexDirection: 'row',
  //     marginBottom: R.dimensions.vNormalPadding,
  //     marginTop: R.dimensions.vNormalPadding,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
  //   btnCaptionSideMenu: {
  //     color: R.colors.white,
  //     fontFamily: R.fonts.IRANSansMobile,
  //     fontSize: R.fontSizes.normal,
  //     margin: R.dimensions.bHalfPadding,
  //   },
  //   btnCaption: {
  //     textAlign: 'center',
  //     color: R.colors.white,
  //     fontFamily: R.fonts.IRANSansMobile,
  //     fontSize: R.fontSizes.xBig,
  //   },
  //   btnCaption2: {
  //     textAlign: 'center',
  //     color: R.colors.white,
  //     fontFamily: R.fonts.IRANSansMobile,
  //     fontSize: R.fontSizes.normal,
  //   },
  //   title: {
  //     textAlign: 'center',
  //     color: R.colors.black,
  //     fontFamily: R.fonts.IRANSansMobile,
  //     fontSize: R.fontSizes.title,
  //   },
  //   btnCaptionMenu: {
  //     textAlign: 'center',
  //     color: R.colors.black,
  //     fontFamily: R.fonts.IRANSansMobile,
  //     fontSize: R.fontSizes.normal,
  //   },
  //   list: {
  //     flexDirection: 'column',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
  textInput: {
    marginHorizontal: R.dimensions.h10,
    fontFamily: R.fonts.IRANSansMobile,
    fontWeight: 'normal',
    backgroundColor: R.colors.white,
    borderRadius: R.dimensions.radius10,
    paddingTop: 0,
    paddingBottom: 0,
  },
  label: {
    fontFamily: R.fonts.IRANSansMobile,
    fontSize: R.fontSizes.fs15,
    marginHorizontal: R.dimensions.h5,
    color: R.colors.black,
  },
  label0: {
    fontFamily: R.fonts.IRANSansMobile,
    fontSize: R.fontSizes.fs18,
    color: R.colors.black,
  },
  //   label1: {
  //     fontFamily: R.fonts.IRANSansMobile,
  //     fontSize: R.fontSizes.h4,
  //     color: R.colors.darkGray,
  //   },
  label4: {
    fontFamily: R.fonts.IRANSansMobile,
    fontSize: R.fontSizes.fs12,
    color: R.colors.black,
  },
  //   label5: {
  //     fontFamily: R.fonts.IRANSansMobile,
  //     fontSize: R.fontSizes.h6,
  //     color: R.colors.black,
  //   },
  //   label6: {
  //     fontFamily: R.fonts.IRANSansMobile,
  //     fontSize: R.fontSizes.normal,
  //     color: R.colors.black,
  //   },
  //   labe17: {
  //     fontFamily: R.fonts.IRANSansMobile,
  //     fontSize: R.fontSizes.normal,
  //     color: R.colors.black,
  //   },
  //   lblContent: {
  //     fontFamily: R.fonts.IRANSansMobile,
  //     fontSize: R.fontSizes.normal,
  //     marginLeft: R.dimensions.bigPadding,
  //     marginRight: R.dimensions.bigPadding,
  //     color: R.colors.black,
  //   },
  //   lblTitle: {
  //     fontFamily: R.fonts.IRANSansMobile,
  //     fontSize: R.fontSizes.medium,
  //     marginLeft: R.dimensions.bigPadding,
  //     color: R.colors.brown,
  //   },
  label2: {
    fontFamily: R.fonts.IRANSansMobile,
    fontSize: R.fontSizes.fs15,
    color: R.colors.black,
  },
  label3: {
    fontFamily: R.fonts.IRANSansMobile,
    fontSize: R.fontSizes.fs20,
    color: R.colors.black,
  },

  row: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  //   validationError: {
  //     fontFamily: R.fonts.IRANSansMobile,
  //     fontSize: R.fontSizes.normal,
  //     color: R.colors.red,
  //   },
  //   flatMenu: {
  //     flex: 1,
  //     flexDirection: 'row',
  //     backgroundColor: R.colors.menuBackground,
  //     paddingHorizontal: R.dimensions.normalPadding,
  //     justifyContent: 'center',
  //   },
  //   contentContainer: {
  //     paddingVertical: R.dimensions.vBigPadding,
  //     justifyContent: 'center',
  //   },
  //   indicator: {
  //     position: 'absolute',
  //     left: 0,
  //     right: 0,
  //     top: 0,
  //     bottom: 0,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  //   valid: {
  //     color: R.colors.correct,
  //   },
  //   invalid: {
  //     color: R.colors.red,
  //   },
  //   navTitleStyle: {
  //     fontFamily: R.fonts.IRANSansMobile,
  //     fontWeight: R.fontSizes.fontWeight.normal,
  //     textAlign: 'center',
  //     flex: 1,
  //   },
  panel: {
    backgroundColor: R.colors.white,
    borderRadius: R.dimensions.h10,
    padding: R.dimensions.b10,
  },

  //   image: {
  //     width: R.dimensions.imageWH,
  //     height: R.dimensions.imageWH,
  //   },
  //   imageInput: {
  //     width: R.dimensions.imageInputWH,
  //     height: R.dimensions.imageInputWH,
  //   },
  //   image2: {
  //     width: R.dimensions.image2WH,
  //     height: R.dimensions.image2WH,
  //   },
  //   imageMenu: {
  //     width: R.dimensions.imageMenuWH,
  //     height: R.dimensions.imageMenuWH,
  //   },
  //   userImage: {
  //     height: '90%',
  //     aspectRatio: 1,
  //   },
  //   imageDetail: {
  //     width: R.dimensions.imageDetailWH,
  //     height: R.dimensions.imageDetailWHs,
  //   },
  //   imageProfile: {
  //     width: R.dimensions.imageProfileWH,
  //     height: R.dimensions.imageProfileWH,
  //   },
  //   imageSNAccounts: {
  //     width: R.dimensions.imageSNAccountsWH,
  //     height: R.dimensions.imageSNAccountsWH,
  //   },
  //   imageToolbar: {
  //     width: R.dimensions.imageToolbarWH,
  //     height: R.dimensions.imageToolbarWH,
  //   },
  //   labelMenu: {
  //     fontFamily: R.fonts.IRANSansMobile,
  //     fontSize: R.fontSizes.big,
  //     color: R.colors.black,
  //   },
  underLine: {
    borderBottomWidth: R.dimensions.separator,
    borderBottomColor: R.colors.separator,
  },
  //   underLine2: {
  //     borderBottomWidth: R.dimensions.separator,
  //     borderBottomColor: R.colors.separator,
  //     width: R.dimensions.separator2Width,
  //     alignSelf: 'center',
  //   },
  stepTitle: {
    fontFamily: R.fonts.IRANSansMobile,
    fontSize: R.fontSizes.fs20,
    color: R.colors.textLink,
    textAlign: 'center',
  },
  h1: {
    fontSize: R.fontSizes.fs20,
    fontFamily: R.fonts.IRANSansMobile,
  },
  h2: {
    fontSize: R.fontSizes.fs20,
    fontFamily: R.fonts.IRANSansMobile,
  },
  h3: {
    fontSize: R.fontSizes.fs18,
    fontFamily: R.fonts.IRANSansMobile,
  },
  //   h4: {
  //     fontSize: R.fontSizes.h4,
  //     fontFamily: R.fonts.IRANSansMobile,
  //   },
  h5: {
    fontSize: R.fontSizes.fs14,
    fontFamily: R.fonts.IRANSansMobile,
  },
  //   h6: {
  //     fontSize: R.fontSizes.h6,
  //     fontFamily: R.fonts.IRANSansMobile,
  //     color: R.colors.darkRed,
  //   },
  //   h7: {
  //     fontSize: R.fontSizes.h7,
  //     fontFamily: R.fonts.IRANSansMobile,
  //   },
  h8: {
    fontSize: R.fontSizes.fs11,
    fontFamily: R.fonts.IRANSansMobile,
    color: R.colors.darkGray,
    lineHeight: R.fontSizes.lineHeight.normal,
  },
  //   h9: {
  //     fontSize: R.fontSizes.h9,
  //     fontFamily: R.fonts.IRANSansMobile,
  //   },
  //   h10: {
  //     fontSize: R.fontSizes.h10,
  //     fontFamily: R.fonts.IRANSansMobile,
  //   },
  //   h11: {
  //     fontSize: R.fontSizes.h11,
  //     fontFamily: R.fonts.IRANSansMobile,
  //   },
  //   color1: {
  //     color: R.colors.black,
  //   },
  //   textUnderline: {
  //     textDecorationLine: 'underline',
  //     color: R.colors.textLink,
  //   },

  backgroundImage: {
    width: R.dimensions.windowWidth,
    height: R.dimensions.windowHeight,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: -1,
  },

  titleTextStyle: {
    fontSize: R.fontSizes.fs15,
    fontFamily: R.fonts.IRANSansMobile,
    color: R.colors.black,
  },
  lineDivider: {
    borderBottomWidth: 1,
    borderBottomColor: R.colors.separator,
    marginVertical: R.dimensions.v5,
    width: '100%',
  },

  iconContainerStyle: {
    backgroundColor: R.colors.iconDarkBackground,
    borderRadius: 100,
    padding: R.dimensions.b5,
  },

  screenContainer: {
    flex: 1,
    backgroundColor: R.colors.pbBack,
    padding: R.dimensions.b10,
  },
});
