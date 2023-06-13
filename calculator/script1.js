let expression = '';

function appendValue(char) {
  expression += char;
  document.getElementById('result').value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById('result').value = result;
    expression = '';
  } catch (error) {
    document.getElementById('result').value = 'Error';
    expression = '';
  }
}

function clearDisplay() {
  expression = '';
  document.getElementById('result').value = '';
}
function squares(){
    let c=expression;
	expression+='*';
	expression+=c;
	document.getElementById('result').value=expression;

	
}