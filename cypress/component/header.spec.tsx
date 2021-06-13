import React from "react";
import { mount } from "@cypress/react";
import Header from "../../components/Header";

describe("<Header>", () => {
  beforeEach(() => {
    mount(<Header></Header>);
  });

  it("should render 6 svg's and the logo image", () => {
    mount(<Header></Header>);
    cy.get("svg").should("have.length", 6);
    cy.get("img")
      .should("have.class", "object-contain")
      .and("have.class", "text-white");
  });
});

/*it("should render 6 svg's and the logo image", () => {
  mount(<Header></Header>);
  cy.findAllByTestId("home")
  .should("have.class", "tracking-widest")
  .invoke("hover")
  cy.findAllByTestId("logo")
  .find("p")
  .should("include", 200);
});*/
