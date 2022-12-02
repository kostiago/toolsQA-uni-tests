/// <reference types="cypress" />

describe("Do checkout", () => {
    beforeEach(()=>{
        cy.visit("index.html")
    })

    // Identificará erro
    it("should not be able to do a checkout with no items in cart", ()=>{
        cy.get(".nav-link").get("#login2").click();
        cy.get("input[type='text']").get("#loginusername").wait(500).type("Username");
        cy.get("input[type='text']").get("#loginpassword").wait(500).type("password");
        cy.get("button").contains("Log in").click();
        cy.wait(5000);
        cy.contains("Welcome NewUsername");
        
        cy.visit("cart.html").wait(1000);
        cy.get("button").contains("Place Order").click();
        
        cy.get("input").get("#name").type("Tiago");
        cy.get("input").get("#country").type("Brasil");
        cy.get("input").get("#city").type("Pombal");
        cy.get("input").get("#card").type("4002 8922 4902 8922");
        cy.get("input").get("#month").type("Agosto");
        cy.get("input").get("#year").type("1995");
    
        cy.get("button").contains("Purchase").click();
        
        cy.contains("Your cart is empty").should("be.visible")

    })
    
    it("Should do a checkout with items in cart while logged into the site and all fields validly filled", ()=>{
        cy.get(".nav-link").get("#login2").click();
        cy.get("input[type='text']").get("#loginusername").wait(500).type("Username");
        cy.get("input[type='text']").get("#loginpassword").wait(500).type("password");
        cy.get("button").contains("Log in").click();
        cy.wait(5000);
        cy.contains("Welcome NewUsername");
        
        cy.get(".card-block").get(".hrefch").first().click();
        cy.wait(1000).contains("Add to cart").click();
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
    
    // Identificará erro
    it("Should not do a checkout with an invalid credit card number", ()=>{
        cy.get(".nav-link").get("#login2").click();
        cy.get("input[type='text']").get("#loginusername").wait(500).type("Username");
        cy.get("input[type='text']").get("#loginpassword").wait(500).type("password");
        cy.get("button").contains("Log in").click();
        cy.wait(5000);
        cy.contains("Welcome NewUsername");
        
        cy.get(".card-block").get(".hrefch").first().click();
        cy.wait(1000).contains("Add to cart").click();
        cy.visit("cart.html").wait(1000);
        cy.get("button").contains("Place Order").click();
        
        
        
        

        cy.get("input").get("#name").type("Tiago");
        cy.get("input").get("#country").type("Brasil");
        cy.get("input").get("#city").type("Pombal");
        cy.get("input").get("#card").type("invalid input");
        cy.get("input").get("#month").type("Agosto");
        cy.get("input").get("#year").type("1995");

        cy.get("button").contains("Purchase").click();
        

        cy.contains("Invalid credit card").should("be.visible")
        
    })

    // Identificará erro
    it("Should not do a checkout with invalid country name", ()=>{
        cy.get(".nav-link").get("#login2").click();
        cy.get("input[type='text']").get("#loginusername").wait(500).type("Username");
        cy.get("input[type='text']").get("#loginpassword").wait(500).type("password");
        cy.get("button").contains("Log in").click();
        cy.wait(5000);
        cy.contains("Welcome NewUsername");
        
        cy.get(".card-block").get(".hrefch").first().click();
        cy.wait(1000).contains("Add to cart").click();
        cy.visit("cart.html").wait(1000);
        cy.get("button").contains("Place Order").click();
        
        cy.get("input").get("#name").type("Tiago");
        cy.get("input").get("#country").type("Invalid country");
        cy.get("input").get("#city").type("Pombal");
        cy.get("input").get("#card").type("4002 8922 4902 8922");
        cy.get("input").get("#month").type("Agosto");
        cy.get("input").get("#year").type("1995");

        cy.get("button").contains("Purchase").click();

        cy.contains("Invalid country").should("be.visible")
        
        
    })

    // Identificará erro
    it("Should not do a checkout with items in cart while not logged into the site", ()=>{
        cy.get(".card-block").get(".hrefch").first().click();
        cy.wait(1000).contains("Add to cart").click();
        cy.visit("cart.html").wait(1000);
        cy.get("button").contains("Place Order").click();
        
        cy.get("input").get("#name").type("Tiago");
        cy.get("input").get("#country").type("Brasil");
        cy.get("input").get("#city").type("Pombal");
        cy.get("input").get("#card").type("4002 8922 4902 8922");
        cy.get("input").get("#month").type("Agosto");
        cy.get("input").get("#year").type("1995");

        cy.get("button").contains("Purchase").click();
        cy.get("modal-title").contains("Log in").should("be.visible");
    })

    
})