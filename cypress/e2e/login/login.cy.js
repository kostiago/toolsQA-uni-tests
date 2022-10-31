describe("Orange HRM", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  })

  it('Check if the page loaded correctly', () => {

    cy.get("input[name='username']").should("be.visible");

    cy.get("input[name='password']").should("be.visible");

    cy.get("button[type='submit']").should("be.visible");
  })

  it('Login with valid data', () => {

    cy.get("input[name='username']").type("Admin");

    cy.get("input[name='password']").type("admin123");

    cy.get("button[type='submit']").click();
  })

  it("Check if change password is clickable", () => {
    cy.get("div [class=orangehrm-login-forgot]").click();
  })
  
  it("Should not accept login attempt only the password", () => {


    cy.get("input[name='password']").type("admin123");

    cy.get("button[type='submit']").click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Required')
    })
  })

  it('Should not accept invalid login attempt', () => {

    cy.get("input[name='username']").type("Tiago");

    cy.get("input[name='password']").type("jose123");

    cy.get("button[type='submit']").click();
  })

});