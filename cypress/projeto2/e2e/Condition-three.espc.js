//Cenário 03 - Usuário já cadastrado busca fazer uma reclamação e faz log out.
/// <reference types="cypress" />

describe("User already registered seeks to make a complaint and logs out", ()=>{
    before("",()=>{
        cy.visit("/index.html");
    })
    
    it("", ()=>{
        cy.get(".nav-link").get("#login2").click();
        cy.get("input[type='text']").get("#loginusername").wait(500).type("Teste");
        cy.get("input[type='text']").get("#loginpassword").wait(500).type("123456");
        cy.get("button").contains("Log in").click();
        cy.wait(5000);


        cy.get(".nav-link").contains("Contact").click();
        cy.get("input").get("#recipient-email").wait(500).type("Email@email.com");
        cy.get("input").get("#recipient-name").wait(500).type("Karen");
        cy.get("textarea").get("#message-text").wait(500).type("Bad product, i want to se the manager. Now!");
        cy.get("button").contains("Send message").click();

        cy.get(".nav-link").get("#logout2").click();
        cy.contains("Welcome NewUsername").should("not.be.visible");
    
    })
})