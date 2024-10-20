class View {
    static showAllBank(data){
        console.log(data);
    }

    static showAddCustomers(newCostumer){
        console.log(`Customer ${newCostumer.name} added successfully`);
    }
}

module.exports = View