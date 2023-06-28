function sortCharactersByHealth(arr) {
  return arr.sort((x, y) => (x.health < y.health ? 1 : -1));
}

module.exports = {
  sortCharactersByHealth,
};
