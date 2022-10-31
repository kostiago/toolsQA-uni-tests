describe("Authenticated Routes", () => {
    beforeEach(() => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })
  
    it('Login', () => {

        cy.get("input[name='username']").type("Admin");
    
        cy.get("input[name='password']").type("admin123");
    
        cy.get('.oxd-button').click();

        cy.wait(1000);

        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();

        cy.get(':nth-child(2) > .oxd-input').type("Admin");

        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true});


        cy.get('.orangehrm-header-container > .oxd-button').click();

        cy.get('.oxd-button--secondary').click();
      

      })
    
});