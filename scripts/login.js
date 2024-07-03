const HeaderEng = [`About`, `Contacts`, `Log In`, `Gallery`, `Services`]
const HeaderGeo = [`ინფორმაცია`, `კონტაქტები`, `შესვლა`, `გალერეა`, `მომსახურება`]

const about = document.getElementById(`about`)
const contact = document.getElementById(`contact`)
const login_register = document.getElementById(`login_register`)
const gallery = document.getElementById(`gallery`)
const services = document.getElementById(`services`)

function Pageeng(){
    about.textContent = `${HeaderEng[0]}`
    contact.textContent = `${HeaderEng[1]}`
    login_register.textContent = `${HeaderEng[2]}`
    gallery.textContent = `${HeaderEng[3]}`
    services.textContent = `${HeaderEng[4]}`
}
Pageeng()


function ChangeLang(){
    const selectElement = document.getElementById(`language`)
    const selectedValue = selectElement.value;

    if(selectedValue === `En`){
        Pageeng()

    }else if(selectedValue === `Geo`){
        about.textContent = `${HeaderGeo[0]}`
        contact.textContent = `${HeaderGeo[1]}`
        login_register.textContent = `${HeaderGeo[2]}`
        gallery.textContent = `${HeaderGeo[3]}`
        services.textContent = `${HeaderGeo[4]}`
    }

}






function checkPasswordStrength(password) {
    let strength = "";
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    if (hasLower && hasUpper && hasNumber) {
        strength = "high";
    } else if (hasLower && hasUpper) {
        strength = "mid";
    } else if (hasLower) {
        strength = "low";
    } else {
        strength = "";
    }

    return strength;
}

document.getElementById('password1').addEventListener('input', function() {
    const password = this.value;
    const strength = checkPasswordStrength(password);
    document.getElementById('strength').textContent = `Password strength: ${strength}`;
});





function idk (){
    var login = document.getElementById(`login`)
    var register = document.getElementById(`register`)

    if(login){
        login.style.display = `none`
    }
    
    if(register){
        register.style.display = `block`
    }
}