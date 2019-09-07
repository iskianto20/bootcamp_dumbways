function bioSaya() {
    return {
        name: 'Aris Iskianto',
        address: 'Jl. Kapal oleng kapten',
        hobbies: ['Futsal', 'Maen Bola'], //Array,
        is_married: false, //Boolean,
        school: {
            highSchool: 'SMK N 1 Warureja',
            university: 'Universitas Pelita Bangsa'
        }, // Object
        skills: [{
            name: 'Web Programming',
            years_of_experience: 1
        }, {
            name: 'Mobile Dev',
            years_of_experience: 1
        }] // Array Of Object
    }
}

console.log(bioSaya());