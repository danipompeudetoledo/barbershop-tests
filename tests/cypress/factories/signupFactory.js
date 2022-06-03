let faker = require('faker')

export default{

    user: function(){

        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();


        let data = {
            name:`${firsName} ${lastName}` ,
            email: faker.internet.email(firstName),
            password: 'Test123'

        }

        return data
    }

  

}