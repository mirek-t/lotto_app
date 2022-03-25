export function drawDigits(number) {
  const temp = [];

  while (temp.length < number) {
    const digit = Math.round(Math.random() * (number === 6 ? 48 : 41) + 1);
    if (!temp.includes(digit)) {
      temp.push(digit);
    }
  }

  return temp;
}
