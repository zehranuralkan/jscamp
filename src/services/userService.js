export default class UserService {
    constructor(loggerService) {
        this.users = []
        this.loggerService = loggerService
    }
    //export dışarıdan import edilebileceği 
    //default javascript filebase olduğu için  UserService import ettiğinde default olarak bunu import et demek 
    add(user) {
        this.users.push(user)
        this.loggerService.log(user)
    }

    list() {
        return this.users
    }

    getById(id) {
        return this.users.find(u=>u.id ==id)
    }
}

