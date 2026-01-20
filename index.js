const user={
    firstname:"Kanishak",
    lastname:"Goel",
    fullname()
    {
        console.log("Hello world");
        return this.firstname+" "+this.lastname;
    }
}

const my_name=user.fullname();
console.log(my_name)
console.log(user.fullname)