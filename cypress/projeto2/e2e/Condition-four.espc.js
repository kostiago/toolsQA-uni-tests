//Cenário 04 - Usuário não cadastrado busca saber informações sobre o site e depois se cadastra.
/// <reference types="cypress" />

describe("Unregistered user seeks information about the site and then registers", ()=>{
    before("",()=>{
        cy.visit("/index.html");
    })

    it("", ()=>{
        cy.get(".nav-link").contains("About us").click();
        cy.get("button").get("[title = 'Play Video']").click();
        cy.get("button").contains("Close").click();


        cy.get(".nav-link").get("#signin2").click();
        cy.get("input[type='text']").get("#sign-username").wait(500).type("TesteUsername");
        cy.get("input[type='text']").get("#sign-password").wait(500).type("password");
        cy.get("button").contains("Sign up").click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('Sign up successful.');
        })

    })
})