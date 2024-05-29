// Unit test DIY

function testDIY(value) {
  return {
    toBe: exp => {
      if (value === exp) {
        console.log(`Success. Value is ${value}`)
      } else {
        console.error(`Value is ${value}, but expected ${exp}`)
      }
    }
  }
}

const sum = (a, b) => a + b;
const pow = (a, b) => a * b;

const nativeNull = () => null;

testDIY(sum(41, 1)).toBe(42);
testDIY(pow(2, 5)).toBe(32);
testDIY(pow(2, 2)).toBe(4);
