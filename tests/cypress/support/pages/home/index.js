import {elHome} from './elements'

class HomePage{
    go(){
        cy.visit('/');
        cy.get(elHome.assertHome).should('have.text','Faça seu login');


    }

    fillLogin(){

    }

    submit(){

    }
}

export default new HomePage()