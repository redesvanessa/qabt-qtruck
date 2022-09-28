import mapPage from '../support/pages/Map'

describe('Avaliacoes', () => {
    
    it('deve enviar uma nova avaliacao', () => {
        const user = {
            name: 'Joselito Junior',
            instagram: '@joselito',
            password: 'qacademy'
        }

        const foodtruck = {
            latitude: '-23.5846642248123703',
            longitude: '-46.67472571134568',
            name: 'review1',
            details: 'descricao do food truck para review 1',
            opening_hours: '10 as 20 horas',
            open_on_weekends: false
        }
        
        const review = {
            comment: 'O suco tava OK',
            stars: 4
        }
        
        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateFoodTruck(foodtruck)

        cy.uiLogin(user)

        mapPage.goToFoodTruck(foodtruck.name)

        cy.get('textarea[name=comment]').type(review.comment)
        cy.get(`input[name=stars][value=${review.stars}]`)
            .click({force: true})
        cy.contains('button', 'Enviar avaliação').click()

    });
});