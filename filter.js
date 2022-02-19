function getShortMessages(messages) {
    if (! Array.isArray(messages)){
        throw new Error('Not a valid input type for messages.')
    };
    
  return  messages.filter(data=>data.message.length<50);
  
  }

  module.exports = getShortMessages
