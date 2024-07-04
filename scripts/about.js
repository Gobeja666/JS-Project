const HeaderEng = [`About`, `Contacts`, `Log In`, `Gallery`, `Services`,`Visit one of our salons and treat yourself to the beauty, style, and perfection`, `Parfois is a luxury hair salon practicing the art of beautiful hair and offering modern hair styling, coloring, and cutting services for men and women at very affordable prices. We strive to enhance your natural beauty with every visit. So if you want to have a totally new appearance, make a modern haircut, or change your hair color, our stylists will design your look and style that suits your needs.`]
const HeaderGeo = [`ინფორმაცია`, `კონტაქტები`, `შესვლა`, `გალერეა`, `მომსახურება`,`ეწვიეთ ჩვენს ერთ-ერთ სალონს და მოეპყარით საკუთარ თავს სილამაზით, სტილით და სრულყოფილებით`, `Parfois არის ძვირადღირებული თმის სალონი, რომელიც იყენებს ლამაზი თმის ხელოვნებას და სთავაზობს თანამედროვე თმის სტილის, შეღებვისა და ჭრის მომსახურებას მამაკაცებისთვის და ქალებისთვის ძალიან ხელმისაწვდომ ფასად. ჩვენ ვცდილობთ გავაუმჯობესოთ თქვენი ბუნებრივი სილამაზე ყოველი ვიზიტით. ასე რომ, თუ გსურთ გქონდეთ სრულიად ახალი გარეგნობა, გააკეთოთ თანამედროვე თმის შეჭრა ან შეცვალოთ თქვენი თმის ფერი, ჩვენი სტილისტები შექმნიან თქვენს იერს და სტილს, რომელიც შეესაბამება თქვენს საჭიროებებს.`]

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
const title = document.getElementById(`title`)
const description = document.getElementById(`description`)

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

    title.textContent = `${HeaderEng[5]}`
    description.textContent = `${HeaderEng[6]}`
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
        title.textContent = `${HeaderGeo[5]}`
        description.textContent = `${HeaderGeo[6]}`
    }

}