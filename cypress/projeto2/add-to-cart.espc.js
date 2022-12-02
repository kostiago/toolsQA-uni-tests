/// <reference types="cypress" />

describe("Add items to cart", () => {
    before(()=>{
        cy.visit("index.html")
    })

    it("Should add a item to cart", ()=>{
        cy.get(".card-block").get(".hrefch").first().click();
         cy.wait(1000).contains("Add to cart").click();
         cy.on('window:alert',(t)=>{
             expect(t).to.contains('Product added');
         })
    })
    
})

 describe("Delete item from cart", () => {
     before(()=>{
         cy.visit("cart.html")
     })

     it("Should delete the selected item from the cart", ()=>{
        cy.contains("Delete").click();
        cy.get("tr").should('have.length',0);
    })
})