describe('Prueba de Creación (Create) de Categoría', () => {
    it('Debería poder crear una nueva categoría', () => {

      cy.visit('http://localhost:4200/dashboard/gestionar-categorias');
  
      cy.get('button[data-bs-target="#agregarCategoria"]').click();
  
      cy.get('#nombre').type('Hamburguesas');
  
      cy.get('#btnAgregar').click();

      cy.visit('http://localhost:4200/dashboard/gestionar-categorias');
    });
});