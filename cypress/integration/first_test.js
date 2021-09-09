/// <reference types="cypress" />



it('simlab', function(){

cy
.visit('https://staging-pikobar-lab.netlify.app')

cy
.get(':nth-child(1) > .form-control')
.type('superadmin_qa')

cy
.get(':nth-child(2) > .form-control')
.type('jabarjuara123',{waitForAnimations:true})

cy
.get('.btn')
.click({waitForAnimations:true})

cy
.get(':nth-child(4) > [href="#"] > .nav-label')
.click({waitForAnimations:true})

cy
.get('.active > .nav > :nth-child(2)')
.click({waitForAnimations:true})


cy.get('.ibox-content > :nth-child(1) > :nth-child(1) > :nth-child(1) > .form-control')
.type('R202108050002',{ waitForAnimations:true})


cy
.get('.col-md-12 > div > .btn-primary')
.click({waitForAnimations:true})

cy
.get('tbody > tr > :nth-child(3)')
.should('be.visible')


})