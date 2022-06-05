import signupFactory from "../factories/signupFactory";

import SignupPage from "../support/pages/signup"


describe('Signup', () => {

    it.only('Faça seu cadastro', function(){
        SignupPage.go
        let user = signupFactory.fakerUser();
        SignupPage.fillForm(user)
        SignupPage.submit()
        signup.toastAlert('Agora você pode fazer seu login no Samurai Barbershop!')


        
    });

    
    
});