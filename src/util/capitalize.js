const capitalize = (word) => {
  if (word.length === 0) {
    return word;
  }

  const first = word.slice(0, 1);
  const rest = word.slice(1);

  return `${first.toLocaleUpperCase()}${rest}`;
};

export { capitalize };
