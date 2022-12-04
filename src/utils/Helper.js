import PersianDate from '@alireza-ab/persian-date';
import SplashScreen from 'react-native-splash-screen'; //import SplashScreen
import CryptoJS from 'crypto-js';
import BackgroundService from 'react-native-background-actions';
import { StackActions } from '@react-navigation/native';

import {
  observable,
  makeObservable,
  makeAutoObservable,
  runInAction,
  action,
} from 'mobx';
import { inject, observer, useLocalObservable } from 'mobx-react';

import * as Storage from './Storage';
import R from '../res/R';
import { chars, INPUT_LENGTH, TAG_TYPE } from '../utils/Constants';
import { navigationRef } from '../navigation';
import { SCREENS } from '../navigation/Screens';
import { carringDocStore } from './Store';

export async function logout() {
  try {
    if (navigationRef.isReady()) {
      await BackgroundService.stop();
      runInAction(() => {
        carringDocStore.globalTimer = null;
        carringDocStore.backgroundTimerStartDate = null;
      });
      await Storage.removeAll();

      navigationRef.dispatch(StackActions.replace(SCREENS.LOGIN_SCREEN));
    }
  } catch (error) {
    console.log(' logout error ', error);
  }
}

export function hideSplashScreen() {
  SplashScreen.hide();
}

export function random4digitNumberGenerator() {
  const num = Math.floor(1000 + Math.random() * 9000);

  return num;
}

