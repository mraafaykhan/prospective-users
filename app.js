const dataStore = {

    users: {

    },

    prospectiveUsers: {

    }
// pos 1
    // users: []
    // prospectiveUsers: [{phoneNumber, friend: }]

// Pos 2
    // users: {
    //     user-id:
    //     // friends: [] // friends not on ziina
    // }


    //
    

//  Pos 3 
    // prospectiveUsers = {
        // "phoneNumber": [users-which-are-on-ziina]

// }



}




const syncContacts = (userId, phoneNumbers) => { 
    
    // add a try-catch for failure
    if (!dataStore.users[userId]) {
        dataStore.users[userId] = {}
    }
    dataStore.users[userId].contacts = phoneNumbers

    for (let number of phoneNumbers) {
        if (!isZiinaUser(number)) {
            if (!dataStore.prospectiveUsers[number]) {
                dataStore.prospectiveUsers[number] = []
            }
            if(!dataStore.prospectiveUsers[number].find(n => n === userId))
             dataStore.prospectiveUsers[number] =  [...dataStore.prospectiveUsers[number], userId]
        }
    }

    return true
}



const prospectiveUsers = (userId) => {
    const friends = dataStore.users[userId].contacts

    const friendsNotOnZinna = friends.filter(number => !isZiinaUser(number))

    const result = friendsNotOnZinna.map(number => {

        return {
            phoneNumber: number,
            prospectiveUsers: dataStore.prospectiveUsers[number].length
        }
    })
   
    return {
        prospectiveUsers: result
    }

}



// Uncomment to check if user is in the datastore
// const isZiinaUser = (phoneNumber) => {
//     return !!dataStore.users[phoneNumber]
// }


const isZiinaUser = (phoneNumber) => {
    return false
}

syncContacts('123', ['321', '555', '666', '789'])
console.log(prospectiveUsers('123'))
syncContacts('999', ['321', '551', '661', '781'])
console.log(prospectiveUsers('999'))


syncContacts('321', ['321', '555', '666'])
console.log(prospectiveUsers('123'))

console.log(prospectiveUsers('123'))
console.log(prospectiveUsers('321'))



// syncContacts('321', ['321', '555', '666', '789'])
// console.log(prospectiveUsers('321'))







