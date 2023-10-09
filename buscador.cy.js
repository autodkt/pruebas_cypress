/// <reference types="cypress" />

describe('Buscador en google "automatizacion")', () => {

  it('buscar en google automatizacion', () => {

    //Visit the URL of the page you want to test
    cy.visit('https://www.google.es/');
    cy.wait(500)
    cy.get('#W0wltc > .QS5gu').click()

    // Leer el archivo JSON que contiene la palabra clave
    cy.readFile('C:/Pruebas/proyecto_tecnico/cypress/fixtures/busqueda.json').then((jsonObject) => {
      const keyword = jsonObject.palabraClave; // Reemplaza 'palabraClave' con la clave real en tu JSON
      cy.get('#APjFqb').type(keyword).type('{enter}');
      cy.wait(500)

      // Ahora busca y hace clic en el enlace de Wikipedia en los resultados de búsqueda
      cy.contains('Wikipedia')
        .click()
      cy.wait(4000)

      // Utiliza cy.origin() para cambiar al origen de Wikipedia
      cy.origin('https://es.wikipedia.org', () => {
        cy.wait(5000);

        // Buscar y verificar la presencia de la parte del texto en Wikipedia
        const parteDelTexto = ("1785");
        cy.contains(parteDelTexto).should('exist');

        // Capturar una captura de pantalla de Wikipedia
        cy.get('body').screenshot('1785');

      });

    });

  });


});