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

checkStringLength('Лёша на полке клопа нашёл ');


function isMeetingWithinWorkday(workStart, workEnd, meetingStart, meetingDuration) {
  // Функция для преобразования времени в минуты
  function timeToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  }

  const workStartMinutes = timeToMinutes(workStart);
  const workEndMinutes = timeToMinutes(workEnd);
  const meetingStartMinutes = timeToMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  return meetingStartMinutes >= workStartMinutes && meetingEndMinutes <= workEndMinutes;
}

isMeetingWithinWorkday('08:00', '17:30', '14:00', 90);
isMeetingWithinWorkday('8:0', '10:0', '8:0', 120);
isMeetingWithinWorkday('08:00', '14:30', '14:00', 90);
isMeetingWithinWorkday('14:00', '17:30', '08:0', 90);
isMeetingWithinWorkday('8:00', '17:30', '08:00', 900);
