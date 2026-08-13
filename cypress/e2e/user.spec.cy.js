import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButtonField: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongcredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    lastNameField: '[name="lastName"]',
    middleNameField: '[name="middleName"]',
    genericField: '.oxd-input--active',
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton:"[type='submit']",
    comboBox:".oxd-select-text-input",
    dataBirth:"[placeholder='yyyy-dd-mm']",
    genderRadio: ".oxd-radio-input"

    

  }
  const userData ={
    userSucess:{
      username:'Admin',
      password: 'admin123'
    },
    userFail:{
      username:'Test',
      password:'test'

    },
 
  }

  it('login_sucess', () => {
   cy.visit('/auth/login')
   cy.get(selectorsList.usernameField).type(userData.userSucess.username)
   cy.get(selectorsList.passwordField).type(userData.userSucess.password)
   cy.get(selectorsList.loginButtonField).click()
   cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
   cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')

  })

  it('login_fail', () => {
   cy.visit('/auth/login')
   cy.get(selectorsList.usernameField).type(userData.userFail.username)
   cy.get(selectorsList.passwordField).type(userData.userFail.password)
   cy.get(selectorsList.loginButtonField).click()
   cy.get(selectorsList.wrongcredentialAlert)
   
  
  })
  it.only('User Info Update -Sucess', () => {
   cy.visit('/auth/login')
   cy.get(selectorsList.usernameField).type(userData.userSucess.username)
   cy.get(selectorsList.passwordField).type(userData.userSucess.password)
   cy.get(selectorsList.loginButtonField).click()
   cy.location('pathname',{timeout:10000})
   .should('eq','/web/index.php/dashboard/index')
   cy.get(selectorsList.dashboardGrid)
   cy.get(selectorsList.myInfoButton).click()
   cy.get(selectorsList.firstNameField).clear().type('André')
   cy.get(selectorsList.lastNameField).clear().type('Freitas') 
   cy.get(selectorsList.middleNameField).clear()
   cy.get(selectorsList.genericField).eq(3).clear().type('EmpleTest')   
   cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdtest')
   cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseTest')
   cy.get(selectorsList.genericField).eq(6).clear().type('2026-08-20')
   cy.get(selectorsList.dateCloseButton).click()
   cy.get(selectorsList.comboBox).eq(0).click()
   cy.get('body').type('b'.repeat (14))
   cy.get(selectorsList.comboBox).eq(0).should('have.text', 'Brazilian')
   cy.get(selectorsList.comboBox).eq(1).click(0)
   cy.get('body').type('m')
   cy.get(selectorsList.comboBox).eq(1).should('have.text', 'Married')
   cy.get(selectorsList.dataBirth).eq(1).clear().type('1984-05-20')
   cy.get(selectorsList.dateCloseButton).click()
   cy.get(selectorsList.genderRadio).eq(0).click()
   cy.get("input[type='radio']").eq(0).should('be.checked')
   cy.get(selectorsList.submitButton).eq(0).click()
   cy.get('.oxd-toast-content')
  
  

  }
  
   
  )
}) 
   