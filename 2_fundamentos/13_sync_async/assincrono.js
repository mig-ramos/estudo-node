const fs =  require('fs')
console.log("início")

fs.writeFile('arquivo.txt', 'oi', function (err) {
    setTimeout(function () {
        console.log('Arquivo criado!')
    }, 2000)
})

console.log('Fim')