export function numberValidation(arr) {
  const arrProcessed = Array.from(
    new Set(arr.filter((e) => Number.isInteger(e)))
  );

  if (arrProcessed.length === 6) {
    return arrProcessed.every((e) => e >= 1 && e <= 49) ? arrProcessed : [];
  }

  if (arrProcessed.length === 5) {
    return arrProcessed.every((e) => e >= 1 && e <= 42) ? arrProcessed : [];
  }

  return [];
}
