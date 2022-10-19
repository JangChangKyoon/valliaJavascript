const age = parseInt(prompt('How old are you?'));
// ParseInt - Str to Int
// prompt - 입력값 창 띄우기 (str)
// isNaN - boolean(숫자가 아니야?)

if (isNaN(age) || age < 0) {
  console.log('Please write a real positive number');
} else if (age < 18) {
  console.log('You are too young.');
} else if (age >= 18 && age) {
  console.log('You can drink.');
} else if (age > 50 && age) {
  console.log('You should exercise');
} else if (age === 100) {
  console.log('wow you are wise');
} else if (age > 80) {
  console.log('You can do whatever you want.');
}
