/*
1. create array name (favSinger) store 3 favorite singers
2. log the first singer in that array
3. create array name (favNumber) and store 4 fav Numbers
4. create array name (mixedArr) store ['string', ['otherArray], 123, true, null]
5. now access each item in that array by using [] notation
*/

const favSinger = ['Taylor Swift', 'Adele', 'Beyonce'];
console.log(favSinger[0]);

const favNumber = [1, 2, 3, 4];
console.log(favNumber[0]);

const mixedArr = ['string', ['otherArray'], 123, true, null];
console.log(mixedArr[0]);
console.log(mixedArr[1][0]);
console.log(mixedArr[2]);

const multiArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(multiArr);