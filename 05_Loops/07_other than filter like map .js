const mynum = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// const newnums = mynum.map((num) =>num +10)

const newnums = mynum
        .map( (num) => num * 10)
        .map( (num) => num + 1)
        .filter((num) => num >= 35)  // True  false game

console.log(newnums);

