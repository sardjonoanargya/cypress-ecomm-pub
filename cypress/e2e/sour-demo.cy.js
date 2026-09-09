describe("E-Comm Flow - Demo", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });
  it("should visit the site and do these things", () => {
    // 1. Login
    cy.login("standard_user", "secret_sauce");

    // 2. Verify login was successful
    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("have.text", "Products");

    // 3. Add items to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_badge").should("have.text", `1`);

    // 4. Head to checkout
    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="checkout"]').click();

    // 5. Filling infos for checkout
    cy.get('[data-test="firstName"]').type("John");
    cy.get('[data-test="lastName"]').type("Doe");
    cy.get('[data-test="postalCode"]').type("12345");
    cy.get('[data-test="continue"]').click();

    // 6. Complete purchase
    cy.get('[data-test="finish"]').click();
    cy.get(".complete-header").should("have.text", "Thank you for your order!");
  });
});
