describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("should have logo in the header", () => {
    const ab = cy.get("header").find("img");
    console.log({ ab });
    cy.get("header").find("img").should("have.attr", "src");
  });
  it("should display Nav titles", () => {
    cy.get("nav")
      .should("contain", "Trending")
      .and("contain", "Top Rated")
      .and("contain", "Action")
      .and("contain", "Comedy")
      .and("contain", "Horror")
      .and("contain", "Mystery")
      .and("contain", "Sci-Fi")
      .and("contain", "Western")
      .and("contain", "Animation")
      .and("contain", "Tv Movie");
  });
  it("should navigate to Action Movie List when click on Action category", () => {
    cy.get("h2").contains("Action").click();
    cy.url().should("include", "fetchActionMovies");
  });
  it("should navigate to Action Movie List when click on Action category", () => {
    cy.get("h2").contains("Tv Movie").click();
    cy.url().should("include", "genre=fetchTv");
  });
});

export {};
