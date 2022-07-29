// https://calculator.swiftutors.com/gross-margin-percentage-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const grossMarginPercentageRadio = document.getElementById('grossMarginPercentageRadio');
const grossProfitRadio = document.getElementById('grossProfitRadio');
const netSalesRadio = document.getElementById('netSalesRadio');

let grossMarginPercentage;
let grossProfit = v1;
let netSales = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

grossMarginPercentageRadio.addEventListener('click', function() {
  variable1.textContent = 'Gross Profit';
  variable2.textContent = 'Net Sales';
  grossProfit = v1;
  netSales = v2;
  result.textContent = '';
});

grossProfitRadio.addEventListener('click', function() {
  variable1.textContent = 'Gross Margin Percentage';
  variable2.textContent = 'Net Sales';
  grossMarginPercentage = v1;
  netSales = v2;
  result.textContent = '';
});

netSalesRadio.addEventListener('click', function() {
  variable1.textContent = 'Gross Margin Percentage';
  variable2.textContent = 'Gross Profit';
  grossMarginPercentage = v1;
  grossProfit = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(grossMarginPercentageRadio.checked)
    result.textContent = `Gross Margin Percentage = ${computeGrossMarginPercentage().toFixed(2)} %`;

  else if(grossProfitRadio.checked)
    result.textContent = `Gross Profit = ${computeGrossProfit().toFixed(2)}`;

  else if(netSalesRadio.checked)
    result.textContent = `Net Sales = ${computeNetSales().toFixed(2)}`;
})

// calculation

function computeGrossMarginPercentage() {
  return (Number(grossProfit.value) / Number(netSales.value)) * 100;
}

function computeGrossProfit() {
  return (Number(grossMarginPercentage.value) / 100) * Number(netSales.value);
}

function computeNetSales() {
  return Number(grossProfit.value) / (Number(grossMarginPercentage.value) / 100);
}