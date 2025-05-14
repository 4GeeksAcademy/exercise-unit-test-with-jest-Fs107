const { sum, fromDollarToYen, fromYenToPound, fromEuroToDollar } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});

test("One dollar should be (1 / 1.07) * 156.5, means 146.26 yens",function(){   
    //utilizando xxx funcion deberia dar yyy
    const dollars = fromDollarToYen(10);
    const result = (10 / 1.07) * 156.5;
    expect(dollars).toBe(result);
});

test("A hundred Yen should be (1/156.5) * 0.87, means 0,55 pounds", function(){
    const yens = fromYenToPound(100);
    const expected = (100 / 156.5) * 0.87;
    expect(yens).toBe(expected);
})