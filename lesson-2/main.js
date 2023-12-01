// Типы Данных 8
// 1 strig - строка
// ключевые слова var let const 
// переменные - озгормо
// операторы (=,==,===,+,-,/.*,>< >= <=, )
var carname = "Fit"
var laptopname ='Nurshoola'
// 2 number
var applePrice2 = 100
var batteryMass = 70
// 3 boolean
var isSnow = false
var isSnow2 = true
// 4 null
var baha = null
baha = 'baha'
// 5 undefined
var jok;
// 6 ---
var id = Symbol("userid")
// 7 -- bigint
var maxKm =100n
// 8 object object{}, Array[]
var headerMenu = ['home', 'about', 'Contacts']
var table={
    // key:value
    color:'red',
    height:2,
    width:3,
    matterial:'metal'
}
var user={
    name:'kolbai',
    ismarried:false,
    salary:500000,
    age:20,
    car:null,
}
var baby = {
    image: 'http://www.nurcinema.kg/upload/movies/movie_1203/thumb.jpg',
    movieName: "Малыш",
    year: 2023,
    author: "Учкун Жакыпбеков",
    description: `
    Талант отчаянный хулиган из провинциального городка Балыкчы.  Однаждны в очередной драке он пулучает травму головы и умственно становится настоящим младенцем. Маме Таланта Толгонай приходится воспитывать своего большого сына с самого начало и сделать его снова взрослым человеком, но к ней на помощ приходит Бакыт, который давно женился бы на Толгонай, если бы не Талант.`,
    country: "Кыргызстан",
    genre: 'Комедия, драма',
    roles: ['Аскат Сулайманов',' Шумкарбек Бейшеналиев', 'Элмира Тагаева', 'Адеми Бейшенбекова']
  }

  document.write(`<img src='${baby.image}'alt='image' />`)
  document.write(`<h3>${baby.movieName}</h3>`)
  document.write(`<h3>${baby.year} - жыл </h3>`)
  document.write(`<h3>${baby.country}</h3>`)
  document.write(`<h3>${baby.author}</h3>`)
  document.write(`<h3>${baby.roles[0]}</h3>`)
  document.write(`<h3>${baby.description}</h3>`)
  

