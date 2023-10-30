describe('Prueba de Listado de Categorías', () => {
    it('Debería listar las categorías existentes', () => {

      cy.visit('http://localhost:4200/dashboard/gestionar-categorias');
  
      cy.get('.table tbody tr').should('have.length.gt', 0);
  
      cy.get('.table tbody tr').each(($row, index) => {
        
        cy.wrap($row).within(() => {
          cy.get('td').eq(1).should('not.be.empty');
        });
      });
    });
});
  
  
  
  
  