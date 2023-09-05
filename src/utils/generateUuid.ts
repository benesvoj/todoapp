/*
 * Inspired by npm package react-uuid
 * https://github.com/RickBr0wn/react-uuid
 */

export const generateUuid = () => {
  const hashTable = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const uuid = []

  for (let i = 0; i < 35; i++) {
    if (i === 7 || i === 12 || i === 17 || i === 22) {
      uuid[i] = '-'
    } else {
      uuid[i] = hashTable[Math.floor(Math.random() * hashTable.length - 1)]
    }
  }
  return uuid.join('')
}
