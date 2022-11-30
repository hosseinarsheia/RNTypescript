const global = {};

const loginScreenStrings = {
  driversEnter: 'ورود رانندگان',
  userName: 'نام کاربری',
  password: 'رمز عبور',
  securityCode: 'کد امنیتی',
  enter: 'ورود',
  oneUsePass: 'کد یکبار مصرف',
  enterSecurityCode: 'لطفا کد امنیتی را وارد نمایید',
  passwordEmpetyError: 'رمز عبور را وارد نمایید',
  forgetPasswordHelper:
    'اگر رمز عبور خود را فراموش کرده اید، یکی از روش های زیر را انتخاب کنید',
};

const userAccount = {
  fullName: 'نام و نام خانوادگی',
  exitApp: 'خروج از برنامه',
};

const driverSignUp = {
  driverSignup: 'ثبت نام رانندگان',
  mobileNumber: 'شماره موبایل',
  nationalCode_ID: 'کد / شناسه ملی',
  getpassword: 'دریافت رمز عبور',
  acceptRulesAndLaws: 'قوانین و مقررات را میپذیرم',
  getConfirmCode: 'دریافت کد تایید',
  enterConfirmCode: 'کد تایید را وارد نمایید',
  resendConfirmCode: 'ارسال مجدد کد تایید',
  confirm: 'تایید',
  sendConfirmCode: 'ارسال کد تایید',
  resend: 'ارسال مجدد',
};

const wallet = {
  creditBalance: 'موجودی',
  pay: 'پرداخت',
  myCreditBalance: 'موجودی اعتبار من',
  rial: 'ریال',
  dateAndAmountOfLastCreditIncrease: 'تاریخ و مبلغ آخرین افزایش اعتبار',
  bill: 'صورتحساب',
  increaseCredit: 'افزایش اعتبار',
  decreaseCredit: 'کاهش اعتبار',
  paymentCallBackURL: 'app://baarbarg.ir/AppPaymentResult',
  creditTurnover: 'گردش اعتبار حساب',
  accountRemaining: 'موجودی و گردش حساب',
};

const bill = {
  enterBillDate: 'برای صورتحساب تاریخ مورد نظر را وارد کنید.',
  show: 'نمایش',
  trackingNumber: 'شماره پیگیری',
  transActionValue: 'مبلغ تراکنش',
  back: 'برگشت',
};

const transportDocDaily = {
  dailyTransportDoc: 'باربرگ روزانه',
  car: 'خودرو',
  enterTag: 'شماره پلاک را وارد نماید',
  capacity: 'ظرفیت',
  accountType: 'نوع کاربری',
  driver: 'راننده',
  driverNationalCode: 'کد ملی راننده',
  next: 'بعدی',
  previous: 'قبلی',
  nameAndLstName: 'نام و نام خانوادگی',

  dateOfActivity: 'تاریخ فعالیت',
  enterDateOfActivity: 'تاریخ فعالیت را وارد نمایید',
  activityArea: 'منطقه فعالیت',
  enterValidDate: 'تاریخ معتبر وارد نمایید.',
  provinceOrCityIsNotSelected: 'استان یا شهر انتخاب نشده است',
  duplicateSelectedActivityAreaError: 'منطقه فعالیت انتخاب شده تکراری می باشد',
  noActivityAreaSelectedError: 'حداقل یک منطقه فعالیت باید انتخاب شود',

  costs: 'هزینه ها',
  toll: 'عوارض',
  notificationFee: 'هزینه اطلاع رسانی',
  serviceFee: 'هزینه خدمات',
  trackingCodeFee: 'هزینه دریافت کد رهگیری',
  dailyDocTotalCost: 'مبلغ قابل پرداخت برای صدور سند حمل',
  submitDailyDoc: 'ثبت باربرگ روزانه',
};

const getTrackingCode = {
  getTrackingNumber: 'دریافت شماره پیگیری',
  enterRequiredInputs:
    'موارد ذیل را وارد کرده، سپس دکمه نمایش شماره پیگیری را انتخاب نمایید',
  activityLicense: 'پروانه فعالیت',
  employmentLicense: 'پروانه اشتغال',
  operationLicense: 'پروانه بهره برداری',
  showTrackingNumber: 'نمایش شماره پیگیری',
  driverLicenseID: 'شماره گواهی نامه',
  captchaCodeIsNotCorrect: 'کد امنیتی وارد شده صحیح نمیباشد.',
  driverLicenseIdIsNotValid: 'شماره گواهینامه معتبر نیست',
  managingDirectorNationalCode: 'کدملی مدیرعامل',
  companyNationalID: 'شناسه ملی شرکت',
};

