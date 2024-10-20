class Bank {
    constructor(id, name, type, limit, customers = []) {
        this.id = id,
        this.name = name,
        this.type = type,
        this.limit = limit,
        this.customers = customers
    }

    static createBankData(rawData) {
        return rawData.map((el) => {
            const customer = el.customers.map((i) => {
                return new Customer (i.name, i.ktp, i.depositAmount)
            })
            
            if ( el.type === "LocalBank"){
                return new LocalBank (el.id, el.name, customer)
            }

            if ( el.type === "NationalBank"){
                return new NationalBank (el.id, el.name, customer)
            }
        })
    }

    toJson(){
        return {
            id : this.id,
            name : this.name,
            type : this.type,
            costumers : this.costumers
        }
    }
}

class LocalBank extends Bank {
    constructor(id, name, customers = []) {
        super ( id, name, "LocalBank", 3, customers )
    }
}

class NationalBank extends Bank {
    constructor(id, name, customers = []) {
        super (id, name, 'NationalBank', 5, customers)
    }
}

class Customer {
    #ktp;
    #depositAmount;
    constructor(name, ktp, depositAmount){
        this.name = name,
        this.#ktp = ktp,
        this.#depositAmount = +depositAmount
    }

    toJSON(){
        return {
            name : this.name,
            ktp : this.#ktp,
            depositAmount : this.#depositAmount
        }
    }
}

module.exports = {
    Bank,
    LocalBank,
    NationalBank,
    Customer
}