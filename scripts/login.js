const HeaderEng = [`About`, `Contacts`, `Log In`, `Gallery`, `Services`]
const HeaderGeo = [`ინფორმაცია`, `კონტაქტები`, `შესვლა`, `გალერეა`, `მომსახურება`]
const loginEng = [`Email`, `Password`, `Log In`, `Create a new account`]
const loginGeo = [`ემაილი`, `პაროლი`, `შესცლა`, `შექმენი ექაუნთ`]
const registerEng = [`Email`, `Password`, `Repeat Password`,`Strength:` , `Name and surname`, `Country`, `City`, `Number`, `Register`, `alreadyAlready have an account?`, `Login here`]
const registerGeo = [`ემაილი`, `პაროლი`, `გაიმეორე პაროლი`,`სიძლიერე:`, `სახელი და გვარი`, `ქვეყანა`, `ქალაქი`, `ნომერი`, `დარეგისტრირდი`, `უკვე გაქვს ექაუნთი?`, `შედი`]


const about = document.getElementById(`about`)
const contact = document.getElementById(`contact`)
const login_register = document.getElementById(`login_register`)
const gallery = document.getElementById(`gallery`)
const services = document.getElementById(`services`)

const email = document.getElementById(`email`)
const password = document.getElementById(`password`)
const loginb = document.getElementById(`loginB`)
const createAc = document.getElementById(`createAc`)

const email1 = document.getElementById(`email1`)
const password1 = document.getElementById(`password1`)
const rpassword = document.getElementById(`rpassword`)
const strength = document.getElementById(`strength`)
const namee = document.getElementById(`name`)
const country = document.getElementById(`country`)
const city = document.getElementById(`city`)
const number = document.getElementById(`number`)
const sub = document.getElementById(`sub`)
const already = document.getElementById(`already`)
const lgn = document.getElementById(`lgn`)


function checkPasswordStrength(password) {
    let strength = "";
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    if (hasLower && hasUpper && hasNumber) {
        strength = "მაღალი";
    } else if (hasLower && hasUpper) {
        strength = "საშვალო";
    } else if (hasLower) {
        strength = "დაბალი";
    } else {
        strength = "";
    }

    return strength;
}

document.getElementById('password1').addEventListener('input', function() {
    const password = this.value;
    const strength = checkPasswordStrength(password);
    document.getElementById('strength').textContent = `პაროლის სიძლიერე: ${strength}`;
});



function Pageeng(){
    about.textContent = `${HeaderEng[0]}`
    contact.textContent = `${HeaderEng[1]}`
    login_register.textContent = `${HeaderEng[2]}`
    gallery.textContent = `${HeaderEng[3]}`
    services.textContent = `${HeaderEng[4]}`

    email.placeholder = `${loginEng[0]}`
    password.placeholder = `${loginEng[1]}`
    loginb.value = `${loginEng[2]}`
    createAc.value = `${loginEng[3]}`

    email1.placeholder = `${registerEng[0]}`
    password1.placeholder = `${registerEng[1]}`
    rpassword.placeholder = `${registerEng[2]}`
    strength.textContent = `${registerEng[3]}`
    namee.placeholder = `${registerEng[4]}`
    country.placeholder = `${registerEng[5]}`
    city.placeholder = `${registerEng[6]}`
    number.placeholder = `${registerEng[7]}`
    sub.value = `${registerEng[8]}`
    already.textContent = `${registerEng[9]}`
    lgn.textContent = `${registerEng[10]}`

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

        email.placeholder = `${loginGeo[0]}`
        password.placeholder = `${loginGeo[1]}`
        loginb.value = `${loginGeo[2]}`
        createAc.value = `${loginGeo[3]}`

        email1.placeholder = `${registerGeo[0]}`
        password1.placeholder = `${registerGeo[1]}`
        rpassword.placeholder = `${registerGeo[2]}`
        strength.textContent = `${registerGeo[3]}`
        namee.placeholder = `${registerGeo[4]}`
        country.placeholder = `${registerGeo[5]}`
        city.placeholder = `${registerGeo[6]}`
        number.placeholder = `${registerGeo[7]}`
        sub.value = `${registerGeo[8]}`
        already.textContent = `${registerGeo[9]}`
        lgn.textContent = `${registerGeo[10]}`

    }

}











function change (){
    var login = document.getElementById(`login`)
    var register = document.getElementById(`register`)

    if(login){
        login.style.display = `none`
    }
    
    if(register){
        register.style.display = `block`
    }
}
function change1 (){
    var login = document.getElementById(`login`)
    var register = document.getElementById(`register`)

    if(login){
        register.style.display = `none`
    }
    
    if(register){
        login.style.display = `block`
    }
}