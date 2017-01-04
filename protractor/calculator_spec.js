describe("Calculator", function(){
	
	var page = require('./page/home_page.js');
	
	beforeEach(function(){
		browser.ignoreSynchronization = true;
		browser.get("https://ddaawwiidd.github.io/calculator/");
	});
	
	it("Should have all buttons working", function(){
		page.clickNumber(0);
		page.clickNumber(1);
		page.clickNumber(2);
		page.clickNumber(3);
		page.clickNumber(4);
		page.clickNumber(5);
		page.clickNumber(6);
		page.clickNumber(7);
		page.clickNumber(8);
		page.clickNumber(9);
		expect(page.getResult()).toEqual('0123456789');
		page.clickClear();
		expect(page.getResult()).toEqual('');
		page.clickPlus();
		page.clickMinus();
		page.clickMulty();
		page.clickDivide();
		page.clickComa();
		page.clickPlusMinus();
		expect(page.getResult()).toEqual('+-*/.-');	
	});
	
	it("Should be able to add 2 numbers", function(){
		page.clickNumber(2);
		page.clickPlus();
		page.clickNumber(2);
		page.clickEqual();
		expect(page.getResult()).toEqual('4');
	});
	
	it("Should be able to subtract 2 numbers", function(){
		page.clickNumber(2);
		page.clickMinus();
		page.clickNumber(2);
		page.clickEqual();
		expect(page.getResult()).toBe('0');
	});	
	
	it("Should be able to multiply 2 numbers", function(){
		page.clickNumber(2);
		page.clickMulty();
		page.clickNumber(2);
		page.clickEqual();
		expect(page.getResult()).toBe('4');
	});	
	
	xit("Should be able to divide 2 numbers", function(){
		page.clickNumber(2);
		page.clickDivide();
		page.clickNumber(2);
		page.clickEqual();
		expect(page.getResult()).toBe('1');
	});
	
});


