const inputSell = document.querySelector('.calculator.first input');
const inputBuy = document.querySelector('.calculator.last input');
const rateDisplay = document.querySelector('.calculator.last .rate');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const sellButtons = document.querySelectorAll('.calculator.first .currencies button');
const buyButtons = document.querySelectorAll('.calculator.last .currencies button');
const cry = document.querySelectorAll('.cry')
const cry1 = document.querySelectorAll('.cry1')
let selectedSellCurrency = 'RUB';
let selectedBuyCurrency = 'USD';
let a = document.getElementById('a');
let b = document.getElementById('b')
let c = document.getElementById('c');
let d = document.getElementById('d');
let aa = document.getElementById('aa');
let bb = document.getElementById('bb');
let cc = document.getElementById('cc');
let dd = document.getElementById('dd');
let p1 = document.querySelector('.inputone')
let p2 = document.querySelector('.inputwo')

let apiKey = 'vfDw6FOf73B4ThBgqcJiNAVvQNqs0tvo';
let apiUrl = 'https://api.currencybeacon.com/v1/convert';

b.addEventListener('click', function(){
    a.style.backgroundColor = 'white'
    a.style.color = 'grey'
    b.style.backgroundColor = '#833AE0'
    b.style.color = 'white'
    c.style.backgroundColor = 'white'
    c.style.color = 'grey'
    d.style.backgroundColor = 'white'
    d.style.color = 'grey'
})
a.addEventListener('click', function(){
    b.style.backgroundColor = 'white'
    b.style.color = 'grey'
    a.style.backgroundColor = '#833AE0'
    a.style.color = 'white'
    c.style.backgroundColor = 'white'
    c.style.color = 'grey'
    d.style.backgroundColor = 'white'
    d.style.color = 'grey'
})
c.addEventListener('click', function(){
    a.style.backgroundColor = 'white'
    a.style.color = 'grey'
    c.style.backgroundColor = '#833AE0'
    c.style.color = 'white'
    b.style.backgroundColor = 'white'
    b.style.color = 'grey'
    d.style.backgroundColor = 'white'
    d.style.color = 'grey'
})
d.addEventListener('click', function(){
    a.style.backgroundColor = 'white'
    a.style.color = 'grey'
    d.style.backgroundColor = '#833AE0'
    d.style.color = 'white'
    c.style.backgroundColor = 'white'
    c.style.color = 'grey'
    b.style.backgroundColor = 'white'
    b.style.color = 'grey'
})
aa.addEventListener('click', function(){
    bb.style.backgroundColor = 'white'
    bb.style.color = 'grey'
    aa.style.backgroundColor = '#833AE0'
    aa.style.color = 'white'
    cc.style.backgroundColor = 'white'
    cc.style.color = 'grey'
    dd.style.backgroundColor = 'white'
    dd.style.color = 'grey'
})
bb.addEventListener('click', function(){
    aa.style.backgroundColor = 'white'
    aa.style.color = 'grey'
    bb.style.backgroundColor = '#833AE0'
    bb.style.color = 'white'
    cc.style.backgroundColor = 'white'
    cc.style.color = 'grey'
    dd.style.backgroundColor = 'white'
    dd.style.color = 'grey'
})
cc.addEventListener('click', function(){
    aa.style.backgroundColor = 'white'
    aa.style.color = 'grey'
    cc.style.backgroundColor = '#833AE0'
    cc.style.color = 'white'
    bb.style.backgroundColor = 'white'
    bb.style.color = 'grey'
    dd.style.backgroundColor = 'white'
    dd.style.color = 'grey'
})
dd.addEventListener('click', function(){
    aa.style.backgroundColor = 'white'
    aa.style.color = 'grey'
    dd.style.backgroundColor = '#833AE0'
    dd.style.color = 'white'
    cc.style.backgroundColor = 'white'
    cc.style.color = 'grey'
    bb.style.backgroundColor = 'white'
    bb.style.color = 'grey'
})

