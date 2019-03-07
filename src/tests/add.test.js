const add = (a,b) => a+b;
const generateGreeting = (name = "Anonymous") => `Hi ${name}!`;

test('should add two numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test('say hi', () => {
    const who = generateGreeting("Sababa");
    expect(who).toBe("Hi Sababa!");
});

test('say hi no name', () => {
    const who = generateGreeting();
    expect(who).toBe("Hi Anonymous!");
});