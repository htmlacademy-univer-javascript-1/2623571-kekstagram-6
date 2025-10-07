function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

checkStringLength('проверяемая строка', 20);

const isPalindrome = (str) => {
  const cleanStr = str.toLowerCase().replace(' ', '');
  return cleanStr === cleanStr.split('').reverse().join('');
};

isPalindrome('топот');
