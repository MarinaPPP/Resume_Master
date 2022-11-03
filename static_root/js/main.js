document.addEventListener("DOMContentLoaded", function () {
    const form_elements = document.querySelectorAll("#form_step")
    const button_next = document.querySelectorAll("#form_step_next")
    const button_previous = document.querySelectorAll("#form_step_back")

    let counter = 0;
    button_next.forEach(function (button) {
        button.addEventListener('click', function () {
            console.log("next")
            form_elements[counter].classList.add('d-none')
            counter++;
            form_elements[counter].classList.remove('d-none')

        })
    })
    button_previous.forEach(function (button) {
        button.addEventListener('click', function () {
            console.log("previous")
            form_elements[counter].classList.add('d-none')
            counter--;
            form_elements[counter].classList.remove('d-none')

        })
    })

    const first_name = document.querySelector("#first_name")
    const first_name_input = document.getElementsByName('first_name')[0]
    first_name_input.onkeyup = function () {
        first_name.innerText = first_name_input.value
    }

    const last_name = document.querySelector("#last_name")
    const last_name_input = document.getElementsByName("last_name")[0]
    last_name_input.onkeyup = function () {
        last_name.innerText = last_name_input.value
    }


    const city = document.querySelector("#city")
    const city_input = document.getElementsByName("city")[0]
    city_input.onkeyup = function () {
        city.innerText = city_input.value
    }


    const street = document.querySelector("#street")
    const street_input = document.getElementsByName("street")[0]
    street_input.onkeyup = function () {
        street.innerText = street_input.value
    }


    const position = document.querySelector("#position")
    const position_input = document.getElementsByName("position")[0]
    position_input.onkeyup = function () {
        position.innerText = position_input.value
    }


    const email = document.querySelector("#email")
    const email_input = document.getElementsByName("email")[0]
    email_input.onkeyup = function () {
        email.innerText = email_input.value
    }


    const phone_number = document.querySelector("#phone_number")
    const phone_number_input = document.getElementsByName("phone_number")[0]
    phone_number_input.onkeyup = function () {
        phone_number.innerText = phone_number_input.value
    }

    const school = document.querySelector("#school")
    const school_input = document.getElementsByName("school")[0]
    school_input.onkeyup = function () {
        school.innerText = school_input.value
    }

    const degree = document.querySelector("#degree")
    const degree_input = document.getElementsByName("degree")[0]
    degree_input.onkeyup = function () {
        degree.innerText = degree_input.value
    }

    const subject = document.querySelector("#subject")
    const subject_input = document.getElementsByName("subject")[0]
    subject_input.onkeyup = function () {
        subject.innerText = subject_input.value
    }

    const started = document.querySelector("#started")
    const started_input = document.getElementsByName("started")[0]
    started_input.onkeyup = function () {
        started.innerText = started_input.value
    }

    const ended = document.querySelector("#ended")
    const ended_input = document.getElementsByName("ended")[0]
    ended_input.onkeyup = function () {
        ended.innerText = ended_input.value
    }

    const link = document.querySelector("#link")
    const link_input = document.getElementsByName("link")[0]
    link_input.onkeyup = function () {
        link.innerText = link_input.value
    }

    const professional_summary = document.querySelector("#professional_summary")
    const professional_summary_input = document.getElementsByName("about_me")[0]
    professional_summary_input.onkeyup = function () {
        professional_summary.innerText = professional_summary_input.value
    }

    const company = document.querySelector("#company")
    const company_input = document.getElementsByName("company")[0]
    company_input.onkeyup = function () {
        company.innerText = company_input.value
    }

    const company_function = document.querySelector("#company_function")
    const company_function_input = document.getElementsByName("company_function")[0]
    company_function_input.onkeyup = function () {
        company_function.innerText = company_function_input.value
    }

    const company_started = document.querySelector("#company_started")
    const company_started_input = document.getElementsByName("company_started")[0]
    company_started_input.onkeyup = function () {
        company_started.innerText = company_started_input.value
    }

    const company_ended = document.querySelector("#company_ended")
    const company_ended_input = document.getElementsByName("company_ended")[0]
    company_ended_input.onkeyup = function () {
        company_ended.innerText = company_ended_input.value
    }

    const description = document.querySelector("#description")
    const description_input = document.getElementsByName("description")[0]
    description_input.onkeyup = function () {
        description.innerText = description_input.value
    }

    const skill = document.querySelector("#skill")
    const skill_input = document.getElementsByName("skill")[0]
    skill_input.onkeyup = function () {
        skill.innerText = skill_input.value
    }

    const certificate_name = document.querySelector("#certificate_name")
    const certificate_name_input = document.getElementsByName("certificate_name")[0]
    certificate_name_input.onkeyup = function () {
        certificate_name.innerText = certificate_name_input.value
    }

    const certificate_institution = document.querySelector("#certificate_institution")
    const certificate_institution_input = document.getElementsByName("certificate_institution")[0]
    certificate_institution_input.onkeyup = function () {
        certificate_institution.innerText = certificate_institution_input.value
    }

    const certificate_ended = document.querySelector("#certificate_ended")
    const certificate_ended_input = document.getElementsByName("certificate_ended")[0]
    certificate_ended_input.onkeyup = function () {
        certificate_ended.innerText = certificate_ended_input.value
    }

    const language_name = document.querySelector("#language_name")
    const language_name_input = document.getElementsByName("language_name")[0]
    language_name_input.onkeyup = function () {
        language_name.innerText = language_name_input.value
    }


    const language_level = document.querySelector("#language_level")
    const language_level_input = document.getElementsByName("language_level")[0]
    language_level_input.onkeyup = function () {
        language_level.innerText = language_level_input.value
    }

    // adding_buttons
    const certification_div = document.querySelector("#certifications_div")
    const certification_add = document.querySelector("#add_certification")
    certification_add.addEventListener("click", function () {
        let div = document.createElement("div")
        div.innerHTML = "<input class=\"form-control\" type=\"text\" name=\"certificate_name\" placeholder=\"Назва\">\n" +
            "                        <input class=\"form-control\" type=\"text\" name=\"certificate_institution\"\n" +
            "                               placeholder=\"Назва закладу\">\n" +
            "                        <input class=\"form-control\" type=\"month\" name=\"certificate_ended\"><br>"
        certification_div.appendChild(div)
    })

    const languages_div = document.querySelector("#languages_div")
    const add_language = document.querySelector("#add_language")
    add_language.addEventListener("click", function () {
        let div = document.createElement("div")
        div.innerHTML = "<input class=\"form-control\" type=\"text\" name=\"language_name\" placeholder=\"Мова\">\n" +
            "                            <select class=\"form-control\" name=\"language_level\" style=\"margin-bottom: 2vh\">\n" +
            "                                <option value=\"A1\">A1</option>\n" +
            "                                <option value=\"A2\">A2</option>\n" +
            "                                <option value=\"B1\">B1</option>\n" +
            "                                <option value=\"B2\">B2</option>\n" +
            "                                <option value=\"C1\">C1</option>\n" +
            "                                <option value=\"C2\">C2</option>\n" +
            "                            </select>"
        languages_div.appendChild(div)
    })

    const links_div = document.querySelector("#links_div")
    const add_link = document.querySelector("#add_link")
    add_link.addEventListener("click", function () {
        let div = document.createElement("div")
        div.innerHTML = "<input class=\"form-control\" type=\"text\" name=\"link\" placeholder=\"Посилання\">"
        links_div.appendChild(div)
    })

    const skill_div = document.querySelector("#skill_div")
    const add_skill = document.querySelector("#add_skill")
    console.log(add_skill)
    add_skill.addEventListener("click", function () {
        let div = document.createElement("div")
        div.innerHTML = "<input class=\"form-control\" type=\"text\" name=\"skill\" placeholder=\"програмування на Python\">"
        skill_div.appendChild(div)
        console.log(skill_div)
    })

    const experience_div = document.querySelector("#experience_div")
    const add_experience = document.querySelector("#add_experience")
    add_experience.addEventListener("click", function () {
        let div = document.createElement("div")
        div.innerHTML = "<input class=\"form-control\" type=\"text\" name=\"company\" placeholder=\"Назва підприємства\">\n" +
            "                        <input class=\"form-control\" type=\"text\" name=\"company_function\" placeholder=\"Функції підприємства\">\n" +
            "                        <input class=\"form-control\" type=\"date\" name=\"company_started\">\n" +
            "                        <input class=\"form-control\" type=\"date\" name=\"company_ended\">\n" +
            "                        <textarea class=\"form-control\" name=\"description\" rows=\"4\" cols=\"50\">Обов'язки</textarea>"
        experience_div.appendChild(div)
    })
})