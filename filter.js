function getShortMessages(messages) {
    if (! Array.isArray(messages)){
        throw new Error('Not a valid input type for messages.')
    };
    const messageBox=[];
   const quotes=messages.filter((data)=>{
      
       if(data.message.length<50)
       {
           messageBox.push(data.message);
       }
   });
   return messageBox;
  }

  module.exports = getShortMessages
