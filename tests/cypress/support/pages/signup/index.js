
 import {elSignup} from '.elements'
 import { elHome } from '../home/elements';

class SignupPage{

    go(){
        cy.visit('http://localhost:3000/signup');
        cy.get(elSignup.assertignupPage).should('have.text','Faça seu cadastro');

    }

    fillForm(fakerUser){

        cy.get(elSignup.name).type(fakerUser.name);
        cy.get(elHome.email).type(fakerUser.email);
        cy.get(elHome.password).type(fakerUser.password);

    }

    submit(){
        cy.contains(elHome.submit,'Cadastrar').should('be.visible').click()

    }

    toastAlert(messageExpect){
        cy.get('.toast')
        .should('be.visible')
        .find('p')
        .should('have.text', messageExpect);
    }




}
export default new SignupPage()

