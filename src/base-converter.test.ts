import { BaseConverter } from "./base-converter";

let converter: BaseConverter;
beforeAll(() => {
  converter = new BaseConverter();
});

describe("convertFromBaseToDecimal", () => {
  describe("when give a number less then 10", () => {
    test("should convert in decimals", () => {
      expect(converter.convertFromBaseToDecimal("1101", 2)).toEqual(13);
      expect(converter.convertFromBaseToDecimal("11011", 2)).toEqual(27);
      expect(converter.convertFromBaseToDecimal("1210", 3)).toEqual(48);
    });
  });

  describe("when give a number greater then 10", () => {
    test("should convert in decimals", () => {
      expect(converter.convertFromBaseToDecimal("1A1", 11)).toEqual(232);
      expect(converter.convertFromBaseToDecimal("1B1", 14)).toEqual(351);
      expect(converter.convertFromBaseToDecimal("ABC", 16)).toEqual(2748);
    });
  });
});
