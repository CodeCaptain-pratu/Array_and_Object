const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// A) Sort the array and find the min and max age
ages.sort((a,b)=>a-b);
console.log("sorted ages array : ",ages);

let minAge = ages[0];
let maxAge = ages[ages.length-1];
console.log("Minimum age is ",minAge);
console.log("Maximum age is ",maxAge);

// B) Find the median age(one middle item or two middle items divided by two)
let median;
let mid=Math.floor(ages.length/2);
if(ages.length%2===0){
    median=(ages[mid-1]+ages[mid])/2;
}
else{
    median=ages[mid];
}
console.log("Median age is ",median);

// C) Find the average age(all items divided by number of items)
let sumAge=ages.reduce((acc,age)=>acc+age,0);
let averageAge=Math.floor(sumAge/ages.length);
console.log("Average age is ",averageAge);

// D) Find the range of the ages(max minus min).
let rangeOfAge = maxAge - minAge;
console.log("Range of the Age is ",rangeOfAge);

// E) Compare the value of (min - average) and (max - average), use abs() method
let minAgeDifference = Math.abs(minAge - averageAge);
let maxAgeDifference = Math.abs(maxAge - averageAge);
console.log("Minimum average age is ",minAgeDifference);
console.log("Maximum average age is ",maxAgeDifference);
