const countWords=require('../reduce');
describe('countWords function',()=>{
    it('should print the number of times each string occoured in array',()=>{
        const messages=countWords( ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']);
        expect(messages).toStrictEqual({Apple: 2,Banana: 1,Durian: 3})
    });
    it('should give invalid input if number is passed as input',()=>{
        try{
            const messages=countWords(123);

        }catch(err)
        {
            expect(err.message).toBe('invalid input');
        }
    });
    it('should give invalid input if string is passed as input',()=>{
        try{
            const messages=countWords('kiran');

        }catch(err)
        {
            expect(err.message).toBe('invalid input');
        }
    });
    it('should give invalid input if object is passed as input',()=>{
        try{
            const messages=countWords({name:'kiran'});

        }catch(err)
        {
            expect(err.message).toBe('invalid input');
        }
    });
})