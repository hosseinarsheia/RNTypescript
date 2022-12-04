import R from '../res/R';
import { SCREENS } from '../navigation/Screens';
import { navigationRef } from '../navigation';
import * as Storage from '../utils/Storage';
import { logout } from './Helper';

export const PAGE_SIZE = 30;
export const GPS_GATHERING_IINTERVAL = 2000; // time interval for background time in ms
export const TIME_OUT = 18000; // getting gps timeout in ms
export const SHIPPING_CLOSING_MINUTE = 480; // time of shiiping doc that can be open in minutes

export const TAG_TYPE = {
  freeZone: 0,
  reqular: 1,
};

export const DOC_TYPE = {
  regular: 0,
  daily: 1,
};

export const chars = [
  'الف',
  'ب',
  'پ',
  'ت',
  'ث',
  'ج',
  'چ',
  'ح',
  'خ',
  'د',
  'ذ',
  'ر',
  'ز',
  'ژ',
  'س',
  'ش',
  'ص',
  'ض',
  'ط',
  'ظ',
  'ع',
  'غ',
  'ف',
  'ق',
  'ک',
  'گ',
  'ل',
  'م',
  'ن',
  'و',
  'ه',
  'ی',
];

export const tagZones = [
  { id: 1, title: R.strings.arvandZone },
  { id: 2, title: R.strings.anzaliZone },
  { id: 7, title: R.strings.arasZone },
  { id: 3, title: R.strings.chabaharZone },
  { id: 4, title: R.strings.qeshmZone },
  { id: 5, title: R.strings.kishZone },
  { id: 6, title: R.strings.makuZone },
];

export const chargeList = [
  { value: 80000 },
  { value: 150000 },
  { value: 300000 },
  { value: 450000 },
  { value: 1000000 },
];

