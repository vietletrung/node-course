console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message_1')

weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const location = search.value
    console.log('location' + location)
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error)
            {
                console.log('data error')
            }
            else {
                console.log(data.location)
                console.log(data.forecastdata)
                message1.textContent = data.forecastdata
            }
        })
    })
})