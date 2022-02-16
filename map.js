function doubleAll(numbers) {
    if(!Array.isArray(numbers))
    {
        throw new Error('Invalid Input');
    }
    let result=[];
    numbers.map((number)=>{
        result.push(number*2);

    })
    return result;
  }

  module.exports = doubleAll