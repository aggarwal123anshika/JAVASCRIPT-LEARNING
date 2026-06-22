let users = [
    {
        userId: "ramgopal@gmail.com",
        userName: "RamehwarDayal",
        transactionId: "tri123"
    },
    {
        userId: "anshika@gmail.com",
        userName: "Anshika",
        transactionId: "tri124"
    },
    {
        userId: "aman@gmail.com",
        userName: "Aman",
        transactionId: "tri125"
    },
    {
        userId: "rohit@gmail.com",
        userName: "Rohit",
        transactionId: "tri126"
    },
    {
        userId: "priya@gmail.com",
        userName: "Priya",
        transactionId: "tri127"
    },
    {
        userId: "neha@gmail.com",
        userName: "Neha",
        transactionId: "tri128"
    },
    {
        userId: "vanshika@gmail.com",
        userName: "Vanshika",
        transactionId: "tri129"
    },
    {
        userId: "akanshi@gmail.com",
        userName: "Akanshi",
        transactionId: "tri130"
    },
    {
        userId: "shivam@gmail.com",
        userName: "Shivam",
        transactionId: "tri131"
    },
    {
        userId: "pokkiee@gmail.com",
        userName: "Pokkiee",
        transactionId: "tri132"
    }
];

let transactions = [
    { transactionId: "tri123", product: "Book", amount: 600 },
    { transactionId: "tri124", product: "Laptop", amount: 50000 },
    { transactionId: "tri125", product: "Mobile", amount: 20000 },
    { transactionId: "tri126", product: "Shoes", amount: 2500 },
    { transactionId: "tri127", product: "Bag", amount: 1500 },
    { transactionId: "tri128", product: "Watch", amount: 3000 },
    { transactionId: "tri129", product: "Headphone", amount: 1800 },
    { transactionId: "tri130", product: "Keyboard", amount: 1200 },
    { transactionId: "tri131", product: "Mouse", amount: 700 },
    { transactionId: "tri132", product: "Camera", amount: 35000 }
];

function getUser(userId, callback) {
    setTimeout(() => {
        let user = users.find(
            (u) => u.userId === userId
        );

        console.log("User Found:");
        console.log(user);

        callback(user);
    }, 5000);
}

function getTransaction(transactionId, callback) {
    setTimeout(() => {
        let transaction = transactions.find(
            (t) => t.transactionId === transactionId
        );

        console.log("Transaction Found:");
        console.log(transaction);

        callback(transaction);
    }, 5000);
}

function displayTransactionDetail(user, transaction) {
    console.log("------ Transaction Detail ------");
    console.log("User Name :", user.userName);
    console.log("Email     :", user.userId);
    console.log("Product   :", transaction.product);
    console.log("Amount    :", transaction.amount);
}

getUser("anshika@gmail.com", (user) => {

    getTransaction(user.transactionId, (transaction) => {

        displayTransactionDetail(user, transaction);

    });

});