describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  // PDA tests...
  // Do the number buttons update the display of the running total?
  it('should have a display that is updated by clicking the number buttons', () => {
    cy.get('#number3').click();
    cy.get('#number7').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '372');
  });

  // Do the arithmetical operations update the display with the result of the operation?
  it('should display the result of an operation', () => {
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '15');
  });

  // Can multiple operations be chained together?
  it('should be able to run a sequence of mutiple operations', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '21');
  });

  // Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  // Test for positive result:
  it('should be able to display a positive number as the result of an operation', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8');
  });

  // Test for negative result:
  it('should be able to display a negative number as the result of an operation', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-4');
  });

   // Test for decimal result:
  it('should be able to display a decimal number as the result of an operation', () => {
    cy.get('#number1').click();
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3.25');
  });

  // Test for very large result:
  it('should be able to display a very large number as the result of an operation', () => {
    cy.get('#number7').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '7000000000');
  });

  // What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).
  // Test for dividing by 0:
  it('should display an error message if user attempts to divide by 0', () => {
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Error, cannot divide by 0!');
  });

  // Test for multiplying by 0 - 0 entered last:
  it('should always return 0 as the result of multipy by 0 (0 entered last)', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0');
  });

  // Test for multiplying by 0 - 0 entered first:
  xit('should always return 0 as the result of multipy by 0 (0 entered first)', () => {
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0');
  });

});


