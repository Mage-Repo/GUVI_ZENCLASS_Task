var resumeJson = {
    name: "Magendran G.S",
    age: 24,
    contact: {
    email: "gsmagendran409@gmail.com",
    phone: "7397028872",
    address: {
    street: "RajaGardern",
    city: "Chennai",
    state: "TamilNadu",
    country: "India"
    }
    },
    skills: ["Dotnet","JavaScript","HTML","CSS","C#"],
    education: [
    {
    degree: "Master of Science in Computer Science",
    school: "Loyola College",
    year: 2021
    }
    ],
    experience: [
    {
    position: "Software Engineer",
    company: "Congurent Solution",
    year: 2021
    },
    ]
   
   }
   // for loop
   for (var key in resumeJson){
       console.log(key,resumeJson[key])
   }
   
   // forEach Loop
   resumeJson.skills.forEach(function(skill){
       console.log(skill)
   });