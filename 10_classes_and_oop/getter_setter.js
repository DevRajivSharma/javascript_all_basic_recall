class User {

    /*
      Here when we want to define a property which need to acces through
      getter and setter than it should be start with "_" [recommended]
      since getter and setter propery name will be use as property
    */
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get getemail(){
        return this.email.toUpperCase()
    }
    set setemail(value){
        this.email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const rajiv = new User("rajiv@netflix.com", "abc")
//hitesh.setemail = "rajiv@netflix.com"
console.log(rajiv.getemail)