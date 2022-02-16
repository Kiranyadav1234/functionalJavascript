const printHello=require('../printHello');
describe('printHello function',()=>{
    it('should print given input in uppercase',()=>{
        const word=printHello("kiran");
        expect(word).toBe('KIRAN');
    });
    it('should give invalid input error if number is passed as input',()=>{
        try{
            printHello(1234);
          }
          catch(err){
          expect(err.message).toBe('invalid input');
          }
    });
    it('should give invalid input error if array is passed as input',()=>{
        try{
            printHello(['k','i']);
          }
          catch(err){
          expect(err.message).toBe('invalid input');
          }
    });
    it('should give invalid input error if object is passed as input',()=>{
        try{
            printHello({firstName:'kiran',lastName:'yadav'});
          }
          catch(err){
          expect(err.message).toBe('invalid input');
          }
    });
});