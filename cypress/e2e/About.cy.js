describe('About form', () => {
    beforeEach(() => {
        cy.visit('/about');
      });
    it('About form exist', () => {

        cy.get('[data-test="About-header"]').should('exist')

        // Click 'About' to verify navigation
        cy.get('[data-test="About-form"]').click()


        })
        it('About header should exist', () => {
            cy.get('[data-test="About-header"]')
            .should('be.visible')
            .and('contain.text', 'About');
        })
        it('About text should exist', () => {
            cy.get('[data-test="About-intro"]')
            .should('be.visible')
            .and('contain.text', 'Hi. I\'m Moses Orucho')


            })
            it('Bio text should exist', () => {
                cy.get('[data-test="developer-bio"]')
                .should('be.visible')
                .and('contain.text', 'Experienced backend developer with expertise in Java, Python, Django, and Delphi.');


                })




    })