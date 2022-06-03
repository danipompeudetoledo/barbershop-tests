import signupFactory from "../factories/signupFactory";
import signup from "../support/pages/signup";


describe('Signup', () => {

    it('Faça seu cadastro', () => {
        signup.go()
        let user = signupFactory.user()
        signup.fillForm(user)
        signup.submit()


        
    });
    
});