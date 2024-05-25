// Unit test DIY

function testDIY(value) {
  return {
    toBe: exp => {
      if (value === exp) {
        console.log('Success')
      } else {
        console.error(`Value is ${value}, but expected ${exp}`)
      }
    }
  }
}

const sum = (a, b) => a + b;

const nativeNull = () => null;

testDIY(sum(41, 1)).toBe(42)