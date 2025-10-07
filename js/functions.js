function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);

const isPalindrome = (str) => {
  const cleanStr = str.toLowerCase().replace(' ', '');
  return cleanStr === cleanStr.split('').reverse().join('');
};

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
