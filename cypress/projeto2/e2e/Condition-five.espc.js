//Cenário 05 - Usuário já cadastrado, adiciona um item ao carrinho e depois o remove de lá.
/// <reference types="cypress" />

describe("User already registered, adds an item to the cart and then removes it from there", ()=>{
    it("Should successfully log in", ()=>{
        cy.get(".nav-link").get("#login2").click();
        cy.get("input[type='text']").get("#loginusername").wait(500).type("NewUsername");
        cy.get("input[type='text']").get("#loginpassword").wait(500).type("password");
        cy.get("button").contains("Log in").click();
        cy.wait(5000);
        cy.contains("Welcome NewUsername");
    
        
        cy.get(".card-block").get(".hrefch").first().click();
        cy.wait(1000).contains("Add to cart").click();
         
        cy.visit("cart.html")
     
        cy.contains("Delete").click();
        cy.get("tr").should('have.length',0);
    })
})