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
            open_on_weekends: false
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)

        mapPage.createLink()
        createPage.form(foodtruck)
        createPage.submit()
        createPage.Modal.haveText('Food truck cadastrado com sucesso!')


        cy.wait(5000)
    });



    it('nao deve recomendar um food truck com nome duplicado', () => {
        const user = {
            name: 'Mario',
            instagram: '@mario',
            password: 'qacademy'
        }
        const foodtruck = {
            latitude: '-23.583654062428795',
            longitude: '-46.67752861976624',
            name: 'food truck 2',
            details: 'descricao do food truck 2',
            opening_hours: '15 as 19 horas',
            open_on_weekends: true
        }

        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateFoodTruck(foodtruck)

        cy.uiLogin(user)

        mapPage.createLink()
        createPage.form(foodtruck)
        createPage.submit()
        createPage.Modal.haveText('Esse food truck já foi cadastrado!')


        cy.wait(5000)
    });


    it('todos os campos sao obrigatorios', () => {
        it('recomendar um food truck', () => {
            const user = {
                name: 'Margarita',
                instagram: '@marga',
                password: 'qacademy'
            }
            const foodtruck = {
                latitude: '-23.5845548837854058',
                longitude: '-46.674446913517876',
            }

            cy.apiCreateUser(user)
            cy.uiLogin(user)

            mapPage.createLink()
            cy.setGeoLocation(foodtruck.latitude, foodtruck.longitude)
            createPage.submit()

            const message = 'Os campos nome, descrição e horário de funcionaento devem ser informados para recomendar um food truck!'
            createPage.Modal.haveText('Food truck cadastrado com sucesso!')
        });

    })
})