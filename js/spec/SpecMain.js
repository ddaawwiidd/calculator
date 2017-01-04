//suit Calculator
describe("Calculator", function(){
	
	it("should add two numbers correctly", function (){
		expect(Calculator.add(50,5)).toBe(55);
		expect(Calculator.add(10,-5)).toBe(5);
		expect(Calculator.add(10,0)).toBe(10);
		expect(Calculator.add(-10,-5)).toBe(-15);
		expect(Calculator.add(-10,5)).toBe(-5);
	});
	
	it("should show error message 'Provide second number' if user tries to add one number only", function(){
		expect(Calculator.add(50)).toBe("Provide second number");
	});
	
	it("should subtract two numbers correctly", function (){
		expect(Calculator.subtract(50,5)).toBe(45);
		expect(Calculator.subtract(10,-5)).toBe(15);
		expect(Calculator.subtract(10,0)).toBe(10);
		expect(Calculator.subtract(-10,-5)).toBe(-5);
		expect(Calculator.subtract(-10,5)).toBe(-15);
	});
	
	it("should show error message 'Provide second number' if user tries to subtract one number only", function(){
		expect(Calculator.subtract(50)).toBe("Provide second number");
	});
	
	it("should multiply two numbers correctly", function (){
		expect(Calculator.multiply(4,5)).toBe(20);
		expect(Calculator.multiply(4,-5)).toBe(-20);
		expect(Calculator.multiply(4,0)).toBe(0);
		expect(Calculator.multiply(-4,-5)).toBe(20);
	});
	
	it("should show error message 'Provide second number' if user tries to multiply one number only", function(){
		expect(Calculator.multiply(4)).toBe("Provide second number");
	});
	
	it("should divide two numbers correctly", function (){
		expect(Calculator.divide(20,5)).toBe(4);
		expect(Calculator.divide(3,6)).toBe(0.5);
		expect(Calculator.divide(20,-5)).toBe(-4);
		expect(Calculator.divide(-20,-5)).toBe(4);
	});
	
	it("should show error message 'You can't divide by zero' if user tries to divide number by zero", function(){
		expect(Calculator.divide(4,0)).toBe("You can't divide by zero");
	});
	
	it("should show error message 'Provide second number' if user tries to divide one number only", function(){
		expect(Calculator.divide(4)).toBe("Provide second number, and let it not be zero ;)");
	});
	
});