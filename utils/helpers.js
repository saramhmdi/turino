const convertToPersianNumbers = (text) => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return text.replace(/\d/g, (digit) => persianDigits[digit]);
};

export { convertToPersianNumbers };
