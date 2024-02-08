const addValue = (digit) => {
    if (result.innerHTML == 0) {
        result.innerHTML = ''
        result.innerHTML += digit;
    } else {
        result.innerHTML += digit;
    }
}

const clearAll = () => {
    result.innerHTML = '';
    result.innerHTML = 0;
}
const back = () => {
    result.innerHTML = result.innerHTML.slice(0, -1)
    if (result.innerHTML == '') {
        result.innerHTML = 0;
    }
}

const answer = () => {
    
    let ans = eval(result.innerHTML);
    result.innerHTML = ans;
}