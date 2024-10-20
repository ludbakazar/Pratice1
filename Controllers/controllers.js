const Model = require("../Models/models")
const View = require("../Views/views")

class Controller {
    static async list(){
        const banks =await Model.readBank()
        View.showAllBank(banks)
    }

    static async addCustomer(idBank, name, ktp, depositAmount){
        const newCustomer = await Model.creatCustomers(idBank, name, ktp, depositAmount)
        View.showAddCustomers(newCustomer)
    }

    static async deleteCustomer(idBank, ktp){
        console.log(ktp);
    }
}

module.exports = Controller