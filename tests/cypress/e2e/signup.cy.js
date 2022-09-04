import { cypressBrowserPermissionsPlugin } from 'cypress-browser-permissions';
import signupPage from '../support/pages/Signup'


describe('Signup', () => {

    it('deve cadastrar um novo usuario', () => {
        const user = {
            name: 'Beca',
            instagram: '@becca',
            password: 'qacademy'
         }
        
        //Aqui chama o Banco de DADOS 
        // cy.deleteMany({instagram: user.instagram}, {collection: 'users'}).then(res => {
        //     cy.log(res)
        // })
        cy.apiResetUser(user.instagram)
        signupPage.go()
        signupPage.form(user)
        signupPage.submit()

        signupPage.modal.haveText('Agora você pode recomendar e/ou avaliar Food trucks.')
    });

    it('nao deve cadastrar com instagram duplicado', () => {
        const user = {
            name: 'Jacquin',
            instagram: '@jaquin',
            password: 'qacademy'
         }
        
        cy.apiCreateUser(user)

        signupPage.go()
        signupPage.form(user)
        signupPage.submit() 
        signupPage.modal.haveText('Instagram já cadastrado!')
    });
    
});





