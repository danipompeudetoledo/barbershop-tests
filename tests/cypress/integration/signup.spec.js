import signupFactory from "../factories/signupFactory";
import userFactory from "../factories/userFactory";
import SignupPage from "../support/pages/signup";


describe('Signup', () => {

    it('Faça seu cadastro', () =>{
        SignupPage.go()
        let user = signupFactory.fakerUser();
        SignupPage.fillForm(user)
        SignupPage.submit()
        signup.toastAlert('Agora você pode fazer seu login no Samurai Barbershop!')


        
    });

    it('email inválido',()=>{
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

    context('Required fields', function() {

        const messages = [
            {field:'Nome'},
            
            {field:'E-mail'},

            {field:'Senha'},
            
        ]

        before(function() {
            SignupPage.go();
            SignupPage.submit();            
        });

        messages.forEach(function(msg){
            it.only( `${msg.field} is required` , () => {
                SignupPage.alertErrorShouldBe(msg.field)                
            });
        })
        

    })

    it('voltar para o login', ()=>{
        SignupPage.go()

        SignupPage.backToLogin();
    })
  

    
    
});