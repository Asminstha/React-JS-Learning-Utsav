import React from 'react'
 
const Result = ({ term, secretNum }) => {
    let result;
    if (term) {
        if (secretNum > term) {
            result = 'Lower,Try another High Number!!!'
        }
        else if (secretNum < term) {
            result = 'Higher,Try another Low Number!!!'
        }
        else if (secretNum == term) {
            result = 'Congratulations ! You guessed Correct Number'
        }
        else {
            result = "Enter Valid Input"
        }
    }
    return <h3>You Guessed: {result}</h3>
}
 
export default Result