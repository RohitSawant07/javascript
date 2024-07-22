const accountId = 144553 //This is to lock the value, it should be used when we don't want to change the value
let accountEmail = "rohitsawant@gmail.com" // The problem we had with var, was modified in the let.
var accountPassword = "12345" // Ignore this variable type, not best practice
accountCity = "Pune" // not a good way, just a possibility
let accountState // if declared and not initiated the the default value considered by javascript is 'undefined'

// accountId = 2 // This will give you error because this is const, Assignment to constant variable.

accountEmail = "test@test.com"
accountPassword = "12345"
accountCity = "Mumbai"


console.table([accountId, accountEmail, accountPassword, accountCity, accountState, typeof accountCity])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
