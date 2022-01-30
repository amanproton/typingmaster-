let correct = 0;
let wrong = 0;
let wordsPerMinute = 0;
function checkData(id , data , second) 
{
    let userInput = (document.getElementById(id).value).split(' ');
    let computerInput = (document.getElementById(data).innerText).split(' ');

    let length = (userInput.length>computerInput.length) ? computerInput.length : userInput.length;

    for(let index=0 ; index<length ; index++)
    {
        if(userInput[index] === computerInput[index])
        {
            correct += 1;
        }
        else
        {
            wrong += 1;
        }
    }

    if(parseInt(second/60) === 0)
        wordsPerMinute = userInput.length;
    else
        wordsPerMinute = parseInt(userInput.length/  parseInt(second/60));
    

    return {correct , wrong , wordsPerMinute};
}

export default checkData;