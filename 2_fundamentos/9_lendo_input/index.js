const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Quala a sua linguagem preferida? ", (language) => {
    if(language === 'Java'){
        console.log(`${language} nem é linguagem!`)
    } else {
        console.log(`A minha linguagem preferida é: ${language}`)
    }   
    readline.close()
})