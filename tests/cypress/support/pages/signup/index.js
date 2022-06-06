
 import {elSignup} from '.elements'
 import { elHome } from '../home/elements';

class SignupPage{

    go(){
        cy.visit('http://localhost:3000/signup');
        cy.get(elSignup.assertignupPage).should('have.text','Faça seu cadastro');

    }

    fillForm(user){

        cy.get(elSignup.name).type(user.name);
        cy.get(elHome.email).type(user.email);
        cy.get(elHome.password).type(user.password);

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

    alertErrorShouldBe(expectedMessage){
        cy.get(elSignup.alertErrorNome).should('be.visible', expectedMessage)
        cy.get(elSignup.alertErrorEmail).should('be.visible', expectedMessage)
        cy.get(elSignup.alertErrorSenha).should('be.visible', expectedMessage)
        cy.contains('elSignup.required-error', 'expectedMessage').should('be.visible');
    }




}
export default new SignupPage()

