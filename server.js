const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 9000

app.use(cors())

let carbrands = {
    'toyota' : {
        'brand': 'Toyota',
        'founded': 1937,
        'country': 'Japan',
        'customerService': `1-800-331-4331`,
    },
    'honda' : {
        'brand': 'Honda',
        'founded': 1948,
        'country': 'Japan',
        'customerService': `1-800-999-1009`
    },
    'mercedes-benz' : {
        'brand': 'Mercedes-Benz',
        'founded': 1926,
        'country': 'Germany',
        'customerService': `1-800-367-6372`
    },
    'bmw' : {
        'brand': 'BMW',
        'founded': 1916,
        'country': 'Germany',
        'customerService': `1-800-831-1117`
    },
    'porsche' : {
        'brand': 'Porsche',
        'founded': 1931,
        'country': 'Germany',
        'customerService': `1-800-767-7243`
    },
    'tesla' : {
        'brand': 'Tesla',
        'founded': 2003,
        'country': 'USA',
        'customerService': `1-888-518-3752`
    },
    'ford' : {
        'brand': 'Ford',
        'founded': 1903,
        'country': 'USA',
        'customerService': `1-800-392-3673`
    },
    'dodge' : {
        'brand': 'Dodge',
        'founded': 1900,
        'country': 'USA',
        'customerService': `1-800-423-6343`
    },
    'audi' : {
        'brand': 'Audi',
        'founded': 1909,
        'country': 'Germany',
        'customerService': `1-800-822-2834`
    },
    'volkswagen' : {
        'brand': 'Volkswagen',
        'founded': 1937,
        'country': 'Germany',
        'customerService': `1-800-822-8987`
    },
    'chevrolet' : {
        'brand': 'Chevrolet',
        'founded': 1911,
        'country': 'Japan',
        'customerService': `1-800-222-1020`
    },
    'kia' : {
        'brand': 'Kia',
        'founded': 1944,
        'country': 'South Korea',
        'customerService': `1-800-333-4542`
    },
    'hyundai' : {
        'brand': 'hyundai',
        'founded': 1967,
        'country': 'South Korea',
        'customerService': `1-800-633-5151`
    },
    'unknown' : {
        'brand': 'unknown',
        'founded': 2000,
        'country': 'unknown',
        'customerService': `1-111-111-1111`
    }
}
app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/carbrands/:customerService', (request, response)=>{
    const cs = request.params.customerService.toLowerCase()
    console.log(cs)
    if(carbrands[cs]){
        response.json(carbrands[cs])
    }else{
        response.json(carbrands['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})