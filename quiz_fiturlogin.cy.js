describe ('Fitur Login', () => {
    it('TC-01-Login dengan username dan password yang valid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/dashboard')
        cy.contains('Dashboard').should('be.visible')
    })
    
    it('TC02 - Login dengan password salah', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('salah123')
        cy.get('button[type="submit"]').click()
        cy.contains('Invalid credentials').should('be.visible')

    })
    it('TC03 - Login dengan username salah', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.contains('Dashboard').should('be.visible')
    })
    it('TC04 - Login dengan username huruf kecil (case sensitive)', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.contains('Dashboard').should('be.visible')
    })
    it('TC05 - Login dengan username dan password salah', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('Sdmin123')
        cy.get('button[type="submit"]').click()
        cy.contains('Invalid credentials').should('be.visible')
    })
    it('TC06 - Login dengan username kosong', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.contains('Required').should('be.visible')
    })
    it('TC07 - Login dengan username kosong', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('admin')
        cy.get('button[type="submit"]').click()
        cy.contains('Required').should('be.visible')
    })
})
