export function collectNumbers() {
  const userDigits = document.querySelectorAll(".user_digit");
  const digits = [...userDigits].map((item) => parseInt(item.value));
  return digits;
}
