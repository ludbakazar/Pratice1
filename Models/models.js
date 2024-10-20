const {Bank, LocalBank, NationalBank, Customer } = require ("./class");
const fs = require("fs").promises
class Model {
    static async saveJSON(banks){
        const  data = JSON.stringify(banks, null, 2);
        await fs.writeFile("./Data/data.json", data);
    }

    static async readBank(){
        const rawData =  await fs.readFile("./Data/data.json", "utf-8")
        const data =  JSON.parse(rawData)
        const banks = Bank.createBankData(data)
        return banks
    }

    static async creatCustomers(idBank, name, ktp, depositAmount){
        const banks =  await Model.readBank()
        const banksIndex = banks.findIndex((el) =>  el.id === idBank)

        if ( banksIndex === -1){
            throw new Error("Bank not found")
        }

        if (banks[banksIndex].customers.length === banks[banksIndex.limit]){
            throw new Error("Customer limit reached")
        }

        const newCustomer = new Customer(name, ktp, depositAmount)
        banks[banksIndex].customers.push(newCustomer)
        this.saveJSON(banks)
        return newCustomer
    }

    static async deleteCustomer(idBank, ktp){
        const banks =   await Model.readBank()
        const banksIndex = banks.findIndex((el) => el.id === idBank)
        
        if  (banksIndex === -1 ) {
            throw new Error("Bank not found")
        }

        const customersIndex = banks[banksIndex].customers.findIndex((el) => el.ktp === ktp)
        
        if (customersIndex === -1 ) {
            throw new Error("Customer not found")
        }
        const deletedCustomer = banks[banksIndex].customers.splice(customersIndex, 1)
        this.saveJSON(banks)
        return deletedCustomer[0]
    }
}

module.exports =  Model;