const os = require('os')

const user = os.userInfo()
console.log(user)

console.log(`the system uptime is ${os.uptime()} seconds`)

const curos = {
    name : os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemen : os.freemem()
}

console.log(curos)