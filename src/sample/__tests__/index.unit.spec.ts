import { resistorColor } from '../assembly';

describe('Resistor Colors', () => {
  it('Brown and black', () => {
    expect(resistorColor(['brown', 'black'])).toStrictEqual(10)
  })

  it('Blue and grey', () => {
    expect(resistorColor(['blue', 'grey'])).toStrictEqual(68)
  })

  it('Yellow and violet', () => {
    expect(resistorColor(['yellow', 'violet'])).toStrictEqual(47)
  })

  it('Orange and orange', () => {
    expect(resistorColor(['orange', 'orange'])).toStrictEqual(33)
  })

  it('Ignore additional colors', () => {
    expect(resistorColor(['green', 'brown', 'orange'])).toStrictEqual(51)
  })
})