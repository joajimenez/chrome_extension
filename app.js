let myLeads = [];
const inputEl = document.getElementById('input-el');
const saveBtn = document.getElementById('save-btn');
const ulEl = document.getElementById('ul-el');
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));
const deleteBtn = document.getElementById('delete-btn');

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

saveBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  inputEl.value = '';

  localStorage.setItem('myLeads', JSON.stringify(myLeads));

  renderLeads();
  console.log(myLeads);
});

deleteBtn.addEventListener('click', function () {
  clearLocalStorage();
  clearMyLeads();
  clearTheDom();
});

function renderLeads() {
  let listItems = '';
  for (let i = 0; i < myLeads.length; i++) {
    //   const li = document.createElement('li');
    //   li.textContent = myLeads[i];
    //   ulEl.append(li);

    listItems += `<li>
                     <a target="_blank" href="http://${myLeads[i]}" >
                     ${myLeads[i]}
                     </a>
                  </li>`;
  }
  ulEl.innerHTML = listItems;
}

function clearLocalStorage() {
  localStorage.clear();
}

function clearMyLeads() {
  myLeads = [];
}

function clearTheDom() {
  ulEl.innerHTML = '';
}

// function clearTheDom() {}

// f, t, t, f, t, t

// console.log(myLeads);

// myLeads = JSON.parse(myLeads);
// console.log(myLeads);

// myLeads.push('www.mozilla.com');
// console.log(myLeads);

// myLeads = JSON.stringify(myLeads);
// console.log(myLeads);

// console.log(typeof myLeads);

// localStorage.setItem('myName', 'Joan Jimenez');
// let name = localStorage.getItem('myName');
// console.log(name);

// const newLead = `www.awesomelead.com`;
// const box = document.getElementById('box');
// box.addEventListener('click', () => {
//   console.log(`I want to open the box!`);
// });

// box.innerHTML = "<button onclick='buy()'>Buy!</button>";

// function buy() {
//   box.innerHTML += '<p>Thank you for buying!</p>';
// }
