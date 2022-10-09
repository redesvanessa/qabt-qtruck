import loginPage from '../pages/Login'
import mapPage from '../pages/Map'


Cypress.Commands.add('uiLogin', (user) => {

  loginPage.go('-23.5846642248123703','-46.67472571134568')
  loginPage.form(user)
  loginPage.submit()
  mapPage.loggedUser(user.name)

})

Cypress.Commands.add('setGeoLocation', (lat, long) => {
  localStorage.setItem('qtruck:latitude', lat)
  localStorage.setItem('qtruck:longitude', long)
})