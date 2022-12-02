/// <reference types="cypress" />

describe("Sign up", () => {
    beforeEach(()=>{
        cy.visit("/index.html")
    })

    it("Should create new account with new username", ()=>{
        cy.get(".nav-link").get("#signin2").click();
        cy.get("input[type='text']").get("#sign-username").wait(500).type("Teste");
        cy.get("input[type='text']").get("#sign-password").wait(500).type("123456");
        cy.get("button").contains("Sign up").click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('Sign up successful.');
        })

    })
    
    it("Should create new account with already existing username", ()=>{
        cy.get(".nav-link").get("#signin2").click();
        cy.get("input[type='text']").get("#sign-username").wait(500).type("Username");
        cy.get("input[type='text']").get("#sign-password").wait(500).type("password");
        cy.get("button").contains("Sign up").click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('This user already exist.');
        })
    })

})


