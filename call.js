function duckCount(){
    //console.log(arguments);
    return Array.prototype.slice.call(arguments).filter((element)=>{
        if(typeof(element)!=='object')
        {
            throw new Error('invalid input');
        }
       return  Object.prototype.hasOwnProperty.call(element, 'quack');

    }).length;
   
   
    
    //console.log(array);
}
module.exports=duckCount;
