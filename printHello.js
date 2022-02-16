function upperCaser(input) {
  if( typeof(input)!== 'string')
  {
    throw new Error('invalid input');
  }
    return input.toUpperCase();
  }

  module.exports = upperCaser;
