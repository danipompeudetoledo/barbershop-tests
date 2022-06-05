import {elHome} from './elements'

class HomePage{
    go(){
        cy.visit('/');
        cy.get(elHome.assertHome).should('have.text','Faça seu login');


    }

    fillLogin(user){
        cy.get(elHome.email).type(user.email);
        cy.get(elHome.password).type(user.password);

    }

    submit(){
        cy.contains(elHome.submit,'Entrar').click()

    }
}

export default new HomePage()