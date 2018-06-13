describe('Open the Hackernews page',()=>{
    it('should open the browser with hacker news page',()=>{
        cy.visit('./../../index.html');
        cy.wait(3000);
    });
    it('should have 30 items in a page',()=>{
        cy.get('li').should('have.length',30);
    })
    it('should move to comments page when clicked on an item',()=>{
        cy.get('li a').first().click();
    })
    it('navigate back to news items page and click on More to move to next news items page',()=>{
        cy.go('back');
        cy.wait(8000);
        cy.get('a').contains('More').click();
    })
})