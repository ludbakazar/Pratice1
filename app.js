const Controller = require("./Controllers/controllers");

const command = process.argv[2]

switch (command) {
    case "list":
        Controller.list()
        break;
    case "addCustomer":
        const [ idBank, name, ktp, depositAmount] =  process.argv.slice(3);
        Controller.addCustomer(idBank, name, ktp, depositAmount)
        break;
    case "deleteCustomer":
        {
        const [ idBank, ktp] =  process.argv.slice(3);
        Controller.deleteCustomer(idBank, ktp)
        break;
        }

    default:
        break;
}