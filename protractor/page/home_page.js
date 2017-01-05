var HomePage = function(){
	
	this.clearForm = function(){
		element(by.css("#calculatorInput")).clear();
	};
	
	this.fillForm = function(operation){
		element(by.css("#calculatorInput")).sendKeys(operation);
	};
	
	this.getResult = function(){
		return element(by.css("#calculatorInput")).getAttribute('value');
	};

	this.clickEqual = function(){
		element(by.css("#btnResult")).click();
	};
	
	this.clickNumber = function(number){
		element(by.css("#btn"+number+"")).click();
	};
	
	this.clickPlus = function(){
		element(by.css("#btnAdd")).click();
	};
	
	this.clickComa = function(){
		element(by.css("#btnComa")).click();
	};
	
	this.clickMinus = function(){
		element(by.css("#btnSubtract")).click();
	};
	
	this.clickMulty = function(){
		element(by.css("#btnMultiply")).click();
	};
	
	this.clickDivide = function(){
		element(by.css("#btnDivide")).click();
	};
	
	this.clickClear = function(){
		element(by.css("#btnC")).click();
	};
	
	this.clickPlusMinus = function(){
		element(by.css("#btnPlusMinus")).click();
	};
	
};
module.exports = new HomePage();