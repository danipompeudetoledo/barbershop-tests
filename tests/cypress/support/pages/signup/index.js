
 import {elSignup} from '.elements'

class Signup{

    go(){
        cy.visit('/signup');
        cy.get(elSignup.assertignupPage).should('have.text','Faça seu cadastro');

    }

    fillForm(user){

        cy.get('input[placeholder="Nome"]').type(user.name);
        cy.get('input[placeholder="E-mail"]').type(user.email);
        cy.get('input[placeholder="senha"]').type(user.password);

    }

    submit(){
        cy.get('button[type="submit"]').click()

    }




}
export default new SignupPage()

