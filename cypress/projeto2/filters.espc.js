/// <reference types="cypress" />

describe("Filters", () => {
    beforeEach(()=>{
        cy.visit("/index.html")
    })

    it("should filter products of the Phones category", ()=>{
        cy.get(".list-group-item").contains("Phones").click();
        cy.get(".card-block").should('have.length',7);
    })

    it("should filter products of the Laptops category", ()=>{
        cy.get(".list-group-item").contains("Laptops").click();
        cy.get(".card-block").should('have.length',6);
    })

    it("should filter products of the Monitors category", ()=>{
        cy.get(".list-group-item").contains("Monitors").click();
        cy.get(".card-block").should('have.length',2);
    })
})