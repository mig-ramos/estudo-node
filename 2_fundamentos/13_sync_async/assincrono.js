const fs =  require('fs')
console.log("início")

fs.writeFile('arquivo.txt', 'oi', function (err) {
    setTimeout(() => {
        console.log('Arquivo criado!')
    }, 2000)
})

console.log('Fim')