cry.forEach((button) => {
    button.addEventListener('click', () => {
        selectedSellCurrency = button.textContent;
        const amount1 = input2.value;
        const apiUrlRate1 = `${apiUrl}?api_key=${apiKey}&from=${selectedBuyCurrency}&to=${selectedSellCurrency}&amount=${amount1}`;

        fetch(apiUrlRate1)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                if (data.error) {
                    throw new Error(`API error: ${data.error}`);
                }

                input1.value = data.value.toFixed(4);
                if (input2.value === '') {
                    input1.value = '';
                }
            })
            .catch((error) => {
                console.error('API error:', error);
            });
    });
});

cry1.forEach((button) => {
    button.addEventListener('click', () => {
        selectedBuyCurrency = button.textContent;
        const amount2 = input1.value;
        const apiUrlRate2 = `${apiUrl}?api_key=${apiKey}&from=${selectedSellCurrency}&to=${selectedBuyCurrency}&amount=${amount2}`;

        fetch(apiUrlRate2)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                if (data.error) {
                    throw new Error(`API error: ${data.error}`);
                }

                input2.value = data.value.toFixed(4);
                if (input1.value === '') {
                    input2.value = '';
                }
            })
            .catch((error) => {
                console.error('API error:', error);
            });
    });
});

input1.addEventListener('input', function () {
    const amount1 = input1.value;
    if (amount1 !== '') {
        const apiUrlRate1 = `${apiUrl}?api_key=${apiKey}&from=${selectedSellCurrency}&to=${selectedBuyCurrency}&amount=${amount1}`;

        fetch(apiUrlRate1)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                if (data.error) {
                    throw new Error(`API error: ${data.error}`);
                }

                console.log(data);
                input2.value = data.value.toFixed(4);
            })
            .catch((error) => {
                console.error('API error:', error);
            });
    } else {
        
        input2.value = '';
    }
});
input2.addEventListener('input', function () {
    const amount2 = input2.value;

    if (amount2 !== '') {
        const apiUrlRate2 = `${apiUrl}?api_key=${apiKey}&from=${selectedBuyCurrency}&to=${selectedSellCurrency}&amount=${amount2}`;

        fetch(apiUrlRate2)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                if (data.error) {
                    throw new Error(`API error: ${data.error}`);
                }

                console.log(data);
                input1.value = data.value.toFixed(4);
            })
            .catch((error) => {
                console.error('API error:', error);
            });
    } else {
        input1.value = '';
    }
});

cry.forEach((button) => {
    button.addEventListener('click', () => {
        selectedSellCurrency = button.textContent;
        const apiUrlRate1 = `${apiUrl}?api_key=${apiKey}&from=${selectedBuyCurrency}&to=${selectedSellCurrency}&amount=${1}`;

        fetch(apiUrlRate1)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                if (data.error) {
                    throw new Error(`API error: ${data.error}`);
                }
                p1.textContent = `1 ${selectedBuyCurrency} = ${data.value} ${selectedSellCurrency}`
            })
    

            .catch((error) => {
                console.error('API error:', error);
            });
    });

});
cry1.forEach((button) => {
    button.addEventListener('click', () => {
        selectedBuyCurrency = button.textContent;
        const apiUrlRate2 = `${apiUrl}?api_key=${apiKey}&from=${selectedSellCurrency}&to=${selectedBuyCurrency}&amount=${1}`;
        fetch(apiUrlRate2)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                if (data.error) {
                    throw new Error(`API error: ${data.error}`);
                }
            p2.textContent = `1 ${selectedSellCurrency} = ${data.value} ${selectedBuyCurrency}`

            })
            .catch((error) => {
                console.error('API error:', error);
            });
    });

});

        const apiUrlRate1 = `${apiUrl}?api_key=${apiKey}&from=${selectedSellCurrency}&to=${selectedBuyCurrency}&amount=${1}`;
        fetch(apiUrlRate1)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                p2.textContent = `1 ${selectedSellCurrency} = ${data.value} ${selectedBuyCurrency}`
                

            })
  
        const apiUrlRate2 = `${apiUrl}?api_key=${apiKey}&from=${selectedBuyCurrency}&to=${selectedSellCurrency}&amount=${1}`;

        fetch(apiUrlRate2)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
               
                console.log(data);

                p1.textContent = `1 ${selectedBuyCurrency} = ${data.value} ${selectedSellCurrency}`


            })


