import { collectNumbers } from "./collectNumbers.js";
import { numberValidation } from "./validation.js";
import { drawDigits } from "./drawDigits.js";
import { checkHits } from "./checkHits.js";

function returnResult(number) {
  const resultNodeText = document.querySelector("#result");

  const drawnDigits = drawDigits(number);
  const hits = checkHits(numberValidation(collectNumbers()), drawnDigits);
  return (resultNodeText.innerHTML = `Wylosowano: ${drawnDigits}. </br> Twoje liczby: ${numberValidation(
    collectNumbers()
  )}. </br> Trafiono liczby: ${
    hits.length ? hits : "Brak trafień"
  }. </br> Wygrywasz: ${
    hits.length === 0 || hits.length === 1 || hits.length === 2
      ? "0zł"
      : hits.length === 3
      ? "20zł"
      : hits.length === 4
      ? "100zł"
      : hits.length === 5
      ? "3500zł"
      : "Rozbiłeś bank!"
  }.`);
}

export function handleGame() {
  const resultNodeText = document.querySelector("#result");

  if (numberValidation(collectNumbers()).length === 6) {
    return returnResult(6);
  }

  if (numberValidation(collectNumbers()).length === 5) {
    return returnResult(5);
  }

  return (resultNodeText.innerHTML = `Nie gramy! Sprawdź czy podano odpowiednią ilość niepowtarzających się numerów oraz, że są ze wskazanego przedziału.`);
}
