let faker = require('faker')


export default{

    fakerUser: function(){

        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        


        let data = {
            name:`${firstName} ${lastName}` ,
            email: faker.internet.email(firstName),
            password: 'Test123'

        }

        return data
    }

  

}