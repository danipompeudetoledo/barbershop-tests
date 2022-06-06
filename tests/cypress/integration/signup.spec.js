import signupFactory from "../factories/signupFactory";
import userFactory from "../factories/userFactory";

import SignupPage from "../support/pages/signup";




describe('Signup', () => {

    it.only('Faça seu cadastro', () =>{
        SignupPage.go
        let user = signupFactory.fakerUser();
        SignupPage.fillForm(user)
        SignupPage.submit()
        signup.toastAlert('Agora você pode fazer seu login no Samurai Barbershop!')


        
    });

    it.only('email inválido',()=>{
        SignupPage.go()
        let user = userFactory.user();
        SignupPage.fillForm(user)
        SignupPage.submit()

     
    })

    it('Senha inválida',()=>{
        SignupPage.go()
        let user = userFactory.user();
        SignupPage.fillForm(user)
        SignupPage.submit()
    })
     
    it('Campo nome vazio',()=>{
        SignupPage.go()
        let user = userFactory.user();
        SignupPage.fillForm(user)
        SignupPage.submit()
    
    })

    context.only('Required fields', function() {

        const messages = [
            {field:'name', output: alertErrorNome},
            
            {field:'email', output: alertErrorEmail},

            {field:'senha', output: alertErrorSenha},
            
        ]

        before(function() {
            singup.go();
            singup.submit();            
        });

        messages.forEach(function(msg){
            it( `${msg.field} is required` , () => {
                SignupPage.alertErrorShouldBe(msg.output)                
            });
        })
        

    })
  

    
    
});