export const appGuideList = [
  {
    title: 'ثبت نام',
    guideScreenTitle: 'آموزش ثبت نام در سامانه',
    description: `برای ثبت نام در سامانه باربرگ، پس از انتخاب گزینه ثبت نام در سامانه، شماره تلفن همراه و کد ملی یا شناسه ملی خود را وارد کرده و پس از مطالعه قوانین و مقررات تیک مربوط به آن را بزنید. سپس گزینه دریافت رمز عبور را انتخاب کنید.
کد چهار رقمی به شماره همراه شما پیامک می شود که به منزله رمز عبور شما برای هر بار ورود به سامانه است. این کد را نزد خود نگه دارید. رمز عبور را در کادر مربوطه وارد کنید و وارد سامانه شوید. اگر شماره تلفن همراه خود را اشتباه وارد کرده اید، اصلاح اطلاعات ورودی را انتخاب کنید و دوباره مراحل را طی نمایید.`,
    videoLinkTitle: 'ثبت نام از طریق ',
    appVideoLink: 'https://www.aparat.com/v/fXJmj',
    webVideoLink: 'https://www.aparat.com/v/sAkSb',
  },
  {
    title: 'ورود به سامانه و فراموشی رمز عبور',
    guideScreenTitle: 'آموزش ورود به سامانه و فراموشی رمز عبور',
    description: `برای ورود به سامانه، ابتدا باید ثبت نام کنید. در صورتی که قبلا ثبت نام کرده اید، شماره تلفن همراه و رمز عبوری که قبلا برای شما پیامک شده است را، وارد نموده و گزینه ورود را انتخاب کنید. بعد از انتخاب دکمه ورود، در صورت صحت اطلاعات، وارد برنامه می شوید. 
در صفحه ورود، در صورتی که رمز عبور خود را فراموش کرده اید، گزینه فراموشی رمز عبور را انتخاب کنید. در این صفحه، شماره تلفن همراه و کد ملی یا شناسه ملی خود را وارد کنید، و گزینه تایید را انتخاب کنید، منتظر ارسال رمز عبور جدید از طریق پیامک به شماره همراه وارد شده باشید.
مجددا به صفحه ورود منتقل شده، شماره تلفن همراه خود و رمز عبوری که دریافت کرده اید را وارد کرده و گزینه ورود را انتخاب کنید. بعد از انتخاب گزینه ورود، وارد صفحه اصلی سامانه می شوید.`,
    videoLinkTitle: 'ورود به سامانه از طریق ',
    appVideoLink: 'https://www.aparat.com/v/JrMTo',
    webVideoLink: 'https://www.aparat.com/v/ZSujp',
  },
  {
    title: 'دریافت باربرگ روزانه',
    guideScreenTitle: 'آموزش دریافت باربرگ روزانه',
    description: `پس از ورود به سامانه، برای صدور باربرگ روزانه، گزینه «باربرگ روزانه» را انتخاب کنید.
برای صدور باربرگ روزانه، ابتدا باید پلاک خودرو و تاریخ فعالیت خود را انتخاب کنید. توجه کنید که خودرو حتما باید پروانه فعالیت معتبر از سامانه مدیریت مرکزی حمل و نقل درون شهری و حومه ای به نشانی utcms.ir را داشته باشد. سپس از قسمت پایین صفحه،  محل فعالیت خود را تعیین کنید. برای این کار ابتدا استان و سپس شهر محل فعالیت خود را انتخاب کنید. در صورتی که شما در این تاریخ در چند شهر تردد می کنید، دکمه افزودن منطقه را انتخاب کنید.
سپس باید کد ملی راننده را وارد کنید. برای آنکه کد ملی مورد قبول واقع  شود، راننده حتما باید در سامانه UTCMS برای دریافت پروانه اشتغال ثبت نام کرده باشد.
در نهایت هزینه عوارض، اطلاع رسانی و هزینه قابل پرداخت برای صدور باربرگ روزانه نمایش داده می شود. اگر موجودی اعتبار شما برای صدور باربرگ روزانه کافی است گزینه ثبت باربرگ روزانه را انتخاب کنید. اگر موجودی اعتبار شما کافی نیست گزینه افزایش اعتبار را انتخاب کنید و با انتخاب افزایش اعتبار و پرداخت از طریق کارت بانکی حساب کاربری خود را شارژ کنید و سپس به این گام برگردید.
صدور کد رهگیری 10 رقمی به معنای پایان فرآیند صدور باربرگ روزانه است. در این مرحله رسید باربرگ روزانه صادر می شود.`,
    videoLinkTitle: 'دریافت باربرگ روزانه از ',
    appVideoLink: 'https://www.aparat.com/v/1wWQL',
    webVideoLink: 'https://www.aparat.com/v/9SVG8',
  },
  {
    title: 'دریافت باربرگ حقیقی',
    guideScreenTitle: 'آموزش دریافت باربرگ حقیقی',
    description: `پس از ورود به سامانه برای دریافت باربرگ حقیقی، گزینه «باربرگ حقیقی» را انتخاب کنید.
در اولین قدم باید اطلاعات «فرستنده» و «گیرنده» را وارد نمایید. قسمت هایی که با علامت ستاره مشخص شده اند را حتما باید تکمیل نمایید و ورود بقیه اطلاعات اختیاری است. شما می توانید بعد از تکمیل اطلاعات فرستنده یا گیرنده دکمه «ستاره» را انتخاب کنید تا اطلاعات مورد نظر به لیست منتخب شما افزوده شود. همچنین شما می توانید برای انتخاب فرستنده یا گیرنده ای که قبلا به لیست منتخب خود اضافه کرده اید از دکمه انتخاب استفاده کنید.
در مرحله بعد باید راننده و خودرو حمل بار را انتخاب کنید. برای اینکار کد ملی راننده را در فرم بالا وارد کنید تا اطلاعات راننده به صورت خودکار ثبت شود. توجه داشته باشید که راننده باید در سایت utcms.ir برای دریافت پروانه اشتغال، ثبت نام کرده باشد. سپس با وارد کردن شماره پلاک خودرو در فرم پایین، اطلاعات خودرو ثبت می شود. توجه داشته باشید که خودرو مورد نظر باید در سایت utcms.ir دارای پروانه فعالیت معتبر باشد. در صورتی که پلاک خودرو متعلق به منطقه آزاد باشد با انتخاب گزینه «پلاک منطقه آزاد» پلاک مورد نظر را وارد کنید. همچنین می توانید همانند مرحله قبل راننده یا خودرو مورد نظر را به فهرست منتخب خود اضافه کنید یا با زدن دکمه انتخاب، آن را از لیست منتخب خود برگزینید. پس از وارد کردن اطلاعات مربوطه گزینه ادامه را انتخاب کنید.
در مرحله بعد، مشخصات کالاهای حمل بار را تعیین کنید. ابتدا چند حرف از نام کالای بار را در قسمت نام کالا وارد کنید. سپس فهرستی از نام های کالایی که دارای این چند حرف هستند، نمایش داده می شود. شما می توانید نام کالاهای بار خود را از این فهرست انتخاب کنید. با انتخاب «بسته بندی» به فهرستی منتقل می شوید که می توانید نوع بسته بندی کالا و بار خود را انتخاب کنید. در ادامه وزن بار، تعداد بسته های بار و توضیحات بار را وارد کنید. بعد از وارد کردن اطلاعات کالا و بار دکمه «افزودن کالا» را انتخاب کنید تا کالا به لیست کالاها اضافه شود. شما می توانید تا 5 کالا به لیست کالاهای بار خود اضافه کنید. با انتخاب فهرست کالاها، می توانید تمام کالاهایی که انتخاب کرده اید را مشاهده نموده و در صورت نیاز آن ها را ویرایش یا حذف نمایید. در نهایت با وارد کردن ارزش تقریبی کالا دکمه ادامه را انتخاب کنید.
در مرحله بعد مشخصات کامل مبدا و مقصد را وارد کنید. انتخاب استان و شهر و ثبت آدرس ضروری است. گزینه های ستاره و افزودن، کاربردی مشابه مراحل قبل دارد.`,
  },
  {
    title: 'تاریخچه اسناد حمل',
    guideScreenTitle: 'آموزش کار با تاریخچه اسناد حمل',
    description: `برای مشاهده و بررسی سوابق باربرگ هایی که از سامانه دریافت نموده اید، گزینه «تاریخچه اسناد حمل» را انتخاب نمایید. در این بخش می توانید سوابق باربرگ های حقیقی، روزانه و اسناد پیش نویس خود را مشاهده نمایید.
با کلیک بر روی دکمه جزئیات، می توانید اطلاعات بیشتری از سند مربوطه مشاهده نمایید. در صورتی که تمامی اسنادی را که قبلا صادر کرده اید در فهرست مشاهده نمی کنید، به انتهای آن رفته و گزینه «مشاهده اسناد حمل بیشتر» را انتخاب نمایید.
برای تغییر ترتیب زمانی نمایش تاریخچه اسناد، در قسمت پایین صفحه، می توانید گزینه ی جدیدترین یا قدیمی ترین را انتخاب نمایید. با انتخاب گزینه «جدید ترین»، آخرین سند در ابتدا و اسناد قدیمی تر در انتها نمایش داده می شوند. به طور برعکس، با انتخاب گزینه «قدیمی ترین»، قدیمی ترین سند در ابتدا و اسناد جدید تر در انتها نمایش داده می شوند.`,
  },
  {
    title: 'پیش نویس سند حمل',
    guideScreenTitle: 'آموزش استفاده از پیش نویس سند حمل',
    description: `در تمامی مراحل ثبت اطلاعات باربرگ حقیقی در صورتی که هر دلیلی از سامانه خارج شدید، اطلاعات ثبت شده در بخش پیش نویس سند حمل ذخیره می شود.  همچنین در گام آخر مراحل ثبت اطلاعات باربرگ حقیقی، گزینه ای تحت عنوان «ذخیره به عنوان پیش نویس» وجود دارد. در صورت انتخاب این گزینه اطلاعات آن سند، در بخش پیش نویس ها ذخیره شده و بعدا می توانید دوباره به آن سند مراجعه نموده و باربرگ متناظر با آن را صادر نمایید.
برای مشاهده اسناد پیش نویس این مسیر را باید طی نمایید:
تاریخچه اسناد حمل > پیش نویس

برای صدور یک سند پیش نویس، باید در فهرست اسناد پیش نویس دکمه «جزئیات» مربوط به آن سند را انتخاب نمایید. اگر اطلاعات سند کامل باشد، با انتخاب دکمه «صدور» می توانید آن را صادر نمایید. در صورتی که اطلاعات سند ناقص باشد، با انتخاب دکمه « ویرایش » و طی نمودن مراحل، می توانید اطلاعات سند را تکمیل و ویرایش نموده، سپس باربرگ حقیقی را صادر نمایید.`,
    videoLinkTitle: 'آموزش پیش نویس سند حمل در ',
  },
  {
    title: 'مشاهده و بررسی صورت حساب',
    guideScreenTitle: 'آموزش مشاهده و بررسی صورت حساب',
    description: `برای مشاهده و بررسی صورت حساب مالی خود می توانید از دو طریق اقدام نمایید. 
1. گزینه کیف پول اعتباری را انتخاب نموده و در صفحه بعدی، گزینه صورت حساب را انتخاب نمایید.
2. با انتخاب نماد سه خط، منوی کشویی را باز نموده و گزینه «مشاهده صورت حساب مالی» را انتخاب نمایید. 
شما می توانید ده گردش مالی اخیر خود را مشاهده نموده و یا با انتخاب گزینه «صورت حساب» از بالای صفحه، گردش های حساب اعتباری خود را طی بازه زمانی که تعیین می نمایید، مشاهده نمایید. بدین منظور ابتدا و انتهای بازه ی زمانی مورد نظر خود را وارد نموده و دکمه «دریافت صورت حساب» را انتخاب کنید، سپس اطلاعات تمامی گردش های مالی که در این بازه انجام شده است، نمایش داده می شود.`,
  },
  {
    title: 'افزایش اعتبار',
    guideScreenTitle: 'آموزش افزایش موجودی اعتبار',
    description: `برای پرداخت هزینه ها در سامانه باربرگ باید حساب اعتباری شما موجودی کافی داشته باشد، بدین منظور می توانید از قسمت کیف پول اعتباری، اقدام به افزایش اعتبار حساب خود نموده یا اینکه در گام نهایی دریافت باربرگ، از طریق گزینه افزایش اعتبار، موجودی اعتبار حساب خود را افزایش دهید. پس از انتخاب مبلغ مورد نظر خود جهت افزایش اعتبار، وارد صفحه پرداخت بانکی می شوید. در این صفحه اطلاعات کارت بانکی و رمز دوم خود را وارد نمایید و پرداخت را نهایی نمایید. پس از اتمام مراحل پرداخت، موجودی اعتبار شما افزایش می یابد.`,
  },
];

