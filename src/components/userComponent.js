import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerms/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Component Loaded Yüklendi !")
let logger1 =new MongoLogger()

let userService = new UserService(logger1)

let user1 = new User(1,"Zehra","Alkan","İstanbul")
let user2 = new User(2,"Bulut","Aras","Bolu")
userService.add(user1)
userService.add(user2)


userService.getById(1)
userService.list()
console.log(userService.list())
console.log(userService.getById(2))


//prototyping: javascriptte sonradan değer ekleyebilriz 
let customer = { id: 1, firstName: "Zehra" }
customer.lastName = "Alkan"
//console.log(customer.lastName)