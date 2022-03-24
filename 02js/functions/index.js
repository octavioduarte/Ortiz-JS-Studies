const usersDB = [
    {
        email: "octavio@email.com",
        password: 12345
    },
    {
        email: "michelly@email.com",
        password: 54321
    },
    {
        email: "ricardo@email.com",
        password: 38281
    },
    {
        email: "yasmin@email.com",
        password: 38381
    }
]


const credentialsForm = {
    email: "user@domain.com",
    passowd: 39392
}

function isValidEmail(email) {
    const emailHasAtSign = email.includes("@")

    if (emailHasAtSign) {
        const [name, domain] = email.split("@")

        return !!(name && domain)
    }

    return false
}


const result = isValidEmail(credentialsForm.email)
