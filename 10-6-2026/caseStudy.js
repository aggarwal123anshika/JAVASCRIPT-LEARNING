let visitors = [
    {
        visitorsName : 'akshu',
        eventName : 'Birthday' ,
        gender: 'female',
        eventPlace : 'modinagar'
    },
    {
        visitorsName : 'anshu',
        eventName : 'celebrateday' ,
        gender: 'female',
        eventPlace : 'hapur'
    },
    {
        visitorsName : 'pokkiee',
        eventName : 'enjoyy' ,
        gender: 'male',
        eventPlace : 'delhi'
    },
    {
        visitorsName : 'anuu',
        eventName : 'goodday' ,
        gender: 'female',
        eventPlace : 'muradnagar'
    },
    {
        visitorsName : 'raju',
        eventName : 'sadday' ,
        gender: 'male',
        eventPlace : 'rajnagar'
    }
]
let filteredData = visitors.map((visitor)=> {
    console.log()
    if(visitor.gender == 'male') {
        return "Mr."+ visitor.visitorsName;
    }
    else if (visitor.gender == 'female') {
        return "Mrs." + visitor.visitorsName;
    }
})
console.log(filteredData);