const docDetailScreen = {
  senderAnreciverInfo: 'اطلاعات فرستنده و گیرنده',
  timeOfActivity: 'ساعت فعالیت',
  senderMobile: 'تلفن همراه فرستنده',
  reciverMobile: 'تلفن همراه گیرنده',
  driverInfo: 'اطلاعات راننده',
  driverName: 'نام راننده',
  driverMobile: 'تلفن همراه راننده',
  rank: 'رتبه',
  fleetInfo: 'اطلاعات ناوگان',
  tag: 'پلاک',
  type: 'نوع',
  approximateValueOfLoad: 'ارزش تقریبی کالا(ریال)',
  insuranceCompanyName: 'نام شرکت بیمه',

  carringDocDetals: 'مشخصات سند حمل',
  transportDocTrackingCode: 'کد رهگیری سند حمل',
  issueDate: 'تاریخ صدور',
  issueHour: 'ساعت صدور',
  documenIssuer: 'صادر کننده سند',
  loadDetails: 'مشخصات کالا',
  loadValueInsurance: 'ارزش بار بیمه',
  originAndDestination: 'مبدا و مقصد',
  fare: 'کرایه',
  fareAmount: 'مبلغ کرایه(ریال)',
  totalFare: 'کل مبلغ کرایه(ریال)',
  preFare: 'پیش کرایه(ریال)',
  afterFare: 'پس کرایه(ریال)',
  totalPayed: 'کل مبلغ صدور باربرگ',

  originCity: 'شهر مبدا',
  originState: 'استان مبدا',
  destinationCity: 'شهر مقصد',
  destinationState: 'استان مقصد',

  fullNameOrCompanyNameS: 'نام و نام خانوادگی/ شرکت',
  typeOfregister: 'نوع عضویت',
  packingType: 'نوع بسته بندی ',
  packCount: 'تعداد بسته (عدد)',
  weight: 'وزن',

  shippingDocsHistory: 'تاریخچه اسناد حمل',
  realAndLegalTransport: 'باربرگ حقیقی / حقوقی',
};

