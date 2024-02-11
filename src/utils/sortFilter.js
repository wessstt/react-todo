const sortByTitle = (array, todoList, isReversed = false) => {
  const sortList = Array.from(array);
  if (todoList) {
    return sortList.sort((objectA, objectB) => {
      const titleA = objectA[todoList]?.toUpperCase();
      const titleB = objectB[todoList]?.toUpperCase();

      if (titleA === titleB) return 0;

      if (titleA > titleB) return isReversed ? -1 : 1;

      return isReversed ? 1 : -1;
    });
  }
};

export default sortByTitle;
