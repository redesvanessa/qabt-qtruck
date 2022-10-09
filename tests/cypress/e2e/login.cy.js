import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'
import users from '../fixtures/login-users.json'

describe('Login', () => {

  // beforeEach(() => {
  //   //cy.visit('/')
  //   cy.fixture('login-users').then(function(users) {
  //     this.users = users
  //   })
  // });

  it('deve logar com sucesso',  () => {

    const user = users.success
    
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    mapPage.loggedUser(user.name)

  })

  it('não deve logar com senha incorreta', () => {
   
    const user = users.inv_pass

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')

  });

  it('não deve logar com instagram inexistente', () => {

    const user = users.inv_inst

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  });

  it('não deve logar com instagram no formato incorreto', () => {

    const user = users.not_valid_inst

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  });

  it('todos os campos são obrigatórios', () => {

    const user = users.all_fields_mandatory

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe suas credenciais!')
  });

  it('senha deve ser obrigatória', () => {
    
    const user = users.pass_mandatory

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')
  });

  it('instagram deve ser obrigatório', () => {
    const user = users.inst_mandatory

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')
  });
})
//




