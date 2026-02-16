describe ('Intercept Fitur Login', () => {
    it('TC01- Login dengan username dan password yang valid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')

        cy.intercept('POST', '**/events/push').as('loginValid')

        cy.get('button[type="submit"]').click()

        cy.wait('@loginValid')

        cy.url().should('include', '/dashboard')
        cy.contains('Dashboard').should('be.visible')
    })
    it('TC02 - Login dengan password salah', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('salah123')

        cy.intercept('POST', '**/auth/validate').as('invalidLogin')

        cy.get('button[type="submit"]').click()

        cy.wait('@invalidLogin')

        cy.contains('Invalid credentials').should('be.visible')

    })
    it('TC03 - Login dengan username salah', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('admin123')

        cy.intercept('POST', '**/events/push').as('invalidLogin')

        cy.get('button[type="submit"]').click()

        cy.wait('@invalidLogin')

        cy.contains('Dashboard').should('be.visible')
    })
    it('TC04 - Login dengan username huruf kecil (case sensitive)', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('admin123')

        cy.intercept('POST', '**/events/push').as('caseSensitive')

        cy.get('button[type="submit"]').click()

        cy.wait('@caseSensitive')

        cy.contains('Dashboard').should('be.visible')
    })
    it('TC05 - Login dengan username dan password salah', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('Sdmin123')

        cy.intercept('POST', '**/auth/validate').as('invalidLogin')

        cy.get('button[type="submit"]').click()

        cy.wait('@invalidLogin')

        cy.contains('Invalid credentials').should('be.visible')
    })
    it('TC06 - Login dengan username kosong', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.intercept('GET', '**/core/i18n/messages').as('messages')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.wait('@messages')

        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        cy.contains('Required').should('be.visible')
    })
    it('TC07 - Login dengan password kosong', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.intercept('GET', '**/core/i18n/messages').as('messages')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.wait('@messages')
        
        cy.get('input[name="username"]').type('admin')
        cy.get('button[type="submit"]').click()
        cy.contains('Required').should('be.visible')
    })
})