
let IsPrime = (N) => {
    let i = 2;
    let flag = true;
    if (N == 1 || N == 0)
        flag = false;
    else {
        while (i <= Math.sqrt(N)) {
            if (N % i == 0) {
                flag = false;
                break;
            }
            i++;
        }
    }
    return flag;
}

function returnPrime() {
    let a = parseInt(document.getElementById('first-number').value);
    let b = parseInt(document.getElementById('second-number').value);
    if (a > b || a == b || a < 0) {
        let Notify = document.createElement('p');
        Notify.textContent = "Error!!! a < b and a > 0"
        document.getElementById('content').appendChild(Notify);
        Notify.style.color = "red";
        setTimeout(() => {
            document.getElementById('content').removeChild(Notify);
        }, 1000);
    }
    else {
        let result = [];
        let sum = 0;
        for (let i = a; i <= b; i++) {
            if (IsPrime(i)) {
                result.push(i);
                sum += i;
            }
        }
        let Notify = document.createElement('p');
        Notify.textContent = "The prime numbers between a and b are: " + result;
        document.getElementById('content').appendChild(Notify);
        let sumOutput = document.createElement('p');
        sumOutput.textContent = "Sum prime: " + sum;
        document.getElementById('content').appendChild(sumOutput);
    }

}
 

function printTriangle() {
    let height = document.getElementById('height-triangle').value;
    let br = document.createElement('br');
    height = parseInt(height);
    for (i = 1; i <= height; i++) {
        let line = [];
        let makeLine = document.createElement('p');
        for (j = 1; j <= i; j++) {
            line += "* ";
            makeLine.textContent = line;
            document.getElementById('content-result').appendChild(makeLine);
        }
        document.getElementById('content-result').appendChild(br);
    }


}


