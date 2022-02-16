function countWords(inputWords) {
    if( !Array.isArray(inputWords))
    {
        throw new Error('invalid input');
    }
    return inputWords.reduce((countOfWord,word)=>{
        countOfWord[word]=++countOfWord[word]||1;
        return countOfWord;
    },{});
  
    
  }
  
  

  module.exports = countWords;
  
  
