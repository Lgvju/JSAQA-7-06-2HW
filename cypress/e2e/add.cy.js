import {faker} from '@faker-js/faker';
 
//создание рандомной книги
let bookData = {
  title: Cypress._.capitalize(faker.lorem.words(3)), // Генерация случайного заголовка
  description: faker.lorem.paragraph(2), // Генерация случайного описания
  author:Cypress._.capitalize(faker.random.words(2)) //Генерация случайного имени автора
  //author:faker.person.name(), не прошло
  //author: faker.Name.findName(), // не прошло
  //https://github.com/fzaninotto/Faker#formatters
  //https://fakerjs.dev/guide/usage.html
} 
 
beforeEach(() => {
  cy.visit('/')
  cy.login ('bropet@mail.ru','123');
  
})
it("Should successfully add random book", () => {
  cy.createNewBook(bookData);
  cy.contains(bookData.title).should("be.visible");
});

it("Should successfully add random book to favorite", () => {
  cy.addBookToFavorite(bookData);
  cy.contains(bookData.title).should("be.visible");
});

it("Should successfully deleted random book from favorite", () => {
  cy.addBookToFavorite(bookData);
  cy.contains('Delete from favorite').should('be.visible');
});
  