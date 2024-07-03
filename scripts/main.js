const HeaderEng = [`About`, `Contacts`, `Log In`, `Gallery`, `Services`]
const HeaderGeo = [`ინფორმაცია`, `კონტაქტები`, `შესვლა`, `გალერეა`, `მომსახურება`]
const salonEN = [`Visit our salon to experience the`,`sense of beauty and style!` , `Parfois is a luxury hair salon strives to create works of art applying the latest trends in hair styling, design, and coloring for both men and women at fine prices. We are committed to improving your natural beauty with every visit.`]
const salonGeo = [`ეწვიეთ ჩვენ სალონს და`, `შეიცვალე თმის სტილი` , `Parfois არის თმის სალონი, რომელიც ცდილობს შექმნას ხელოვნების ნიმუშები თმის სტილის, დიზაინისა და შეღებვის უახლესი ტენდენციების გამოყენებით, როგორც მამაკაცებისთვის, ასევე ქალებისთვის დაბალ ფასად.`]
const mainSectionEn = [`Make a booking` , `Hair Is Your Craft` , `We work not to simply meet your needs, our expert stylists create professional works of art and try to exceed your expectations.`]
const mainSectionGeo = [`დაჯავშნეთ` , `შეიჭერი თმა ` , `ჩვენ ვმუშაობთ რომ დავაკმაყოფილოთ თქვენი საჭიროებები, ჩვენი ექსპერტი სტილისტები ქმნიან პროფესიონალურ ხელოვნების ნიმუშებს და ცდილობენ გადააჭარბონ თქვენს მოლოდინს.`]

const about = document.getElementById(`about`)
const contact = document.getElementById(`contact`)
const login_register = document.getElementById(`login_register`)
const gallery = document.getElementById(`gallery`)
const services = document.getElementById(`services`)

const title1 = document.getElementById(`title1`)
const description1 = document.getElementById(`description1`)
const bookingbutton = document.getElementById(`bookingbutton`)

const title = document.getElementById(`title`)
const description = document.getElementById(`description`)


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

    title1.textContent = `${mainSectionEn[1]}`
    description1.textContent = `${mainSectionEn[2]}`
    bookingbutton.textContent = `${mainSectionEn[0]}`

    title.textContent = `${salonEN[0] + salonEN[1] }`
    description.textContent = `${salonEN[2]}`

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

        title1.textContent = `${mainSectionGeo[1]}`
        description1.textContent = `${mainSectionGeo[2]}`
        bookingbutton.textContent = `${mainSectionGeo[0]}`
        

        title.textContent = `${salonGeo[0] + salonGeo[1] }`
        description.textContent = `${salonGeo[2]}`

        about1.textContent = `${HeaderGeo[0]}`
        contact1.textContent = `${HeaderGeo[1]}`
        login_register1.textContent = `${HeaderGeo[2]}`
        gallery1.textContent = `${HeaderGeo[3]}`
        services1.textContent = `${HeaderGeo[4]}`
    }

}
bookingbutton.addEventListener(`click`, function(){
    window.location.href = `/pages/contacts.html`
})