export const DRAWER_ITEMS = [
  {
    title: R.strings.userInfo,
    iconName: 'user',
    iconType: 'font-awesome',
    screen: SCREENS.USER_SCREEN,
    passItem: null,
  },
  {
    title: R.strings.transportDocHistory,
    iconName: 'history',
    iconType: 'font-awesome',
    screen: SCREENS.DOCUMENT_HISTORY_SCREEN,
    passItem: 2,
  },
  {
    title: R.strings.dailyTransportDocHistory,
    iconName: 'pencil-square-o',
    iconType: 'font-awesome',
    screen: SCREENS.DOCUMENT_HISTORY_SCREEN,
    passItem: 1,
  },
  {
    title: R.strings.transportDocsDraft,
    iconName: 'pencil-square-o',
    iconType: 'font-awesome',
    screen: SCREENS.DOCUMENT_HISTORY_SCREEN,
    passItem: 0,
  },
  {
    title: R.strings.viewLatestIssuedTransportDoc,
    iconName: 'pencil-square-o',
    iconType: 'font-awesome',
    screen: SCREENS.DOCUMENT_HISTORY_SCREEN,
    passItem: 2,
  },
  {
    title: R.strings.viewFinancialTurnover,
    iconName: 'ios-document-text-outline',
    iconType: 'ionicon',
    screen: SCREENS.USER_TURNOVER_LIST_SCREEN,
    passItem: null,
  },
  {
    title: R.strings.increaseFinancialCredit,
    iconName: 'coins',
    iconType: 'font-awesome-5',
    screen: SCREENS.WALLET_TURNOVER_SCREEN,
    passItem: null,
  },
  {
    title: R.strings.getFuelGuide,
    iconName: 'gas-pump',
    iconType: 'font-awesome-5',
    screen: SCREENS.GET_FUEL_GUIDE_SCREEN,
    passItem: null,
  },
  {
    title: R.strings.appGuide,
    iconName: 'question-circle',
    iconType: 'font-awesome',
    screen: SCREENS.APP_GUIDE_SCREEN,
    passItem: null,
  },
  {
    title: R.strings.contactUs,
    iconName: 'contact-phone',
    iconType: 'material',
    screen: SCREENS.CONTACT_US_SCREEN,
    passItem: null,
  },
  {
    title: R.strings.settings,
    iconName: 'settings',
    iconType: 'ionicon',
    screen: SCREENS.SETTING_SCREEN,
    passItem: null,
  },
];

