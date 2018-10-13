const key = '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';
const sgMail = require('@sendgrid/mail');

export const sendEmail = (toAddress, matchedUser) => {
  console.log('sending')
  sgMail.setApiKey(key);
  const msg = {
    to: toAddress,
    from: 'samwellander@gmail.com',
    subject: 'You have got a match!',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg);
  console.log('sent')
}


export const isMatch = (bookObj, bookArray) => {
  const title = bookObj.title.toLowerCase();
  const author = bookObj.author.toLowerCase();

  console.log('bookObj: ', bookObj);

  console.log('bookArray: ', bookArray);
  for (let i = 0; i < bookArray.length; i++) {
    if (
      title === bookArray[i].title.toLowerCase() &&
      author === bookArray[i].author.toLowerCase()
    ) {
      return true;
    }
  }
  return false;
};