export function randomCaptchGenerator() {
  const phraseLength = 5;
  var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var charLength = chars.length;
  var result = '';

  for (var i = 0; i < phraseLength; i++) {
    result += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
}

export async function getUserInfo(defultValue = null) {
  const userInfo = await Storage.getItem(Storage.KEYS.USER_INFO, defultValue);
  return userInfo;
}

export function toInt(text) {
  let newText = '';
  let numbers = '0123456789';
  let convertedText = '';

  if (text && text.length > 0 && text[0] == '0') {
    convertedText = text.slice(1);
  } else convertedText = text;

  for (var i = 0; i < convertedText.length; i++) {
    if (numbers.indexOf(convertedText[i]) > -1) {
      newText = newText + convertedText[i];
    }
  }

  return newText;
}

export function checkNationalCode(text) {
  try {
    if (!text || text.length != 10 || toInt(text).length != text.length) return false;

    var sum = 0;

    for (let i = 0; i < 9; i++) {
      sum += text[i] * (10 - i);
    }

    let r = sum % 11;
    if (r < 2) return text[9] == r;
    else return text[9] == 11 - r;
  } catch (err) {
    return false;
  }
}

export function nationalCodeValidator(code) {
  let validate;

  if (code) {
    const nationalCode = code.toString();

    if (nationalCode.length !== 10 || !checkNationalCode(nationalCode)) {
      validate = { status: false, message: R.strings.nationalCodeIsNotValid };
    } else if (checkNationalCode(nationalCode)) {
      validate = { status: true, message: 'کد ملی مورد تایید است' };
    }
  } else validate = { status: false, message: R.strings.nationalCodeIsNotValid };

  return validate;
}

// بررسی کد ملی و یا شناسه
export function nationalCodeAndIDValidator(code) {
  try {
    let validate;
    const nationalCode = code.toString();

    if (nationalCode && (nationalCode.length === 10 || nationalCode.length === 11)) {
      if (nationalCode.length === 10) {
        if (!checkNationalCode(nationalCode)) {
          validate = { status: false, message: R.strings.nationalCodeIsNotValid };
        } else if (checkNationalCode(nationalCode)) {
          validate = { status: true, message: 'کد ملی مورد تایید است' };
        }
      } else if (nationalCode.length === 11)
        validate = { status: true, message: 'شناسه ملی مورد تایید است' };
    } else validate = { status: false, message: 'کد یا شناسه ملی صحیح وارد نشده است' };

    return validate;
  } catch (error) {
    return { status: false, message: 'nationalCodeAndIDValidator Catch error' };
  }
}

export function to3Digit(value = '') {
  num = parseInt(value) || '';

  // if (value.length > 0 && value[0] == '0') {
  //   console.log(' before value ', value);
  //   let newValue = value.slice(1);
  //   console.log(' after value ', newValue);
  //   return newValue;
  // } else
  if (!num) {
    return '0';
  } else {
    let a = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return a;
  }
}

export function convertToPersianDate(timeString) {
  try {
    if (timeString) {
      const time = new Date(timeString).toUTCString();

      const year = new Date(time).getFullYear().toString();
      const month = new Date(time).getMonth();
      const date = new Date(time).getDate().toString();
      const hour = new Date(time).getUTCHours();
      const minute = new Date(time).getUTCMinutes().toString();

      const { d } = new PersianDate({
        year,
        month: (month + 1).toString(),
        date,
        hour,
        minute,
      });

      const convertedMonth = d.month.toString().length === 1 ? `0${d.month}` : d.month;
      const convertedDay = d.date.toString().length === 1 ? `0${d.date}` : d.date;
      const convertedHour = d.hour.toString().length === 1 ? `0${d.hour}` : d.hour;
      const convertedminute =
        d.minute.toString().length === 1 ? `0${d.minute}` : d.minute;

      return {
        time: `${convertedHour} : ${convertedminute}`,
        date: `${d.year} / ${convertedMonth} / ${convertedDay}`,
        hour: convertedHour,
        minute: convertedminute,
      };
    } else return null;
  } catch (error) {
    return null;
  }
}

export function convertToGeorgianDate(year, month, day) {
  try {
    const p = new PersianDate();

    let date = p
      .calendar('g')
      .fromJalali([`${year}`, `${month}`, `${day}`])
      .toString();

    return date;
  } catch (error) {
    return null;
  }
}

export function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

export function stringIsNullOrEmpty(text) {
  return !text || text === '';
}

export function getTruckCode(text) {
  if (stringIsNullOrEmpty(text)) return null;

  const code = Number.parseInt(text, 10);
  if (code && chars[code - 1]) return code;
  else if (chars.indexOf(text, 0) > -1) return chars.indexOf(text, 0) + 1;
  else return 1;
}

export function getToday() {
  const p = new PersianDate();
  const calendar = p.calendar('j');

  const fullDate = calendar.toString();
  const hour = calendar.hour().toString();
  const minute = calendar.minute().toString();
  const second = calendar.second().toString();

  const date = {
    fullDate,
    year: fullDate.split('/')[0],
    month: fullDate.split('/')[1],
    day: fullDate.split('/')[2],
    hour: hour.length === 2 ? hour : `0${hour}`,
    minute: minute.length === 2 ? minute : `0${minute}`,
    second: second.length === 2 ? second : `0${second}`,
    calendar,
  };

  return date;
}

export function getGorgianDate(year, month, day) {
  if (year && month && day) {
    let p = new PersianDate();
    let georgianDate = p.calendar('g').fromJalali([year, month, day]).toString(); // 2021/03/21

    return georgianDate; // 2026-04-05
  } else console.log(' MyError :getGorgianDate function input data is not valid ');
}

export function regularTagValidation(t1, t2, t3, t4) {
  const valuesCheck = !t1 || !t2 || !t3 || !t4;
  const lengthCheck = t1?.length !== 2 || t2?.length !== 2 || t4?.length !== 3;

  if (valuesCheck || lengthCheck)
    return { status: false, message: 'شماره پلاک وارد شده صحیح نمیباشد' };
  else return { status: true, message: '' };
}

export function freeZoneTagValidation(freeZoneNo, freeZoneTwoDigit, freeZoneCode) {
  const valuesCheck = !freeZoneNo || !freeZoneTwoDigit || !freeZoneCode;
  const lengthCheck =
    freeZoneNo?.length !== 5 ||
    freeZoneTwoDigit?.length !== 2 ||
    freeZoneCode?.length !== 1;

  if (valuesCheck || lengthCheck)
    return { status: false, message: 'شماره پلاک وارد شده صحیح نمیباشد' };
  else return { status: true, message: '' };
}

export function validateTags(
  selectedIndex,
  t1,
  t2,
  t3,
  t4,
  freeZoneNo,
  freeZoneTwoDigit,
  freeZoneCode,
) {
  console.log('validateTags  selectedIndex', selectedIndex);
  const regularTagValidate = regularTagValidation(t1, t2, t3, t4);
  const freezoneTagValidate = freeZoneTagValidation(
    freeZoneNo,
    freeZoneTwoDigit,
    freeZoneCode,
  );

  if (selectedIndex === TAG_TYPE.reqular) {
    if (!regularTagValidate.status) {
      return { status: false, message: 'شماره پلاک وارد شده صحیح نمیباشد' };
    } else return { status: true, message: '' };
  } else if (selectedIndex === TAG_TYPE.freeZone) {
    if (!freezoneTagValidate.status) {
      return { status: false, message: 'شماره پلاک وارد شده صحیح نمیباشد' };
    } else return { status: true, message: '' };
  } else return { status: false, message: 'شماره پلاک را وارد نمایید' };
}

export function getTruckLetter(code) {
  if (stringIsNullOrEmpty(code)) return null;

  if (!Number.parseInt(code, 10) && chars.indexOf(code, 0) > -1) return code;
  else if (chars[code - 1]) return chars[code - 1];
  else return chars[0];
}

export function validateMobileNum(mobileNum, propertyName = 'mobile') {
  var regex = new RegExp('^(\\+98|0)?9\\d{9}$');

  if (!mobileNum) {
    return {
      mobileValidationStatus: false,
      mobileValidationMessage: 'شماره تلفن همراه را وارد نمایید.',
    };
  } else if (
    mobileNum?.toString()?.length !== INPUT_LENGTH.mobileNum ||
    !regex.test(mobileNum)
  ) {
    return {
      mobileValidationStatus: false,
      mobileValidationMessage: 'شماره تلفن همراه وارد شده معتبر نیست.',
    };
  } else if (regex.test(mobileNum)) {
    return {
      mobileValidationStatus: true,
      mobileValidationMessage: 'شماره تلفن همراه وارد شده معتبر است.',
    };
  }
}

export function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  const result = re.test(email);

  if (result) return { status: true, message: '' };
  else return { status: false, message: 'ایمیل وارد شده صحیح نمیباشد' };
}

