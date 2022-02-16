const getShortMessages = require('../filter');
const message=require('../filter');
describe('getShortMessages function',()=>{
    it('should print the array of message if correct input is given',()=>{
        const messages=getShortMessages([ {
            message: 'Esse id amet quis eu esse aut' 
          },
          {message:'hi im kiran yadav ,how r u'},
          {message:'Tempor quis esse consequat sunt ea eiusmod.'}]);
          expect(messages).toStrictEqual(['Esse id amet quis eu esse aut','hi im kiran yadav ,how r u','Tempor quis esse consequat sunt ea eiusmod.'])
    });
    it('should give error if empty array is given as input',()=>{
        try{
            const messages=getShortMessages([]);
        }
        catch(err)
        {
            expect(err.message).toBe('Invalid Input');
        }
        
        
    });
    it('should throw invalid input when string is given as input', () => {
        try{
          getShortMessages('Hello!');
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for messages.');
        }
      });
      it('should throw invalid input when object is given as input', () => {
        try{
          getShortMessages({name:"kiran"});
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for messages.');
        }
      });
  
  
        
        
    
})