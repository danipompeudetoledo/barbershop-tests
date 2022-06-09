import userFactory from '../factories/userFactory';
import HomePage from '../support/pages/home'

describe('home', () => {
    it('faça seu login', () => {
        HomePage.go()
        let user = userFactory.user();
        HomePage.fillLogin(user)
        HomePage.submit()

        
    });
    
});