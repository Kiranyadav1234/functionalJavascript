const countWords=(inputWords)=>{
    if( !Array.isArray(inputWords))
    {
        throw new Error('invalid input');
    }
    return inputWords.reduce((countOfWord,word)=>{
        if(word in countOfWord)
        {
            countOfWord[word]++;
        }
        else{
            countOfWord[word]=1;
        }
        return countOfWord;
    },{});
  
    
  }
  
  

  module.exports = countWords;
  
  
