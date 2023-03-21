import { lettersToNumbersMap } from "./constants/letters-to-numbers-map";

export class BaseConverter {
  convertFromBaseToDecimal(numberToConvert: string, baseFrom: number): number {
    const digitsArray = Array.from(numberToConvert);
    let position = digitsArray.length - 1;
    let result = 0;
    for (const digit of digitsArray) {
      result += Math.pow(baseFrom, position) * this.getDigitsAsNumber(digit);
      position--;
    }
    return result;
  }

  private getDigitsAsNumber(digit: string) {
    let result = parseInt(digit);
    if (isNaN(result)) {
      result = lettersToNumbersMap[digit];
    }
    return result;
  }
}
