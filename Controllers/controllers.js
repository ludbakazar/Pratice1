const Model = require("../Models/models")
const View = require("../Views/views")

class Controller {
    static async list(){
        const banks =await Model.readBank()
        View.showAllBank(banks)
    }

    static async addCustomer(idBank, name, ktp, depositAmount){
        try {
            const newCustomer = await Model.creatCustomers(idBank, name, ktp, depositAmount)
            View.showAddCustomers(newCustomer)
        } catch (error) {
            View.showError(error)
        }
    }

    static async deleteCustomer(idBank, ktp){
        try{
            const deletedCustomer = await Model.deleteCustomer(idBank, ktp)
            View.showDeletedCustomers(deletedCustomer)
        } catch (error){
            View.showError(error)
        }
    }

    static async detailByid(idBank){
        const customer = await Model.detailById(idBank)
        View.showCustomers(customer)
    }

}

module.exports = Controller