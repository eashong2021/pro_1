context('Assertions', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/assertions')
    })
    describe('immplicit assertionss', () => {
        it('.should() - make assertion about the current subject', () => {

//   https://on.cypress.io/should
cy.get('tbody tr:last').should('have.class', 'success').find('td').first()


//Checking the text of the <td> element in various ways
.should('have.text', 'Column Content')
.should('contain', 'Column content')
.should('have.html', 'Column content')

// Should Match selector
.should('match', 'td')

//How to match text content against a regular expression - You must first ivoke jQery method text() and then match using regular expression
.invoke('text')
.should('match', /column content/i)


//a better way to check element's text content against a regular expression is to use "cy.contains" https://on.cypress.io/contains
cy.get('.assertion-table')
.find('tbody tr:last')

//finds first <td> element with text content matching regular expression 
.contains('td', /column content/i).should('be.vissible')
})

it('.and() - chain multiple assertions together', () => {
// https://on.cypress.io/and
cy.get('.assertion-link').should('have.class', 'active').and('have.attr', 'href').and('include', 'cypree.io')
}) 
 })
describe('explicit assertions', () => {
    it('expect - make an assertion about specific subject', () => {
        expect(true).to.be.true
        const o ={ foo: 'bar'}
        expect(o).to.equal(o)
        expect(o).to.deep.equal({ foo:'bar'})
        expect('FooBar').to.match(/bar$/i)
    })
    it('pass your own callback function to should()', () => {
        cy.get('.assertions-p').find('p')
        .should(($p) => {
            const texts = $p.map((i, el) => Cypress.$(el).text())

            const paragraphs = texts.get()
            
        })
    })
})
})