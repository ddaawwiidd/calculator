var Calculator = {
	input: 0,
	result: 0,
	operation: undefined,
	x: undefined,
	y: undefined,
	
	inputField: function(number){
		this.input = document.getElementById("calculatorInput").value;
		this.input = this.input + number;
		document.getElementById("calculatorInput").value = this.input;
		console.log(this.input);
	},
	
	getNumbers: function(){
		var number1 = parseInt(this.input);
		var operator = this.input.substring((number1.toString().length),((number1.toString().length)+1));
		var number2 = parseInt(this.input.substring((this.input.indexOf(operator)+1)));
		console.log(number1);
		console.log(operator);
		console.log(number2);
		this.operation = operator;
		this.x = number1;
		this.y = number2;
	},
	
	resultOp: function(){
		Calculator.getNumbers();
		switch(this.operation){
			case "+":
				Calculator.add(this.x, this.y);
				break;
			case "-":
				Calculator.subtract(this.x, this.y);
				break;
			case "*":
				Calculator.multiply(this.x, this.y);
				break;
			case "/":
				Calculator.divide(this.x, this.y);
				break;
		};
		console.log(this.result);
		document.getElementById("calculatorInput").value = this.result;
		
	},
	
	add: function(x,y){
		if(typeof(x) !== 'undefined' && typeof(y) !== 'undefined'){
			this.result = x + y;
			return this.result;
		} else {
			this.result = "Provide second number";
			return this.result;
		};
	},
	
	subtract: function(x,y){
		if(typeof(x) !== 'undefined' && typeof(y) !== 'undefined'){
			this.result = x - y;
			return this.result;
		} else {
			this.result = "Provide second number";
			return this.result;
		};
	},
	
	multiply: function(x,y){
		if(typeof(x) !== 'undefined' && typeof(y) !== 'undefined'){
			this.result = x * y;
			return this.result;
		} else {
			this.result = "Provide second number"
			return this.result;
		};
	},
	
	divide: function(x,y){
		if(typeof(x) !== 'undefined' && y !== 0 && typeof(y) !== 'undefined'){
			this.result = x / y;
			return this.result;
		} else if (y == 0){
			this.result = "You can't divide by zero";
			return this.result;
		} else {
			this.result = "Provide second number, and let it not be zero ;)";
			return this.result;
		};
	}
};

document.getElementById("btnC").addEventListener("click",function(){document.getElementById("calculatorInput").value = "";});
document.getElementById("btn1").addEventListener("click",function(){Calculator.inputField(1)});
document.getElementById("btn2").addEventListener("click",function(){Calculator.inputField(2)});
document.getElementById("btn3").addEventListener("click",function(){Calculator.inputField(3)});
document.getElementById("btn4").addEventListener("click",function(){Calculator.inputField(4)});
document.getElementById("btn5").addEventListener("click",function(){Calculator.inputField(5)});
document.getElementById("btn6").addEventListener("click",function(){Calculator.inputField(6)});
document.getElementById("btn7").addEventListener("click",function(){Calculator.inputField(7)});
document.getElementById("btn8").addEventListener("click",function(){Calculator.inputField(8)});
document.getElementById("btn9").addEventListener("click",function(){Calculator.inputField(9)});
document.getElementById("btn0").addEventListener("click",function(){Calculator.inputField(0)});

document.getElementById("btnComa").addEventListener("click",function(){Calculator.inputField(".")});
document.getElementById("btnPlusMinus").addEventListener("click",function(){Calculator.inputField("-")});
document.getElementById("btnSubtract").addEventListener("click",function(){Calculator.inputField("-")});
document.getElementById("btnMultiply").addEventListener("click",function(){Calculator.inputField("*")});
document.getElementById("btnDivide").addEventListener("click",function(){Calculator.inputField("/")});
document.getElementById("btnAdd").addEventListener("click",function(){Calculator.inputField("+")});
document.getElementById("btnResult").addEventListener("click",function(){Calculator.resultOp()});
