/**
 * The puzzle input has been "amended" by a young Elf, consequently the Elves are having
 * trouble reading the values on the document
 * 
 * The new input file consists of lines of text.
 * Each line originally contains a specific "calibration value" that the Elves need to recover 
 * On each line, the calibration value can be found by "combining the first digit" and the last digit" (in that that order)
 * To form a single "two-digit number"
 * 
 * ! For instance,
 * 1abc2
 * pqr3stu8vwx
 * a1b2c3d4e5f
 * treb7uchet
 * 
 * ! In this example, the calibration values of these four lines are 12, 38, 15, and 77. 
 * ! Adding these together produces 142.
 * ? Consider your entire calibration document. What is the sum of all of the calibration values?
 */

/**
 * Problem Approach:
 * 
 * Initialize an empty sum container to hold the two digit number
 * 
 * Open the input file and read all lines 
 * For each lin, check if it contains at least one digit
 * Find the first and last digit in the line
 * Combine the first and last digit to form a two digit number 
 * If the line of text consists of a single digit, that digit should be the first and second, handling duplicates
 * Add the two digit number to the container
 * 
 * Sum all two digits numbers by iterating and sum all the values
 */
const fs = require('fs');
const path = require('path');

let calibrationValues = [];

const inputFile = path.join(__dirname, 'input.txt');
const fileContent = fs.readFileSync(inputFile, 'utf8');

const lines = fileContent.split("\n");
lines.forEach(line => {
    const digits = line.match(/\d/g);            // Find all digits in line
    if(digits){
        const firstDigit = digits[0];
        const lastDigit = digits.length > 1 ? digits[digits.length - 1] : firstDigit;   // Handling single digit case 
        const twoDigitNum = parseInt(firstDigit + lastDigit);
        calibrationValues.push(twoDigitNum);
    }
});

const totalSum = calibrationValues.reduce((sum, value) => sum + value, 0);
console.log(`The sum of all calibration values is: ${totalSum}`);