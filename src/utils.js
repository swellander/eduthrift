export const isMatch = (bookObj, bookArray) => {
  const title = bookObj.title.toLowerCase();
  const author = bookObj.title.toLowerCase();

  for (let i = 0; i < bookArray.length; i++) {
    if (
      title === bookArray[i].toLowerCase() &&
      author === bookArray[i].toLowerCase()
    ) {
      return true;
    }
  }
  return false;
};