export const MONTH_LIST = [
  { id: 1, title: R.strings.month1 },
  { id: 2, title: R.strings.month2 },
  { id: 3, title: R.strings.month3 },
  { id: 4, title: R.strings.month4 },
  { id: 5, title: R.strings.month5 },
  { id: 6, title: R.strings.month6 },
  { id: 7, title: R.strings.month7 },
  { id: 8, title: R.strings.month8 },
  { id: 9, title: R.strings.month9 },
  { id: 10, title: R.strings.month10 },
  { id: 11, title: R.strings.month11 },
  { id: 12, title: R.strings.month12 },
];

export const YEAR_LIST = [
  { id: 1401, title: '1401' },
  { id: 1402, title: '1402' },
  { id: 1403, title: '1403' },
  { id: 1404, title: '1404' },
  { id: 1405, title: '1405' },
  { id: 1406, title: '1406' },
  { id: 1407, title: '1407' },
  { id: 1408, title: '1408' },
  { id: 1409, title: '1409' },
  { id: 1410, title: '1410' },
];

export const QUOTA_TYPE = [
  { id: 1, title: 'پایه' },
  { id: 2, title: 'عملکردی' },
];

export const FAVOURITE_TYPE = {
  sender: 1,
  reciver: 2,
};

export const ICON_TYPE = {
  antdesign: 'antdesign',
  entypo: 'entypo',
  evilicon: 'evilicon',
  feather: 'feather',
  fontAwesome: 'font-awesome',
  fontAwesome5: 'font-awesome-5',
  fontisto: 'fontisto',
  foundation: 'foundation',
  ionicon: 'ionicon',
  material: 'material',
  materialCommunity: 'material-community',
  octicon: 'octicon',
  simpleLineIcon: 'simple-line-icon',
  zocial: 'zocial',
};

