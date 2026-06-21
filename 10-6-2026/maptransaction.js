let transactions = [
    {
        transId : 200,
        amount : 10000,
        userId : 101,
        date : 29-3-26
    },
    {
        transId : 300,
        amount : 20000,
        userId : 201,
        date : 24-3-26
    },
    {
        transId : 500,
        amount : 16000,
        userId : 601,
        date : 29-4-26
    },
    {
        transId : 700,
        amount : 17000,
        userId : 401,
        date : 24-3-26
    },
    {
        transId : 800,
        amount : 80000,
        userId : 801,
        date : 29-8-26
    }
]
let filteredData = transactions.map((transaction)=>{
    let data = transaction.transId +" " + transaction.userId;
    return data;
})
console.log(filteredData);
