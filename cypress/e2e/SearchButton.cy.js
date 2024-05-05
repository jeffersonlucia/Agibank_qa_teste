it('Deve acessar portal da Blog Agi', () => { 
    cy.viewport(1920, 1080)
        .visit('https://blogdoagi.com.br/')
        cy.get('.site-header-above-section-left > .ast-builder-layout-element > .site-branding > .site-logo-img > .custom-logo-link > .custom-logo')
        .should('be.exist')
})



it('Deve acionar a lupa de pesquisa', () => {
    cy.viewport(1920, 1080)
        .visit('https://blogdoagi.com.br/')
        cy.get('.site-header-above-section-right > .ast-builder-layout-element')
        .click()

    //o portlet de pesquisa deverá ser localizado na tela
    cy.get('#search-field')
    .should('be.visible')
})



it('Deve esconder a lupa de pesquisa', () => {
    cy.viewport(1920, 1080)
        cy.visit('https://blogdoagi.com.br/')
        cy.get('.site-above-header-wrap')
        .click()

    //o portlet de pesquisa não deverá ser localizado na tela
    cy.get('.desktop-search > .search-form > label > .search-field')
        .should('not.be.exist')
})


it('Deve atualizar a pagina com a lupa de pesquisa acionada', () => {
    cy.viewport(1920, 1080)
   cy.visit('https://blogdoagi.com.br/')
    cy.get('.site-above-header-wrap')
    .click()

    cy.reload()
    
     //o portlet de pesquisa não deverá ser localizado na tela
     cy.get('.desktop-search > .search-form > label > .search-field')
     .should('not.be.exist')


})

it('Deve realizar uma busca vazia no campo de busca', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://blogdoagi.com.br/')
    cy.get('.site-header-above-section-right > .ast-builder-layout-element')
    .click()

    cy.get('#search-field')
.type('{enter}')

//resultado da pesquisa
cy.get('.ast-archive-description')
.contains('Resultados encontrados para:')
})

it('Deve realizar uma busca com valores existentes no campo de busca', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://blogdoagi.com.br/')
    cy.get('.site-header-above-section-right > .ast-builder-layout-element')
    .click()

    cy.get('#search-field')
    .type('Como fazer agendamento no CRAS: confira guia completo')
    .type('{enter}')
    
    //obtem elemento da busca
    cy.get('.post-content')
    .contains('Como fazer agendamento no CRAS: confira guia completo')
    
})


it('Deve realizar uma busca com valores inexistentes no campo de busca', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://blogdoagi.com.br/')
        cy.get('.site-header-above-section-right > .ast-builder-layout-element')
        .click()
    
        cy.get('#search-field')
        .type('guarda sol')
        .type('{enter}')
        
        //obtem elemento da busca
        cy.get('.no-results')
        .contains('Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.')
        
})

it('Deve realizar uma busca com valores existentes no campo de busca após uma busca inexistente', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://blogdoagi.com.br/')
    cy.get('.site-header-above-section-right > .ast-builder-layout-element')
    .click()

    cy.get('#search-field')
    .type('guarda sol')
    .type('{enter}')
    
    //obtem elemento da busca
    cy.get('.no-results')
    .contains('Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.')

    //informa valor de busca no novo portlet de busca
    cy.get('.widget > .search-form > label > #search-field')
    .type('Como fazer agendamento no CRAS: confira guia completo')
    .type('{enter}')

    
    
})



