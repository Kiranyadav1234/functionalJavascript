const doubleAll=require('../map');
describe('doubleAll function',()=>{
    it('should return double array if correct input is given',()=>{
        const array=doubleAll([0,1,2,3,4]);
        expect(array).toStrictEqual([0,2,4,6,8]);

    });
    it('should return double array if empty array is given',()=>{
        const array=doubleAll([]);
        expect(array).toStrictEqual([]);

    });
    it('should give error if string is passed instead of array',()=>{
        
        try{
            const array=doubleAll('hi');
        }catch(err){
            expect(err.message).toBe('Invalid Input');

        }
       
        

    });
    it('should give error if floating number is passed instead of array',()=>{
        try{
            const array=doubleAll(2.4);
        }catch(err){
            expect(err.message).toBe('Invalid Input');

        }

    });
    it('should give error if object is passed instead of array',()=>{
        try{
            const array=doubleAll({name:"kiran",class:"b-tech"});
        }catch(err){
            expect(err.message).toBe('Invalid Input');

        }
    });
    it('should give error if boolean is passed instead of array',()=>{
        try{
            const array=doubleAll(true);
        }catch(err){
            expect(err.message).toBe('Invalid Input');

        }

    });
})