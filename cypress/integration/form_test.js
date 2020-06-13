describe('Testing our form inputs', function () {
	beforeEach(function () {
		cy.visit('http://localhost:3000/pizza');
	});
	it('tests name input', function () {
		cy.get('[data-cy=name').type('Testing Name Out');
  });
  it('tests radio input', function () {
    cy.get('[data-cy=red').check().should('be.checked')
  });
  it('tests radio input', function () {
		cy.get('[data-cy=garlic').check().should('be.checked');
  });
  it('tests radio input', function () {
		cy.get('[data-cy=bbq').check().should('be.checked');
  });
  it('tests radio input', function () {
		cy.get('[data-cy=alfredo').check().should('be.checked');
	});
	it('tests checkbox input', function () {
		cy.get('[data-cy=checkbox1').check().should('be.checked');
	});
	it('tests checkbox input', function () {
		cy.get('[data-cy=checkbox2').check().should('be.checked');
	});
	it('tests checkbox input', function () {
		cy.get('[data-cy=checkbox3').check().should('be.checked');
	});
	it('tests checkbox input', function () {
		cy.get('[data-cy=checkbox4').check().should('be.checked');
	});
	it('tests checkbox input', function () {
		cy.get('[data-cy=checkbox5').check().should('be.checked');
	});
	it('tests form submit', function () {
		cy.get('[data-cy=submit]').submit();
	});
});
