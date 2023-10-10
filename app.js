const shapes = [
    {
        name:"square",
        sides:"four",
        equalsides:true,
        equalangles:true,
        smelly:false,
        DOB:2007,
        spouse:null,
        siblings:["tink", "tonk"],
        },
    {
        firstname:"Vincent",
        lastName:"Meimei",
        graduated:false,
        intelligent:false,
        smelly:false,
        DOB:2007,
        spouse:null,
        siblings:["victor", "veronica"],
        },
    {
        firstname:"pizza",
        lastName:"chicken",
        graduated:false,
        intelligent:false,
        smelly:false,
        DOB:2007,
        spouse:null,
        siblings:["victor", "veronica"],
        age:function () {
            return year-this.DOB;
        },
    },
    {
        firstname:"pasta",
        lastName:"pork",
        graduated:false,
        intelligent:false,
        smelly:false,
        DOB:2007,
        spouse:null,
        siblings:["victor", "veronica"],
        age:function () {
            return year-this.DOB;
        },
    },
    ];
    
    
    students.forEach((student) => console.log(student.firstname));
    