export function getLocalTimeInUTCFormat() {
  let date = new Date();

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();

  if (month < 10) month = `0${month}`;
  if (day < 10) day = `0${day}`;
  if (hour < 10) hour = `0${hour}`;
  if (minute < 10) minute = `0${minute}`;
  if (seconds < 10) seconds = `0${seconds}`;

  let time = `${year}-${month}-${day}T${hour}:${minute}:${seconds}.000Z`;

  return time;
}

export function onlyPersianString(str) {
  // var p = /^[\u0600-\u06FF\s]+$/
  var p = /^[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF\u200C\u200F ]+$/;

  if (!str) return '';
  else if (p.test(str)) return str;
  else return null;
}

export function passwordEncryption(text) {
  if (text) {
    // const text = '4@x@XH';
    const key = 'LogesticaHashKey';
    // 'LGD3VdRR+Cs=';

    const keyArray = CryptoJS.enc.Utf8.parse(key);
    const textWordArray = CryptoJS.enc.Utf8.parse(text);
    const options = { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 };

    keyArray.words.push(keyArray.words[0], keyArray.words[1]);

    const encrypted = CryptoJS.TripleDES.encrypt(textWordArray, keyArray, options);
    const base64String = encrypted.toString();

    console.log('Encrypted: ' + base64String);
    return base64String;
  } else return '';
}

export function twoDateDiffInMinute(dateOne, dateTwo) {
  let minutes = 0;

  if (dateTwo & dateOne) {
    let msDifference = dateTwo - dateOne;
    minutes = Math.floor(msDifference / 1000 / 60);
  }

  return minutes;
}
