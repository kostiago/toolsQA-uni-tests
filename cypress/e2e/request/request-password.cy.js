describe('Request Password', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
  })

  it("Check if the page loaded correctly", () => {

    cy.get("input[name='username']").should("be.visible");

    cy.get("button[type='button']").should("be.visible");

    cy.get("button[type='submit']").should("be.visible");
  })

  it('Login with valid data', () => {

    cy.get("input[name='username']").type("Admin");
    cy.get("button[type='submit']").click();

    cy.wait(4000);
  })

  it("Page should not refresh without data", () => {

    cy.get("button[type='submit']").click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Required')
    })

    cy.wait(4000);
  })

  it("Check if clicking the cancel button will return you to the login screen", () => {

    cy.get("button[type='button']").click();
  })
})