import { sortCharactersByHealth } from '../game';

test('should sort the array', () => {
  const sourceArray = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const orderedArray = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const resultArray = sortCharactersByHealth(sourceArray);
  expect(resultArray).toEqual(orderedArray);
});
