//Cenário 02 - Usuário ainda não cadastrado se registra, visita produtos de interesse, mas não realiza compra.
/// <reference types="cypress" />

describe("User not yet registered registers, visits products of interest, but does not make a purchase", ()=>{
    before("",()=>{
        cy.visit("/index.html");
    })
    
    it("", ()=>{
        cy.get(".nav-link").get("#signin2").click();
        cy.get("input[type='text']").get("#sign-username").wait(500).type("teste1");
        cy.get("input[type='text']").get("#sign-password").wait(500).type("password");
        cy.get("button").contains("Sign up").click();
        

        cy.get(".card-block").get(".hrefch").first().click();
        cy.wait(1000).contains("Add to cart").click();
        cy.visit("/index.html");
        cy.wait(500);

    })
})