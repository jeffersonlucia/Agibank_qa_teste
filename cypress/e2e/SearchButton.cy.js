it('Deve acessar portal da Blog Agi', () => { 
    cy.viewport(1920, 1080)
        .visit('https://blogdoagi.com.br/')
        .get('#site-branding > .custom-logo-wrap > .custom-logo-link > .custom-logo')
})



it('Deve acionar a lupa de pesquisa', () => {
    cy.viewport(1920, 1080)
        .visit('https://blogdoagi.com.br/')
        .get('#search-open')
        .click()

    //o painel suspenso de pesquisa deverá ser localizado na tela
    cy.get('.desktop-search > .search-form > label > .search-field').should('be.visible')
})



it('Deve esconder a lupa de pesquisa', () => {
    cy.viewport(1920, 1080)
        .visit('https://blogdoagi.com.br/')
        .get('#search-open')
        .click()

    //o painel suspenso de pesquisa deverá ser localizado na tela
    cy.get('.desktop-search > .search-form > label > .search-field')
        .should('be.visible')

    cy.get('#search-open').click()
    
    //o painel suspenso de pesquisa não deverá ser localizado na tela
    cy.get('.desktop-search > .search-form > label > .search-field')
        .should('not.be.visible')
})


it('Deve atualizar a pagina com a lupa de pesquisa acionada', () => {
    cy.viewport(1920, 1080)
        .visit('https://blogdoagi.com.br/')
        .get('#search-open').click()
    
    //o painel suspenso de pesquisa deverá ser localizado na tela
    cy.get('.desktop-search > .search-form > label > .search-field')
        .should('be.visible')
        .reload()

    //o painel suspenso de pesquisa não deverá ser localizado na tela
    cy.get('.desktop-search > .search-form > label > .search-field')
        .should('not.be.visible')  
})

it('Deve realizar uma busca vazia no campo de busca', () => {
    cy.viewport(1920, 1080)
        .visit('https://blogdoagi.com.br/')
        .get('#search-open')
        .click()
    
    //o painel suspenso de pesquisa deverá ser localizado na tela
    cy.get('.desktop-search > .search-form > label > .search-field')
        .should('be.visible')
        .get('.desktop-search > .search-form > .search-submit')
        .click()
        .get('span > button')
        .should('be.visible')
})

it('Deve realizar uma busca com valores existentes no campo de busca', () => {
    cy.viewport(1920, 1080)
        .visit('https://blogdoagi.com.br/')
        .get('#search-open').click()
    
    //o painel suspenso de pesquisa deverá ser localizado na tela
    cy.get('.desktop-search > .search-form > label > .search-field')
        .should('be.visible')
        .get('.desktop-search > .search-form > label > .search-field')
        .type('teste')
        .get('.desktop-search > .search-form > .search-submit')
        .click()
    cy.contains('teste')
        .should('be.visible')
    
})


it('Deve realizar uma busca com valores inexistentes no campo de busca', () => {
    cy.viewport(1920, 1080)
        .visit('https://blogdoagi.com.br/')
        .get('#search-open').click()
    
    //o painel suspenso de pesquisa deverá ser localizado na tela
    cy.get('.desktop-search > .search-form > label > .search-field')
        .should('be.visible')
    cy.get('.desktop-search > .search-form > label > .search-field')
        .type('123456abcdef123')
    cy.get('.desktop-search > .search-form > .search-submit').click()
    cy.contains('Nenhum resultado').should('be.visible')
})

it('Deve realizar uma busca com valores inexistentes no campo de busca', () => {
    cy.viewport(1920, 1080)
        .visit('https://blogdoagi.com.br/')
        .get('#search-open').click()

    //o painel suspenso de pesquisa deverá ser localizado na tela
    cy.get('.desktop-search > .search-form > label > .search-field').should('be.visible')
    cy.get('.desktop-search > .search-form > label > .search-field').type('123456abcdef123')
    cy.get('.desktop-search > .search-form > .search-submit').click()
})

it('Deve realizar uma busca com valores inexistentes no campo de busca', () => {
    cy.viewport(1920, 1080)
        .visit('https://blogdoagi.com.br/')
        .get('#search-open')
        .click()
})

it('Deve excluir valores de busca anteriores', () => {
    cy.viewport(1920, 1080)
        .visit('https://blogdoagi.com.br/')
        .get('#search-open')
        .click()
        .get('.desktop-search > .search-form > label > .search-field')
        .clear()
})