const strings = {
  ...global,
  ...loginScreenStrings,
  ...userAccount,
  ...driverSignUp,
  ...wallet,
  ...bill,
  ...transportDocDaily,
  ...getTrackingCode,

  ...docDetailScreen,

  creditCardNumber: 'شماره کارت',
  shabaNumber: 'شماره شبا حساب بانکی',
  exitUserAccount: 'خروج از حساب کاربری',
  submit: 'ثبت',
  choose: 'انتخاب',

  senderInfo: 'اطلاعات فرستنده',
  reciverInfo: 'اطلاعات گیرنده',

  chooseOrigin: 'لطفا از روی نقشه مبدا را انتخاب نمایید',
  originAddress: 'آدرس مبدا',
  destination: 'مقصد',
  chooseDestination: 'لطفا از روی نقشه مقصد را انتخاب نمایید',
  destinationAddress: 'آدرس مقصد',
  addressDetals: 'جزییات آدرس',
  carriengDocIssueFee: 'هزینه صدور حمل',

  appName: 'باربرگ',
  ok: 'تایید',
  ButtonKnow: 'متوجه شدم',
  dialogOK: 'تایید',
  askLater: 'بعدا بپرس',
  cancel: 'انصراف',
  error: 'خطا',
  smsCheckBox: 'ارسال پیامک اطلاع رسانی به شماره موبایل فرستنده',
  closeContent: 'بستن',
  seeMessage: 'مشاهده پیام',
  StatusMessage: 'وضعیت',
  TypeMessage: 'نوع پیام',
  AllOfMsg: 'همه',
  MsgRead: 'خوانده شده',
  MsgUnRead: 'خوانده نشده',
  MsgBox: 'پیام ها',
  MsgPublic: 'عمومی',
  MsgPrivate: 'خصوصی',
  NoData: 'پیامی یافت نشد',
  privateMessages: 'پیام شخصی',
  publicMessages: 'پیام عمومی',
  continue: 'ادامه',
  SearchText: 'متن جستجو',
  mainPage: 'صفحه اصلی',
  ValueDetail: 'تخمین ارزش بار',
  insPrice: 'مبلغ بیمه',
  yes: 'بلی',
  yes2: 'بله',
  DeleteItem: 'حذف',
  DetailShipping: 'نمایش جزئیات',
  no: 'خیر',
  success: 'عملیات موفقیت آمیز بود',
  successAlertTitle: 'عملیات موفق',
  warningLocation: 'دسترسی به Location رد شد',
  warningAccessLocation:
    'اپلیکیشن باربرگ برای دسترسی به موقعیت جغرافیای شما نیاز به دسترسی LOCATION گوشی شما می باشد  ',
  warning: 'اخطار',
  attention: 'توجه !',
  comingSoon: 'به زودی ...',
  // carryingSuccess: 'شروع حمل بار با موفقیت انجام شد',
  carryingSuccess:
    'شروع حمل بار با موفقیت انجام شد\nکاربر گرامی در طول مسیر حمل بار باید برنامه باربرگ، اینترنت و gps تلفن همراه شما روشن باشد در غیر این صورت پیمایش برای شما محاسبه نخواهد شد.',
  loginTutorial1:
    'اگر تاکنون در سامانه باربرگ ثبت نام نکرده اید، از این قسمت ثبت نام کنید.',
  loginTutorial2:
    'اگر قبلا در سامانه ثبت نام کرده اید، با ورود شماره تلفن همراه و رمز عبوری که برای شما پیامک شده، وارد برنامه شوید.',
  loginTutorial3:
    'اگر رمز عبور خود را فراموش کرده اید، با انتخاب این گزینه و طی نمودن مراحل بعدی، رمز عبور جدید برای شما پیامک خواهد شد.',
  loginTutorial4:
    'رمز عبوری که برای شما پیامک می شود، برای هر بار ورود به سامانه باربرگ مورد نیاز است، آن را نزد خود نگه دارید.',

  update: 'بروز رسانی',
  updateAvailableUnnecessary:
    'نسخه جدیدی از برنامه موجود است. پیشنهاد می شود که از نسخه جدید استفاده نمایید',
  updateAvailableNecessary:
    'این نسخه از برنامه قدیمی شده است. لطفا برای ادامه استفاده از برنامه آن را بروز رسانی نمایید',

  login: 'ورود',
  signUp: 'ثبت نام',
  loginOrSignUp: 'ورود یا ثبت نام جدید',
  password: 'رمز عبور',
  didNotSignUpBefore_SignUpHere:
    'در صورتی که تاکنون ثبت نام نکرده اید از اینجا ثبت نام کنید',
  signUpInSystem: 'ثبت نام در سامانه',
  inCaseOfForgettingPasswordRecoverHere:
    'در صورتی که رمز عبور خود را فراموش کرده اید گزینه زیر را انتخاب کنید',
  forgetPassword: 'فراموشی رمز عبور',
  webServiceAddress: 'آدرس وب سرویس:',
  mobileEmptyError: 'شماره موبایل نمی تواند خالی باشد',
  mobileIsNotValid: 'شماره موبایل معتبر نیست',
  nationalCodeEmptyError: 'کد ملی نمی تواند خالی باشد',
  nationalCodeIsNotValid: 'کد ملی وارد شده معتبر نیست',
  notionalCodeOrCompanyIDIsNotValid: 'شناسه/کدملی معتبر نیست',
  notionalCodeIsNotValid: 'کدملی معتبر نیست',
  companyNationalIdIsNotValid: 'شناسه ملی شرکت معتبر نیست',
  pleaseAcceptTermsOfUse: 'لطفا قوانین و مقررات را تایید نمایید',
  newPasswordWasSent: 'کلمه عبور جدید برای شما ارسال شد',
  retrievePasswordTitle:
    'کد ملی خود را وارد نموده و سپس گزینه\n"دریافت رمز عبور" را انتخاب نمایید.',
  signUpTitle:
    'لطفا تلفن همراه خود را به همراه کد ملی\n (اشخاص حقوقی شناسه ملی)وارد نمایید ',
  termsOfUse: '<p1>قوانین و مقررات</p1><p2>را مطالعه نموده و قبول دارم</p2>',
  nationalCodeOrNationalID: 'کد ملی/شناسه ملی',
  getPassword: 'دریافت رمز عبور',

  regularTransportDoc: 'باربرگ حقیقی',
  creditWallet: 'کیف پول اعتباری',
  viewFuelQuota: 'مشاهده سهمیه سوخت',
  carrying: 'درحال حمل',
  cancelcarrying: 'پایان حمل',
  survey: 'نظر سنجی',

  benzin: 'بنزین',
  deziel: 'دیزل',

  activateTitle: 'ثبت رمز عبور',
  activateCodeEmptyError: 'کد فعال سازی نمی تواند خالی باشد',
  activateCodeIsNotValid: 'کد فعال سازی معتبر نیست',
  activateCodeWasSentAgain: 'رمز عبور مجددا برای شماره ای که وارد کرده اید، ارسال شد',
  remainingTime: 'زمان باقی مانده',
  ifDidNotGetCodeTouchHere: `<p1>اگر رمز عبور را دریافت نکرده اید </p1><p2>اینجا</p2><p3> را انتخاب کنید</p3>`,
  pleaseEnterActivationCodeBelow:
    'لطفا رمز عبوری را که به تلفن همراه شما ارسال شده است، در کادر زیر وارد نمایید',
  submittedMobileNumber: 'تلفن همراه ثبت شده',
  correctInputInfo: 'اصلاح اطلاعات ورودی',

  month1: 'فروردین',
  month2: 'اردیبهشت',
  month3: 'خرداد',
  month4: 'تیر',
  month5: 'مرداد',
  month6: 'شهریور',
  month7: 'مهر',
  month8: 'آبان',
  month9: 'آذر',
  month10: 'دی',
  month11: 'بهمن',
  month12: 'اسفند',

  arvandZone: 'اروند',
  anzaliZone: 'انزلی',
  chabaharZone: 'چابهار',
  qeshmZone: 'قشم',
  kishZone: 'کیش',
  makuZone: 'ماکو',
  arasZone: 'ارس',

  TypeOfload: 'نوع بارگیری',
  tagNumber: 'شماره پلاک',
  tagNumberS: 'شماره پلاک *',
  regularTag: 'پلاک عادی',
  freeZoneTag: 'پلاک منطقه آزاد',
  transportDailyDocFirstScreenTip:
    'لطفا ابتدا پلاک خودرو و تاریخ و منطقه مورد نظر برای فعالیت را وارد نموده، سپس دکمه «ادامه» را انتخاب نمایید.',
  province: 'استان',
  provinceS: 'استان *',
  city: 'شهر',
  cityS: 'شهر *',
  addArea: 'افزودن منطقه',
  provincesList: 'فهرست استان ها',
  citiesList: 'فهرست شهر ها',
  carsList: 'فهرست خودرو ها',
  loaderType: 'نوع بارگیر',
  select: 'انتخاب',
  carNotFound: 'خودرو یافت نشد',

  fullIranTag: 'ایران %1$ ( %2$ %3$ %4$ )',
  dailyTransportDocRegistered: 'سند حمل بار روزانه خودروی "%1$" در تاریخ "%2$" ثبت گردید',
  dailyTransportDocReceipt: 'رسید سند حمل بار روزانه',

  dailyTransportDocIssuanceQuestion: 'آیا از صدور باربرگ روزانه اطمینان دارید؟',
  transportDailyDocSecondScreenTip:
    'برای صدور باربرگ روزانه ابتدا کد ملی راننده را وارد نموده، سپس دکمه «ثبت باربرگ روزانه» را انتخاب کنید. با انتخاب این دکمه هزینه صدور از اعتبار شما کسر خواهد شد',
  driverNationalCodeS: 'کد ملی راننده *',
  driverSelectedSuccessfully: 'راننده با موفقیت انتخاب شد',
  carSelectedSuccessfully: 'خودرو با موفقیت انتخاب شد',
  currency: 'ریال',
  litr: 'لیتر',
  ITServicesFee: 'هزینه خدمات IT',
  amountToBePaidForIssuingTransportDoc: 'مبلغ قابل پرداخت برای صدور سند حمل',
  all: 'همه',

  registerDailyTransportDoc: 'ثبت باربرگ روزانه',

  transportDailyDocWelcomeScreenTip1: `<p1>کاربر محترم\nبرای ثبت باربرگ روزانه</p1>
                  <p2> شماره پلاک و تاریخ </p2>
                  <p3>بازه زمانی مورد نظر خود را وارد کنید.</p3>`,
  transportDailyDocWelcomeScreenTip2: `<p1>برای مشاهده روش تخصیص سوخت بر اساس</p1>
                  <p2> باربرگ روزانه </p2>
                  <p3> اینجا </p3>
                  <p4>لمس نمایید.</p4>`,

  regularTransportDocIssuanceQuestion: 'آیا از صدور باربرگ حقیقی اطمینان دارید؟',
  transportDocFareAndIssue: 'کرایه و صدور سند حمل',
  mobile: 'تلفن همراه',
  docIssue: 'صدور سند',
  iranTagText: 'I.R.\nIRAN',
  areYouSureForDelete: 'آیا برای حذف مطمئن هستید؟',
  save: 'ذخیره',
  senderAndReceiverInfo: 'مشخصات فرستنده و گیرنده',
  selectSender: 'انتخاب فرستنده',
  mobileS: 'تلفن همراه *',
  phone: 'تلفن ثابت',
  nationalCodeOrCompanyID: 'شناسه/کد ملی',
  postalCode: 'کد پستی',
  selectReceiver: 'انتخاب گیرنده',
  receiversList: 'فهرست گیرنده ها',
  sendersList: 'فهرست فرستنده ها',

  creditIsNotEnoughPleaseRechareYourWallet:
    'اعتبار کافی نیست\nلطفا کیف پول خود را شارژ کنید',
  docSavedToDrafts: 'سند در پیش نویس ها ذخیره شد',
  postFare: 'پس کرایه',
  cargoInsuranceFee: 'هزینه بیمه بار',
  saveAsDraft: 'ذخیره به عنوان پیش نویس',
  saveDoc: 'ثبت سند',

  transportDocWithInfoWasIssued:
    'سند حمل بار خودروی "%1$"' +
    ' از مبدأ "%2$"' +
    ' به مقصد "%3$"' +
    ' برای حمل بار "%4$"' +
    ' و تحویل به آقای/خانم "%5$"' +
    ' صادر گردید',
  transportDocReceipt: 'رسید سند حمل بار',
  newTransportDoc: 'باربرگ جدید',

  loadLimitationError: 'حداکثر تا 5 کالا را می توان وارد کرد',
  loadList: 'فهرست کالاها',
  loadListWD: 'فهرست کالاها : %1$',
  loadName: 'نام کالا',
  loadNameS: 'نام کالا *',
  packingS: 'بسته بندی',
  loadWeightS: 'وزن بار *',
  loadWeight: 'وزن بار(تن)',
  ton: 'تن',
  description: 'توضیحات',
  countUnit: 'عدد',
  alreadyHaveItem: 'این مورد قبلا به لیست کالاها اضافه شده است',
  addLoad: 'افزودن کالا',
  editLoad: 'اصلاح کالا',
  loadInsuranceWithUnloadingAndLoading: 'بیمه اختیاری بار با پوشش تخلیه و بارگیری',
  loadInsuranceWithUnloadingAndLoadingTip:
    'درصورت تمایل می توانید پوشش بیمه بارگیری و تخلیه بار را علاوه بر پوشش های موجود با انتخاب گزینه بالا اخذ نمایید.',
  acceptInsuranceCondition: '<p1>شرایط بیمه</p1><p2>را مطالعه کرده و می پذیرم.</p2>',
  approximateValueOfLoadTip:
    'ارزش تقریبی وارد شده بار، مبنای محاسبه حق بیمه بار خواهد بود.',
  loadValueUnit: 'میلیون تومان',
  loadTypeList: 'فهرست نوع بار',
  packingList: 'فهرست بسته بندی ها',

  driversList: 'فهرست راننده ها',
  driverAndCarDetails: 'مشخصات راننده و خودرو',
  nationalCode: 'کد ملی',
  nationalCodeS: 'کد ملی *',
  viewDetails: 'مشاهده مشخصات',
  employmentLicense: 'پروانه اشتغال',
  have: 'دارد',
  doesNotHave: 'ندارد',
  carDetails: 'مشخصات خودرو',
  thirdPartyInsurance: 'بیمه شخص ثالث',
  driver_: 'راننده : ',
  name: 'نام',
  lastName: 'نام خانوادگی',
  noDriverFound: 'راننده ای یافت نشد',

  selectedAddresses: 'آدرس های منتخب',
  loadingAndUnloadingAddress: 'آدرس محل بارگیری و تخلیه',
  loadingAddress: 'آدرس محل بارگیری',
  address: 'آدرس',
  addressS: 'آدرس *',
  unloadingAddress: 'آدرس محل تخلیه بار',

  transportDocWelcomeScreenTip1:
    `<p1>کاربر محترم\n` +
    `برای ثبت باربرگ لطفاً در 4 گام به ترتیب مشخصات</p1>` +
    `<p2> فرستنده و گیرنده ، راننده و خودرو ، کالا و مبدأ و مقصد بار </p2>` +
    `<p3>را ثبت نمایید</p3>`,
  transportDocWelcomeScreenTip2:
    'تکمیل بعضی از موارد اختیاری است و میتوانید آنها را ثبت نکنید',

  contactUsDescription:
    'لطفا برای دریافت پاسخ سوالات خود در خصوص سامانه ی باربرگ، با شماره تلفن زیر تماس حاصل نموده و یا آن را به ایمیل سامانه ارسال نمایید',
  contactPhone: '<p1>تلفن تماس: </p1><p2>021-75492000 (داخلی 3)</p2>',
  contactEMail: '<p1>ایمیل: </p1><p2>info@baarbarg.ir</p2>',
  followUsOnSocialNetworks: 'ما را در رسانه های زیر دنبال کنید:',

  editUserInfo: 'ویرایش اطلاعات کاربر',
  infoWasSavedSuccessfully: 'اطلاعات با موفقیت ذخیره شد',
  shenasnamehID: 'شماره شناسنامه',
  fathersName: 'نام پدر',
  placeOfBirth: 'محل تولد',
  email: 'ایمیل',

  userInfo: 'اطلاعات کاربر',
  transportDocHistory: 'تاریخچه باربرگ',
  dailyTransportDocHistory: 'تاریخچه باربرگ روزانه',
  transportDocsDraft: 'پیش نویس اسناد حمل',
  viewLatestIssuedTransportDoc: 'مشاهده آخرین سند حمل صادر شده',
  viewFinancialTurnover: 'مشاهده صورت حساب مالی',
  increaseFinancialCredit: 'افزایش اعتبار مالی',
  getFuelGuide: 'راهنمای دریافت سهمیه سوخت',
  appGuide: 'راهنمای نرم افزار',
  contactUs: 'ارتباط با ما',

  agApplication: 'نرم افزار',
  agWebSite: 'وب سایت',

  man: 'مرد',
  woman: 'زن',
  active: 'فعال',
  inactive: 'غیر فعال',
  fromDate: 'از تاریخ',
  toDate: 'تا تاریخ',
  getFacture: 'دریافت صورت حساب',

  facture: 'صورت حساب',
  tenLastTurn: 'ده گردش آخر',
  samanGateWay: 'درگاه پرداخت بانک سامان',
  pasargardGateWay: 'درگاه پرداخت بانک پاسارگارد',

  amount_currency: '%1$ ریال',
  pay: 'پرداخت',
  userMobileNo: 'شماره موبایل کاربر',
  increaseCreditAmount: 'مبلغ افزایش اعتبار',
  paymentGateway_Saman: 'درگاه پرداخت بانک سامان',

  issuing: 'صدور',
  share: 'اشتراک گذاری',
  edit: 'ویرایش',
  editAndIssuing: 'ویرایش و صدور',
  printDoc: 'چاپ سند',
  printShippingDoc: 'چاپ سند حمل',
  trackingCode: 'کد رهگیری',
  TimeElapsed: 'زمان سپری شده',
  date: 'تاریخ',
  Shippingdate: 'تاریخ حمل',
  LoadEmptySuccess: 'پایان حمل بار با موفقیت انجام شد',
  timeHour: 'ساعت',
  timeHourShipping: 'ساعت حمل',
  car: 'خودرو',
  sender: 'فرستنده',
  receiver: 'گیرنده',
  cargo: 'بار',
  transportSource: 'مبدأ بارگیری',
  transportDestination: 'مقصد تخلیه',

  downloadingDocFile: 'درحال دانلود نسخه چاپی',
  shareWith: 'اشتراک گذاری با:',
  noAppFoundToShareError: 'برنامه ای برای اشتراک گذاری سند پیدا نشد',
  docFileSavedToStorageMessage: 'سند شما در حافظه گوشی و در پوشه "Baarbarg" ذخیره شد.',
  downloadFileStoragePermissionMessage:
    'برای دانلود و ذخیره سازی فایل چاپی سند، دسترسی به حافظه نیاز است',
  downloadFilePermissionDeniedError:
    'دسترسی به حافظه تایید نشد\nامکان دانلود و ذخیره سازی فایل نسخه چاپی سند وجود ندارد',

  // issuedShippingDocs: 'اسناد حمل صادر شده',
  issuedShippingDocs: 'تاریخچه اسناد حمل',
  draftShippingDocs: 'اسناد حمل پیش نویس',
  regular: 'حقیقی',
  daily: 'روزانه',
  draft: 'پیش نویس',
  sort: 'مرتب سازی:',
  newest: 'جدید ترین',
  oldest: 'قدیمی ترین',
  details: 'جزئیات',
  quotaType: 'نوع سهمیه',
  moreShippingDocs: 'مشاهده اسناد حمل بیشتر',
  moreMessage: 'مشاهده پیام های  بیشتر',
  viewFuelQuotaScreenTip:
    'برای مشاهده سهمیه سوخت، لطفا شماره پلاک، نوع سهمیه، سال و ماه مورد نظر را وارد کرده و سپس دکمه "مشاهده سهمیه سوخت" را انتخاب نمایید.',
  viewFuelQuotaScreenTip2:
    'برای مشاهده سهمیه اعتباری سوخت، لطفا کد ملی، سال و ماه موردنظر را وارد کرده و سپس دکمه «مشاهده سهمیه سوخت» را انتخاب نمایید',

  fuelQuotaInquiryPriceMessage:
    'هزینه مشاهده سوخت %1$ تومان می باشد که این مبلغ\nاز اعتبار شما کسر خواهد شد.',

  yearS: 'سال *',
  year: 'سال',
  monthS: 'ماه *',
  month: 'ماه',
  carTagNotEnteredError: 'شماره پلاک وارد نشده است',
  yearNotSelectedError: 'سال انتخاب نشده است',
  monthNotSelectedError: 'ماه انتخاب نشده است',
  viewFuelQuotaResultTitle: 'نتیجه استعلام سهمیه سوخت شما:',
  viewFuelQuotaResult222:
    'سهمیه سوخت خودرو با پلاک \n' + '   %1$' + '\n' + 'در %2$ ماه %3$ : %4$ لیتر',
  viewFuelQuotaResult:
    '<p1>' +
    'پلاک: %1$' +
    '\n' +
    'تاریخ: %2$ %3$' +
    '</p1>' +
    '<p2>سهمیه سوخت: %1$ لیتر</p2>' +
    '<p3>هزینه استعلام %1$ ریال</p3>',

  benzinViewFuelQuotaResult:
    '<p1>' +
    'شماره ملی: %1$' +
    '\n' +
    'تاریخ: %2$ %3$' +
    '</p1>' +
    '<p2>سهمیه اعتباری: %1$ س</p2>',

  unsavedInfoQuestion: 'اطلاعات ذخیره نشده ای وجود دارد آیا ادامه میدهید؟',
  dateNotEnteredError: 'تاریخ وارد نشده است',
  carNotSelectedError: 'خودرو انتخاب نشده است',
  driverNotSelectedError: 'راننده انتخاب نشده است',
  receiverFullNameEmptyError: 'نام و نام خانوادگی گیرنده نمی تواند خالی باشد',
  receiverMobileEmptyError: 'شماره موبایل  گیرنده نمی تواند خالی باشد',
  receiverMobileNotValidError: 'شماره موبایل گیرنده معتبر نیست',
  receiverPhoneNotValidError: 'تلفن ثابت گیرنده معتبر نیست',
  receiverNotionalCodeOrCompanyIDNotValidError: 'شناسه/کدملی گیرنده معتبر نیست',
  receiverPostalCodeNotValidError: 'کدپستی گیرنده معتبر نیست',
  senderFullNameEmptyError: 'نام و نام خانوادگی فرستنده نمی تواند خالی باشد',
  senderMobileEmptyError: 'شماره موبایل  فرستنده نمی تواند خالی باشد',
  senderMobileNotValidError: 'شماره موبایل فرستنده معتبر نیست',
  senderPhoneNotValidError: 'تلفن ثابت فرستنده معتبر نیست',
  senderNationalCodeOrCompanyIDNotValidError: 'شناسه/کدملی فرستنده معتبر نیست',
  senderPostalCodeNotValidError: 'کدپستی فرستنده معتبر نیست',
  sourceProvinceNotSelectedError: 'استان مبدأ انتخاب نشده است',
  sourceCityNotSelectedError: 'شهر مبدأ انتخاب نشده است',
  sourceAddressNotSelectedError: 'آدرس مبدأ انتخاب نشده است',
  destinationProvinceNotSelectedError: 'استان مقصد انتخاب نشده است',
  destinationCityNotSelectedError: 'شهر مقصد انتخاب نشده است',
  destinationAddressNotSelectedError: 'آدرس مقصد انتخاب نشده است',
  loadValueNotEnteredError: '* ارزش ریالی بار نمی تواند صفر باشد',
  noLoadSelectedErrorWithHelp:
    '* کالایی انتخاب نشده است؛ لطفا در لیست بالا اطلاعات کالا را وارد کرده و سپس دکمه افزودن کالا را انتخاب کنید',
  noLoadSelectedError: 'کالا انتخاب نشده است',
  weightNotEnteredError: 'وزن وارد نشده است',
  packingTypeNotSelectedError: 'نوع بسته بندی انتخاب نشده است',
  boxNumNotEnteredError: 'تعداد بسته وارد نشده است',
  sourceAddressNotEnteredError: 'آدرس مبدأ وارد نشده است',
  sourcePostalCodeNotValidError: 'کد پستی مبدأ معتبر نیست',
  destinationAddressNotEnteredError: 'آدرس مقصد وارد نشده است',
  destinationPostalCodeNotValidError: 'کد پستی مقصد معتبر نیست',
  noDriverFoundForNationalCodeError: 'راننده ای با این کد ملی یافت نشد',
  noLoadFoundError: 'کالایی یافت نشد',

  settings: 'تنظیمات',
  viewProfile: 'مشاهده اطلاعات کاربری',
  logout: 'خروج از حساب',
  userAccount: 'حساب کاربری',
  registeredMobile: 'تلفن همراه ثبت شده',
  messagesAndNotifications: 'پیام ها و اطلاعیه ها',
  receiveNotifications: 'دریافت اطلاعیه',
  receiveMessages: 'دریافت پیامک اطلاع رسانی',
  appVersion: 'نسخه برنامه : ',

  documentHistory: 'تاریخچه اسناد',
  DocumentsIssued: 'اسناد صادر شده',
  transportingDoc: 'اسناد در حال حمل',
  shipping: 'در حال حمل',
  startTransporting: 'شروع حمل',
  search: 'جستجو',
  clear: 'پاک کردن',

  enableLocationMessage:
    'کاربر گرامی، جهت ثبت اطلاعات مسیرو دریافت سهمیه ، حتما دسترسی به موقعیت مکانی را از مسیر زیر در اپ باربرگ فعال کنید. لازم به یادآوری است در صورت عدم فعالسازی، مختصات مسیر ثبت نشده و به تبعه آن سهمیه سوخت در نظر گرفته نخواهد شد',
  locationSettingAddress:
    'Permission > Location > Allow all the time\n مجوز > مکان > همیشه مجاز بودن',
  ///////////////////// GetTrackingNumber //////////////////////////

  activityLicenseTip:
    'برای دریافت شماره پیگیری پروانه فعالیت ناوگان باید شماره پلاک خودرو و کدملی مالک را وارد کرده و دکمه نمایش شماره پیگیری را انتخاب نمایید.',
  ownerNationalCode: 'کدملی مالک',
  ownerNationalCodeOrCompanyID: 'شناسه/کد ملی مالک',
  employmentLicenseTip:
    'برای دریافت شماره پیگیری پروانه اشتغال باید کدملی راننده و شماره گواهینامه را وارد کرده و سپس دکمه نمایش شماره پیگیری را انتخاب نمایید',
  operationLicenseTip:
    'برای دریافت شماره پیگیری پروانه بهره برداری شرکت باید کد ملی مدیرعامل و شناسه ملی شرکت را وارد کرده و دکمه نمایش شماره پیگیری را انتخاب نمایید',
  managingDirectorNationalCode: 'کدملی مدیرعامل',
  trackingNumberForActivityLicenseResult:
    '<p1>نتیجه استعلام شماره پیگیری پروانه فعالیت</p1>' +
    '<p2>پلاک: %1$' +
    '\n' +
    'کدملی مالک: %2$' +
    '</p2>' +
    '<p3>شماره پیگیری:' +
    '\n' +
    '%1$' +
    '</p3>',
  trackingNumberForEmploymentLicenseResult:
    '<p1>نتیجه استعلام شماره پیگیری پروانه اشتغال</p1>' +
    '<p2>کدملی راننده: %1$' +
    '\n' +
    'شماره گواهینامه: %2$' +
    '</p2>' +
    '<p3>شماره پیگیری:' +
    '\n' +
    '%1$' +
    '</p3>',
  trackingNumberForOperationLicenseResult:
    '<p1>نتیجه استعلام شماره پیگیری پروانه بهره برداری</p1>' +
    '<p2>کدملی مدیرعامل: %1$' +
    '\n' +
    'شناسه ملی شرکت: %2$' +
    '</p2>' +
    '<p3>شماره پیگیری:' +
    '\n' +
    '%1$' +
    '</p3>',

  callForSupportTip:
    'درصورت نیاز به راهنمایی، با مرکز پشتیبانی تماس بگیرید. همکاران ما در ساعات اداری آماده پاسخگویی \n به سوالات شما هستند.',
  trackingNumberInquiryPriceMessage:
    'هزینه دریافت شماره پیگیری %1$ تومان می باشد که این مبلغ\nاز اعتبار شما کسر خواهد شد.',

  /********************* صورت وضعیت خطی *********************/
  linearStatusStatement: 'صورت وضعیت خطی',
  linearStatusStatementFirstScreenText:
    'کاربر محترم:\n\n1 - برای هر خودرو در هر روز فعالیت، فقط یک «صورت وضعیت خطی» ثبت نمائید.\n\n2 - در بخش انتخاب مسیر، تمامی مسیرهایی که در طول  روز ممکن است در آن فعالیت کنید، انتخاب نمائید.\n\n3 -  در هر روز فعالیت، پس از صدورصورت وضعیت خطی و دریافت کد رهگیری، از قسمت « درحال سفر »، در آغاز روز و ابتدای اولین سفر، گزینه « شروع سفر» و در پایان روز و انتهای  آخرین سفر، گزینه «پایان سفر» را ثبت کنید.',

  linearStatusStatementSecondScreenHeaderText:
    'لطفا پلاک خودرو و مشخصات مسیر مورد نظر را ثبت نموده و سپس دکمه « ادامه » را انتخاب نمائید',
  routeSpecifications: 'مشخصات مسیر',
  linearStatusStatementThirdScreenHeaderText:
    'برای ثبت صورت وضعیت خطی، کد ملی راننده را وارد کرده و سپس دکمه «ثبت صورت وضعیت خطی» را انتخاب کنید.',
  totlaPrice: 'مجموع هزینه صدور سند',
  submitLinearStatusStatement: 'ثبت صورت وضعیت خطی',
  linearStatusStatementDoc: 'رسید سند صورت وضعیت خطی',
  carPlateNum: 'شماره پلاک خودرو',
  /********************* صورت وضعیت دربستی *********************/
  closedStatusForm: 'صورت وضعیت دربستی',
  closedStatusFormFirstScreenText:
    'کاربر محترم : \nبه نکات زیر توجه فرمائید:\n\n1 – باید برای هرسفر یک «صورت وضعیت دربستی» ثبت کنید.\n\n2 -  پس از صدور صورت وضعیت دربستی و دریافت کد رهگیری، از بخش «درحال سفر»، درابتدای مسیر، گزینه « شروع سفر» و در انتهای مسیر، گزینه «پایان سفر» را ثبت نمائید.»\n',
  origin: 'مبدأ',

  eachPassengerRouteFare: 'مبلغ کرایه هر مسافر',
  passengerNum: 'تعداد مسافر',
  darbastiRent: 'مبلغ کرایه دربستی',
  closedStatusStatementDoc: 'رسید سند صورت وضعیت دربستی',
  traveling: 'در حال سفر',
  startTraviling: 'شروع سفر',
  openYourGPS: 'لطفا GPS و اینترنت تلفن همراه خود را روشن نمایید ',

  /********************* صورت وضعیت دربستی *********************/
  fleetManagment: 'مدیریت ناوگان',
  company: 'شرکت',
  owner: 'مالک',
  withoutRole: 'بدون نقش',
  cars: 'خودروها',
  drivers: 'رانندگان',
  companys: 'شرکت ها',
  addCarTitle: 'لطفا برای افزودن خودرو، پلاک خودرو وشماره ملی راننده را وارد کنید.',
  add: 'افزودن',
  // fleetManagment: '',
  /*************************************************************/
  //paymentCallBackURL: "baarbarg://PaymentResult?result=1",
  paymentCallBackURL: 'app://baarbarg.ir/AppPaymentResult',

  webServiceConnectionError:
    'ارتباط با سرور برقرار نیست.\nلطفا اینترنت گوشی خود را چک کرده و در صورت برقراری اینترنت چند دقیقه دیگر مجددا تلاش نمایید',
  webServiceError: 'خطایی در ارتباط با سرور رخ داده است.\nلطفا مجددا تلاش نمایید',
  errorOccurred: 'خطایی رخ داده است.\nلطفا مجددا تلاش نمایید',
  webBrowserAppNotFound:
    'برنامه مرورگر پیدا نشد!\nبرای انجام پرداخت باید دستگاه شما مرورگر اینترنت داشته باشد.',
  connectionErrorAndTip:
    'خطایی در ارتباط رخ داده است\nلطفا اینترنت گوشی خود را چک کنید و درصورت استفاده از پروکسی، آن را قطع نمایید',
  selectedSuccessfully: 'با موفقیت انتخاب شد',
};

export default strings;
