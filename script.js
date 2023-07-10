function addNewEx() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows', 2);
    newNode.setAttribute('placeholder', 'Enter Another Work Experience');

    let weOb = document.getElementById('we');
    let weButtonOb = document.getElementById('weButton');
    weOb.insertBefore(newNode, weButtonOb);


}

function addNewAq() {
    let newNode1 = document.createElement('textarea');
    newNode1.classList.add('form-control');
    newNode1.classList.add('aqField');
    newNode1.classList.add('mt-2');
    newNode1.setAttribute('rows', 2);
    newNode1.setAttribute('placeholder', 'Enter Another Work Experience');

    let aqOb = document.getElementById('aq');
    let aqButtonOb = document.getElementById('aqButton');
    aqOb.insertBefore(newNode1, aqButtonOb);
}

function generateCV() {
    let nameField = document.getElementById('nameField').value;
    let name = document.getElementById('name');
    name.innerHTML = nameField;

    document.getElementById('name2').innerHTML = nameField;
    document.getElementById('contact').innerHTML = document.getElementById('contactField').value;

    document.getElementById('email').innerHTML = document.getElementById('emailField').value;

    document.getElementById('address').innerHTML = document.getElementById('addressField').value;

    document.getElementById('git').innerHTML = document.getElementById('gitField').value;
    document.getElementById('insta').innerHTML = document.getElementById('instaField').value;
    document.getElementById('linkedin').innerHTML = document.getElementById('LinkedInField').value;


    document.getElementById('objective').innerHTML = document.getElementById('objectiveField').value;

    let wes = document.getElementsByClassName('weField');
    let str = '';
    for (let e of wes) {
        str = str + `<li>${e.value}</li>`;
        console.log(str);
    }
    document.getElementById('weT').innerHTML = str;

    let aqs = document.getElementsByClassName('aqField');
    let str1 = '';
    for (let e of aqs) {
        str1 = str1 + `<li>${e.value}</li>`;
        console.log(str1);
    }
    document.getElementById('aqT').innerHTML = str1;

    let file = document.getElementById('imgField').files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
        document.getElementById('imgT').src = reader.result;
    }


    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';
}

function printCV() {
    window.print();
}