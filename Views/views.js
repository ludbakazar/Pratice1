class View {
    static showError(error){
        console.log(error.message);
    }

    static showAllBank(data){
        console.log(data);
    }

    static showAddCustomers(newCostumer){
        console.log(`Customer ${newCostumer.name} added successfully`);
    }

    static showDeletedCustomers(deletedCustomer){
        console.log(`Customer with name ${deletedCustomer.name} deleted successfully`);
    }

    static showCustomers(customer){
        customer = customer.map((el) => {
            return {
                costumer: el.name,
                ktp: el.ktp,
                depositAmount : el.depositAmount,
            }
        })
        console.table(customer);
    }

}

module.exports = View