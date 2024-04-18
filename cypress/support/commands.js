Cypress.Commands.add('login', (email, password) => {
    cy.contains('Log in').click()

    if (email) {
        cy.get('#mail').type(email)
    }

    if (password) {
        cy.get('#pass').type(password)
    }

    cy.contains('Submit').click()
})
Cypress.Commands.add("createNewBook", (bookData) => {
    cy.contains("Add new").click();
    cy.get("#title").type(bookData.title);
    cy.get("#description").type(bookData.description);
    cy.get("#authors").type(bookData.author);
    cy.contains("Submit").click();
  });

Cypress.Commands.add("addBookToFavorite", (bookData) => {
    cy.contains("Add new").click();
    cy.get("#title").type(bookData.title);
    cy.get("#description").type(bookData.description);
    cy.get("#authors").type(bookData.author);
    cy.get("#favorite").click();
    cy.contains("Submit").click();
    cy.wait(1000);
    cy.contains('Add to favorite').click();
  });

Cypress.Commands.add("deleteBookFromFavorite", (bookData) => {
   
    cy.get("h4").click();
    cy.contains("Delete from favorite").click();
    cy.get('.text-light > .ml-2').click();
    
  });    