export const INPUT_LENGTH = {
  nationalCode: 10,
  national_ID: 11,
  mobileNum: 11,
  shabaNumber: 24,
  creditCard: 16,
  phoneNum: 11,
  postalCode: 10,
  fullName: 50,
  globalInput: 150,
};

export const MAP_API =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjlmMWMxZmYzY2IzMGYyMjZlNGMzMGI0OGVkZWFmMDc5MDQ3ZDZiYmYwNTRmZjg4MGMyZWE5YjhlN2VlN2I5ZDViODZkNzRlMThkM2QxNDA1In0.eyJhdWQiOiIxNjU2OCIsImp0aSI6IjlmMWMxZmYzY2IzMGYyMjZlNGMzMGI0OGVkZWFmMDc5MDQ3ZDZiYmYwNTRmZjg4MGMyZWE5YjhlN2VlN2I5ZDViODZkNzRlMThkM2QxNDA1IiwiaWF0IjoxNjQxMzc4ODM0LCJuYmYiOjE2NDEzNzg4MzQsImV4cCI6MTY0Mzg4NDQzNCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.iDHfkwHPn9cmzs_Bse9fw9z0wEYupdqVNB1XWo9sQLCKlwbHvtJTuZUplDpQTUwrKaWYks7By5xDitddOrvXs7alZHqb-_AQI_WXDMOJUxJwZs9qNssYNFMfgVDcgDjZpgcesK5zprl1TNRJ76t8BJ-QuIzaULZzk19ELzq-wy0n57QPfwfIwEPN8MjvLru5iwuAq31CChOH4VaeBCV_wU4X2XMtH6jpgShTIIPLVUVuH01EnFBZGRtY5AGSazYtxw2xwwn2S546W50SXBY0sYAUxJGZ2JBL3-2sDNpCGGR-PPtCtHF-kxKXegUPh-0Jnc11-EhJnqh4mwTSbetJHw';

