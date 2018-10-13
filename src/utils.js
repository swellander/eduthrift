export const isMatch = (bookObj, bookArray) => {
  const title = bookObj.title.toLowerCase();
  const author = bookObj.author.toLowerCase();

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
