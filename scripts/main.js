const HeaderEng = [`About`, `Contacts`, `Log In`, `Gallery`, `Services`]
const HeaderGeo = [`ინფორმაცია`, `კონტაქტები`, `შესვლა`, `გალერეა`, `მომსახურება`]

const about = document.getElementById(`about`)
const contact = document.getElementById(`contact`)
const login_register = document.getElementById(`login_register`)
const gallery = document.getElementById(`gallery`)
const services = document.getElementById(`services`)

function Headereng(){
    about.textContent = `${HeaderEng[0]}`
    contact.textContent = `${HeaderEng[1]}`
    login_register.textContent = `${HeaderEng[2]}`
    gallery.textContent = `${HeaderEng[3]}`
    services.textContent = `${HeaderEng[4]}`
}
Headereng()

function ChangeLang(){
    const selectElement = document.getElementById(`language`)
    const selectedValue = selectElement.value;

    if(selectedValue === `En`){
        about.textContent = `${HeaderEng[0]}`
        contact.textContent = `${HeaderEng[1]}`
        login_register.textContent = `${HeaderEng[2]}`
        gallery.textContent = `${HeaderEng[3]}`
        services.textContent = `${HeaderEng[4]}`
    }else if(selectedValue === `Geo`){
        about.textContent = `${HeaderGeo[0]}`
        contact.textContent = `${HeaderGeo[1]}`
        login_register.textContent = `${HeaderGeo[2]}`
        gallery.textContent = `${HeaderGeo[3]}`
        services.textContent = `${HeaderGeo[4]}`
    }

}