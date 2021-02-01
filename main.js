var form = document.getElementById('Form')

form.addEventListener('submit', submitter)

var personList = {
    males: [
        {
            fname:"Pankaj",
            lname:"Tripathi",
            city:"London",
            gender:"Male"
        },
        {
            fname:"Peter",
            lname:"Russo",
            city:"New Delhi",
            gender:"Male"
        }
    ],
    females: [
        {
            fname:"Meera",
            lname:"Kumari",
            city:"Ottawa",
            gender:"Female"
        },
        {
            fname:"Zareen",
            lname:"Khan",
            city:"Wasseypur",
            gender:"Female"
        },
    ],
    others: [
        {
            fname:"Carrie",
            lname:"Mathison",
            city:"New York City",
            gender:"Others"
        }
    ]
}

class Person{
    
    constructor(fname,lname,city,gender){
        this.fname = fname
        this.lname = lname
        this.city = city
        this.gender = gender
    }

}

function submitter(event){
    event.preventDefault()
    let fname=document.getElementById('fname').value
    let lname=document.getElementById('lname').value
    let city=document.getElementById('city').value
    let gender=document.getElementById('gender').value
    
    switch(gender){
        case "Male" : personList.males.unshift(new Person(fname, lname, city, gender)) 
        break
        case "Female": personList.females.unshift(new Person(fname, lname, city, gender))
        break
        case "Others": personList.others.unshift(new Person(fname, lname, city, gender))
        break
        default: console.log("Error")
        break
    }  
        
    var total = personList.males.length + personList.females.length + personList.others.length
        
    if(total > 0){
        var males_part = personList.males.length/total*100
        var females_part = personList.females.length/total*100
        var others_part = personList.others.length/total*100
        
        var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Gender Analysis"
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: males_part, label: "Males"},
                {y: females_part, label: "Females"},
                {y: others_part, label: "Others"},
            ]
            }]
        });
        chart.render(); 
    }
}    


window.onload = function(){

    var total = personList.males.length + personList.females.length + personList.others.length

    var males_part = personList.males.length/total*100
    var females_part = personList.females.length/total*100
    var others_part = personList.others.length/total*100

    if(total > 0){    
    var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: false,
    title: {
        text: "Gender Analysis"
    },
    data: [{
        type: "pie",
        startAngle: 240,
        yValueFormatString: "##0.00\"%\"",
        indexLabel: "{label} {y}",
        dataPoints: [
            {y: males_part, label: "Males"},
            {y: females_part, label: "Females"},
            {y: others_part, label: "Others"},
        ]
    }]
    });
    chart.render(); 
    }
} 
