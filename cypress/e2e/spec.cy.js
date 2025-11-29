describe("Calculator E2E Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  // Addition Test
  it("Addition: 5 + 3 = 8", () => {
    cy.get("#btn-5").click();
    cy.contains("button", "+").click();
    cy.get("#btn-3").click();
    cy.contains("button", "=").click();
    cy.get("#display").should("have.value", "8");
  });

  // Subtraction Test
  it("Subtraction: 10 - 4 = 6", () => {
    cy.get("#btn-1").click();
    cy.get("#btn-0").click();
    cy.contains("button", "-").click();
    cy.get("#btn-4").click();
    cy.contains("button", "=").click();
    cy.get("#display").should("have.value", "6");
  });

  // Multiplication Test
  it("Multiplication: 6 * 7 = 42", () => {
    cy.get("#btn-6").click();
    cy.contains("button", "*").click();
    cy.get("#btn-7").click();
    cy.contains("button", "=").click();
    cy.get("#display").should("have.value", "42");
  });

  // Division Test
  it("Division: 15 / 3 = 5", () => {
    cy.get("#btn-1").click();
    cy.get("#btn-5").click();
    cy.contains("button", "/").click();
    cy.get("#btn-3").click();
    cy.contains("button", "=").click();
    cy.get("#display").should("have.value", "5");
  });

  // Clear Button Test
  it("Clear button resets display", () => {
    cy.get("#btn-9").click();
    cy.get("#btn-C").click();
    cy.get("#display").should("have.value", "0");
  });

  // Scientific Notation Test
  it("Scientific Notation: 5 E 3 = 5000", () => {
    cy.get("#btn-5").click();
    cy.contains("button", "E").click();
    cy.get("#btn-3").click();
    cy.contains("button", "=").click();
    cy.get("#display").should("have.value", "5000");
  });
});
