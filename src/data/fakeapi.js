// Taken from Robin Wieruch blogpost - https://www.robinwieruch.de/javascript-fake-api
const { v4: uuidv4 } = require('uuid');

const idOne = uuidv4();
const idTwo = uuidv4()

const users = {
    [idOne]: { id: idOne, 
               firstName: 'Bob', 
               lastName: 'Jones', 
               isDeveloper: false},
    [idTwo]: { id: idTwo, 
               firstName: 'Jimmy', 
               lastName: 'Dilbert', 
               isDeveloper: true},
}

const getUsers = () => {
    return new Promise((resolve, reject) => {
        if (!users) {
            return setTimeout(() => reject(new Error('No users found')),250) 
        }
        setTimeout(() => resolve(Object.values(users)), 250)
    })
}

const doGetUsers = async () => {
    try {
       const result = await getUsers()
       console.log(result)
    } catch (error) {
       console.log(error)
    }
};

doGetUsers()






