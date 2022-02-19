function doubleAll(numbers) {
    if(!Array.isArray(numbers))
    {
        throw new Error('Invalid Input');
    }
    
    const doubleNumber=numbers.map(number=>number*2);
    return doubleNumber;

    }
    
  

  module.exports = doubleAll