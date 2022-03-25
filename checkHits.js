export function checkHits(userDigits, drawnDigits) {
  const temp = [];

  userDigits.forEach((item) => {
    if (drawnDigits.includes(item)) {
      temp.push(item);
    }
  });

  return temp.sort();
}
