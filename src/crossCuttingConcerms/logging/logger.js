export class BaseLogger {
    log(data) {
        console.log("Default logger" + data)
    }
}

export class ElasticLogger extends BaseLogger {
    log(data) {
        console.log("Logged to elastic" + data)
    }
}

export class MongoLogger extends BaseLogger {
    log(data) {
        console.log("Logged to Mongo" + data)
    }
}


