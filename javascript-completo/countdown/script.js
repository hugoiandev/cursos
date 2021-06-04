import Countdown from './countdown.js'

const tempoParaONatal = new Countdown('24 December 2021 23:59:59 GMT-0300')

const tempoParaOAnaNovo = new Countdown('31 December 2021 23:59:59 GMT-0300')
console.log(tempoParaONatal.total)
setInterval(() => {
    console.log(tempoParaOAnaNovo.total)
}, 1000)
// console.log(diasParaONatal.hours)
// console.log(diasParaONatal.minutes)
// console.log(diasParaONatal.seconds)