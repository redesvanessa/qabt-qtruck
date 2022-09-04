import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'


describe('Login', () => {

  beforeEach(() => {
    cy.visit('/')
  });

  it('deve logar com sucesso', () => {

    const user = {
      name: 'xxx',
      instagram: '@xxx',
      password: 'qacademy'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    mapPage.loggedUser(user.name)

  })

  it('não deve logar com senha incorreta', () => {
    const user = {
      instagram: '@xxx',
      password: 'qacadem'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')

  });

  it('não deve logar com instagram inexistente', () => {
    const user = {
      instagram: '@naoexiste',
      password: 'qacademy'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  });

  it('não deve logar com instagram no formato incorreto', () => {
    const user = {
      instagram: '$naoexiste',
      password: 'qacademy'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  });

  it('todos os campos são obrigatórios', () => {
    const user = {
      instagram: '',
      password: ''
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe suas credenciais!')
  });

  it('senha deve ser obrigatória', () => {
    const user = {
      instagram: '$xxx',
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')
  });

  it('instagram deve ser obrigatório', () => {
    const user = {
      password: 'qacademy'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')
  });
})
//




