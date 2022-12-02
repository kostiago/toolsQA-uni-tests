//Cenário 01 - Usuário já cadastrado realiza a compra de três produtos.
/// <reference types="cypress" />

describe("User already registered makes the purchase of three products",()=>{
    before("",()=>{
        cy.visit("/index.html");
    })
    
    it("", ()=>{
        cy.get(".nav-link").get("#login2").click();
        cy.get("input[type='text']").get("#loginusername").wait(500).type("Username");
        cy.get("input[type='text']").get("#loginpassword").wait(500).type("password");
        cy.get("button").contains("Log in").click();
        cy.wait(5000);
        

        cy.get(".card-block").get(".hrefch").first().click();
        cy.wait(1000).contains("Add to cart").click();
        cy.visit("/index.html");
        cy.wait(500);
        cy.get(".card-block").get(".hrefch").first().click();
        cy.wait(1000).contains("Add to cart").click();
        cy.visit("/index.html");
        cy.wait(500);
        cy.get(".card-block").get(".hrefch").first().click();
        cy.wait(1000).contains("Add to cart").click();
        cy.visit("/index.html");
        cy.wait(500);


        cy.visit("cart.html").wait(1000);
        cy.get("button").contains("Place Order").click();
        

        cy.get("input").get("#name").type("Tiago");
        cy.get("input").get("#country").type("Brasil");
        cy.get("input").get("#city").type("Pombal");
        cy.get("input").get("#card").type("4002 8922 4902 8922");
        cy.get("input").get("#month").type("Agosto");
        cy.get("input").get("#year").type("1995");

        
        cy.get("button").contains("Purchase").click();
        cy.contains("Thank you for your purchase!").should("be.visible");
    })
})