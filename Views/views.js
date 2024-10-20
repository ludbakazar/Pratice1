class View {
    static showAllBank(data){
        console.log(data);
    }

    static showAddCustomers(newCostumer){
        console.log(`Customer ${newCostumer.name} added successfully`);
    }

    static showDeletedCustomers(deletedCustomer){
        console.log(`Customer with name ${deletedCustomer.name} deleted successfully`);
    }


}

module.exports = View