import mapPage from '../support/pages/Map'
import createPage from '../support/pages/Create'



describe('Recomendacao', () => {
    
    it('recomendar um food truck', () => {
        const user = {
            name: 'Benson',
            instagram: '@benson',
            password: 'qacademy'
        }
        const foodtruck = {
            latitude: '-23.5845548837854058',
            longitude: '-46.674446913517876',
            name: 'food truck 1',
            details: 'descricao do food truck 1',
            opening_hours: '14 as 20 horas',
            open_on_weekends: 'Não'
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)            

        mapPage.createLink()
        createPage.form(foodtruck)
        createPage.submit()
        createPage.Modal.haveText('Food truck cadastrado com sucesso!')
        
        
        cy.wait(5000)
    });


}); 