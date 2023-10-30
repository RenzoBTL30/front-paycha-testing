describe('Prueba de Eliminación de Categoría', () => {
    it('Debería eliminar una categoría y verificar que no esté en el listado', () => {

      cy.visit('http://localhost:4200/dashboard/gestionar-categorias');
  
      cy.get('.table tbody tr').should('have.length.gt', 0);
  
      cy.get('.table tbody tr').eq(3).within(() => {
        cy.get('td').eq(2).find('#eliminarCategoria').click();
      });
  
      cy.get('.swal2-popup').should('be.visible');
  
      cy.get('.swal2-confirm').click();

      
    });
});