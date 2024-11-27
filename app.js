let a=0;
let b=0;
let c=0;
let d=0;
let e=0;

let a1=0;
let b1=0;
let c1=0;
let d1=0;
let e1=0;

let a2=0;
let b2=0;
let c2=0;
let d2=0;
let e2=0;

let table=document.getElementById("table");
let card=document.getElementById("card");

fetch("https://restcountries.com/v3.1/all ")
.then(res=>res.json())
.then(data=>{
    console.log(data);
    data.forEach(element => {

        if (element.region=="Europe") {
           a++; 
        } else if (element.region=="Asia") {
            b++;  
            
        } else if (element.region=="Africa") {
            c++;  
            
        } else if (element.region=="Americas") {
            d++;  
            
        } else if (element.region=="Oceania") {
            e++;  
            
        }

        if (element.area<1000) {
            a1++; 
         } else if (element.area<2000) {
             b1++;  
             
         } else if (element.area<3000) {
             c1++;  
             
         } else if (element.area<4000) {
             d1++;  
             
         } else if (element.area<5000) {
             e1++;  
             
         }

         if (element.population<100000) {
            a2++; 
         } else if (element.population<200000) {
             b2++;  
             
         } else if (element.population<300000) {
             c2++;  
             
         } else if (element.population<400000) {
             d2++;  
             
         } else if (element.population<500000) {
             e2++;  
             
         }

         card.innerHTML+=`
        <ul class="list-group list-group-flush m-2 p-2 ">
          <li class="list-group-item text-white bg-black">${element.continents}</li>
          <li class="list-group-item">${element.timezones}</li>
          <li class="list-group-item">${element.capital}</li>
        </ul>         
         `

    });
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);

// chart 1
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Europe', 'Asia', 'Africa', 'Americas', 'Oceania'],
        datasets: [{
          label: 'Number of countries in region',
          data: [a, b, c, d, e],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // chart 2
    const ctx1 = document.getElementById('myChart1');

    new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: ['1000', '2000', '3000', '4000', '5000'],
        datasets: [{
          label: 'Country by Area',
          data: [a1, b1, c1, d1, e1],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // chart 3
    const ctx2 = document.getElementById('myChart2');

    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['100000', '200000', '300000', '400000', '500000'],
        datasets: [{
          label: 'Population chart',
          data: [a2, b2, c2, d2, e2],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

})


