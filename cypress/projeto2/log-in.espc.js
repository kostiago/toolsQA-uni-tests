/// <reference types="cypress" />

describe("Log in", () => {
    beforeEach(()=>{
        cy.visit("/index.html");
    })
    
    it("Should log in with wrong password", ()=>{
        cy.get(".nav-link").get("#login2").click();
        cy.get("input[type='text']").get("#loginusername").wait(500).type("NewUsername");
        cy.get("input[type='text']").get("#loginpassword").wait(500).type("WrongPassword");
        cy.get("button").contains("Log in").click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('Wrong password.');
        })

    })
    
    it("Should log in with non existing username", ()=>{
        cy.get(".nav-link").get("#login2").click();
        cy.get("input[type='text']").get("#loginusername").wait(500).type("ThisUserDoesNotExist");
        cy.get("input[type='text']").get("#loginpassword").wait(500).type("password");
        cy.get("button").contains("Log in").click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('User does not exist.');
        })
        
    })
    
    it("Should successfully log in", ()=>{
        cy.get(".nav-link").get("#login2").click();
        cy.get("input[type='text']").get("#loginusername").wait(500).type("NewUsername");
        cy.get("input[type='text']").get("#loginpassword").wait(500).type("password");
        cy.get("button").contains("Log in").click();
        cy.wait(5000);
        cy.contains("Welcome NewUsername").should("be.visible");
    
    })
})

