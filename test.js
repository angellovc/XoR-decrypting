function XOR(a, b) {
  return a ^ b;
}

const validateString = (str) => {
  const pattern = /^[a-zA-Z0-9\s.,@\-_\/]+$/;
  return pattern.test(str);
}

const decrypt = (message, keys) => {
  const characters = [];
  for (let i = 0; i < message.length; i++) {
    characters.push(XOR(message[i], keys[i%4]));
  }
  return characters.map(num => String.fromCharCode(num)).join('');
}


function bruteForceDecription(possibleKeys) {
  let combinations = [];

  for (let i = 0; i < possibleKeys.length; i++) {
    for (let j = 0; j < possibleKeys.length; j++) {
      for (let k = 0; k < possibleKeys.length; k++) {
        for (let l = 0; l < possibleKeys.length; l++) {
          const decryptedMessage = decrypt(message, [possibleKeys[i], possibleKeys[j], possibleKeys[k], possibleKeys[l]]);
          if (validateString(decryptedMessage)) {
            return decryptedMessage;
          }
        }
      }
    }
  }

  return combinations;
}

const message = [39, 19, 15, 28, 2, 31, 7, 20, 5, 19, 16, 85, 32, 24, 4, 16, 13, 26, 12, 85, 55, 31, 15, 25, 4, 17, 2, 6, 65, 53, 22, 20, 19, 2, 2, 6, 77, 86, 11, 20, 18, 86, 15, 26, 6, 4, 2, 17, 14, 86, 7, 16, 18, 21, 10, 19, 19, 23, 17, 85, 4, 26, 67, 24, 4, 24, 16, 20, 11, 19, 77, 85, 65, 55, 11, 26, 19, 23, 79, 85, 17, 23, 17, 20, 65, 7, 22, 16, 65, 63, 13, 6, 8, 0, 6, 85, 19, 19, 0, 26, 15, 25, 25, 22, 0, 86, 23, 0, 65, 26, 12, 18, 19, 25, 79, 85, 18, 3, 1, 16, 65, 19, 15, 85, 2, 25, 7, 16, 65, 21, 12, 27, 65, 19, 15, 85, 16, 3, 6, 85, 19, 19, 16, 26, 13, 0, 10, 6, 21, 19, 67, 16, 18, 2, 6, 85, 4, 28, 6, 7, 2, 31, 0, 28, 14, 86, 6, 27, 65, 49, 10, 1, 41, 3, 1, 90, 38, 31, 23, 57, 0, 20, 67, 12, 65, 21, 12, 24, 17, 23, 17, 1, 4, 86, 6, 25, 65, 19, 13, 25, 0, 21, 6, 85, 0, 86, 16, 26, 17, 25, 17, 1, 4, 54, 10, 27, 18, 31, 21, 16, 79, 21, 15, 91]
const possibleKeys = [32, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 92, 95, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];
const decryptedMessage = bruteForceDecription(possibleKeys);
console.log(decryptedMessage)