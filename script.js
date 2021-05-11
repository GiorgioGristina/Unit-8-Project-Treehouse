//global variables

let employees = [];
const urlAPI = `https://randomuser.me/api/?results=12&inc=name, picture,
email, location, phone, dob &noinfo &nat=US`
const gridContainer = document.querySelector('.grid-container');
const overlay = document.querySelector('.overlay');
const modalContainer = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');

// fetch data from API

fetch(urlAPI)
    .then(res => console.log(res.json()))
    
    .then(displayEmployees)
    .catch(err => console.log(err))





//function to dysplay the employ

function displayEmployees(employeeData){
    employees = employeeData;
    employeeHTML = '';

    employees.forEach((employee, index) =>{
        let name = employees.name;
        let email = employees.email;
        let city = employees.location.city;
        let picture = employees.picture;
        employeeHTML += `
            <div class="card" data-index='${index}'>
                <img class="avatar" src="${picture.large}" />
                <div class="text-container">
                    <h2 class="name">${name.first} ${name.last}</h2>
                    <p class="email">${email}</p>
                    <p class="address">${city}</p>
                </div>
            </div>
        `
    });
    gridContainer.innerHTML = employeeHTML;
}


// function to displayModal

function displayModal(index){
    

}