export const ADDRESS_TYPE = {
  origin: 0,
  destionation: 1,
};

export const CARRING_DOC_STATUS = {
  startCarring: 4,
  endCarring: 5,
};

export const ITEMS = [
  {
    title: 'اطلاعات کاربری',
    iconName: 'user-alt',
    iconType: ICON_TYPE.fontAwesome5,
    onPress: () => navigationRef.navigate(SCREENS.PROFILE_SCREEN),
  },

  {
    title: 'ثبت باربرگ حقیقی/حقوقی',
    iconName: 'document-text',
    iconType: ICON_TYPE.ionicon,
    onPress: () => navigationRef.navigate(SCREENS.TRANSPORT_DOC_FIRST_SCREEN),
  },
  {
    title: 'ثبت باربرگ روزانه',
    iconName: 'document-text',
    iconType: ICON_TYPE.ionicon,
    onPress: () => navigationRef.navigate(SCREENS.TRANSPORT_DOC_DAILY_FIRST_SCREEN),
  },

  // {
  //   title: 'در حال حمل',
  //   iconName: 'wallet',
  //   iconType: ICON_TYPE.fontAwesome5,
  //   onPress: () => navigationRef.navigate(SCREENS.CARRING_DOC_SCREEN),
  // },

  {
    title: 'بخش مالی',
    iconName: 'wallet',
    iconType: ICON_TYPE.fontAwesome5,
    onPress: () => navigationRef.navigate(SCREENS.WALLET_TURNOVER_SCREEN),
  },
  {
    title: 'مشاهده سهمیه سوخت',
    iconName: 'gas-pump',
    iconType: ICON_TYPE.fontAwesome5,
    onPress: () => navigationRef.navigate(SCREENS.VIEW_FUEL_QUOTA_SCREEN),
  },
  {
    title: 'دریافت شماره پیگیری',
    iconName: 'file-search',
    iconType: ICON_TYPE.materialCommunity,
    onPress: () => navigationRef.navigate(SCREENS.GET_TRACKING_NUMBER_SCREEN),
  },
  // {
  //   title: 'اطلاعیه ها',
  //   iconName: 'bell-alt',
  //   iconType: 'fontisto',
  //   // onPress: () => navigationRef.navigate(SCREENS.WALLET_TURNOVER_SCREEN),
  // },
  {
    title: 'گردش حساب',
    iconName: 'wallet',
    iconType: ICON_TYPE.fontAwesome5,
    onPress: () => navigationRef.navigate(SCREENS.USER_TURNOVER_LIST_SCREEN),
  },
  {
    title: R.strings.shippingDocsHistory,
    iconName: 'history',
    iconType: ICON_TYPE.materialCommunity,
    onPress: () => navigationRef.navigate(SCREENS.CARRING_DOCUMENT_HISTORY_SCREEN),
  },

  {
    title: 'خروج از حساب',
    iconName: 'md-exit',
    iconType: ICON_TYPE.ionicon,
    onPress: async () => {
      try {
        await logout();
      } catch (error) {
        console.log(' Can not exit ', error);
      }
    },
  },
];

export const BACKGROUND_SERVICE_OPTION = {
  taskName: 'Example',
  taskTitle: 'logistica',
  taskDesc: 'در حال جمع اوری',
  taskIcon: {
    name: 'ic_launcher',
    type: 'mipmap',
  },
  color: '#ff00ff',
  linkingURI: 'yourSchemeHere://chat/jane', // See Deep Linking for more info
  parameters: {
    delay: 1000,
  },
};
