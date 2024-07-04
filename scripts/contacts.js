const HeaderEng = [`About`, `Contacts`, `Log In`, `Gallery`, `Services`, ]
const HeaderGeo = [`ინფორმაცია`, `კონტაქტები`, `შესვლა`, `გალერეა`, `მომსახურება`, ]

const about = document.getElementById(`about`)
const contact = document.getElementById(`contact`)
const login_register = document.getElementById(`login_register`)
const gallery = document.getElementById(`gallery`)
const services = document.getElementById(`services`)
const about1 = document.getElementById(`about1`)
const contact1 = document.getElementById(`contact1`)
const login_register1 = document.getElementById(`login_register1`)
const gallery1 = document.getElementById(`gallery1`)
const services1 = document.getElementById(`services1`)

function Pageeng(){
    about.textContent = `${HeaderEng[0]}`
    contact.textContent = `${HeaderEng[1]}`
    login_register.textContent = `${HeaderEng[2]}`
    gallery.textContent = `${HeaderEng[3]}`
    services.textContent = `${HeaderEng[4]}`

    about1.textContent = `${HeaderEng[0]}`
    contact1.textContent = `${HeaderEng[1]}`
    login_register1.textContent = `${HeaderEng[2]}`
    gallery1.textContent = `${HeaderEng[3]}`
    services1.textContent = `${HeaderEng[4]}`

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

        about1.textContent = `${HeaderGeo[0]}`
        contact1.textContent = `${HeaderGeo[1]}`
        login_register1.textContent = `${HeaderGeo[2]}`
        gallery1.textContent = `${HeaderGeo[3]}`
        services1.textContent = `${HeaderGeo[4]}`
    }

}