import { Greeter } from "../index";

test('My Greeter', () => {
    expect(Greeter('Asif')).toBe('Hello Asif')
})