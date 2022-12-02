/// <reference types="cypress" />

describe("Contact", () => {
    beforeEach(()=>{
        cy.visit("/index.html");
    })

    // Detectará erro    
    it("Should try to send a message with an invalid email",()=>{
        cy.get(".nav-link").contains("Contact").click();
        cy.get("input").get("#recipient-email").wait(500).type("testeemailcom");
        cy.get("input").get("#recipient-name").wait(500).type("Teste");
        cy.get("textarea").get("#message-text").wait(500).type("Gimme, gimme, gimme a man after midnight. Won't somebody help me chase the shadows away?");
        cy.get("button").contains("Send message").click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('Invalid email!');
        })
    })

    // Detectará erro
    it("Should try to sen a message without an email",()=>{
        cy.get(".nav-link").contains("Contact").click();
        cy.get("input").get("#recipient-name").wait(500).type("Teste");
        cy.get("textarea").get("#message-text").wait(500).type("'Cause everything is new. And everything is you. And all I've learned has overturned. What can I do?");
        cy.get("button").contains("Send message").click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('Please, type your email.');
        })
    })

    it("Should successfully send a message",()=>{
        cy.get(".nav-link").contains("Contact").click();
        cy.get("input").get("#recipient-email").wait(500).type("teste@email.com");
        cy.get("input").get("#recipient-name").wait(500).type("Teste");
        cy.get("textarea").get("#message-text").wait(500).type("Money, money, money. Must be funny. In the rich man's world");
        cy.get("button").contains("Send message").click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('Thanks for the message!!');
        })
    })
    
})

