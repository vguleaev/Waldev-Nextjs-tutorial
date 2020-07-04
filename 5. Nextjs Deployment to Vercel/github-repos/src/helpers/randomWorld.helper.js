function getRandomWord() {
  const words = ['mario', 'unicorn', 'pizza', 'penguin'];
  return words[Math.floor(Math.random() * words.length)];
}

export { getRandomWord };
