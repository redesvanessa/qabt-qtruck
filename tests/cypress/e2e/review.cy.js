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
            name: 'food para review 1',
            details: 'descricao do food truck para review 1',
            opening_hours: '10 as 20 horas',
            open_on_weekends: false
        }
        
        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateFoodTruck(foodtruck)

        cy.uiLogin(user)


    });
});