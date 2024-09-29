//prototype.call method:-
//                     The call() method allows function calls belonging to one object to
// be assigned and it is called for a different object. It provides a new value of this to
// the function. The call() method allows you to write a method once and allows it for
// inheritance in another object, without rewriting the method for the new object.

//---->Example:
function SetUsername(username) {
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password) {

    SetUsername(username)
    // SetUsername.call(this, username)   

    this.email = email
    this.password = password
}

const chai = new createUser("meet", "mpatel@gmail.com", "987")
console.log(chai);
