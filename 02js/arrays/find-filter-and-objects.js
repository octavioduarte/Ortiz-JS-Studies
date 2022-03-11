const usersDB = [
    {
        age: 22,
        name: "Octávio",
        job: "Developer"        
    },
    {
        age: 20,
        name: "Michelly",
        job: "Developer"        
    },
    {
        age: 30,
        name: "Ricardo",
        job: "Manager"        
    },
    {
        age: 11,
        name: "Rodrigo",
        job: "Student"        
    }
]


const firstMatch = usersDB.find(function(user) {
    return user.job === "Developer"
})

const allUsersDevelopers = usersDB.filter(function(user) {
    return user.job === "Developer"
})


console.log({firstMatch, allUsersDevelopers})




