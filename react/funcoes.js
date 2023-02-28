function mensagem () {
   let msg = "Hello people"  
   return msg 
}

console.log(mensagem())

const nome = () => {
    return "Kethllyn"
}

console.log(nome())

function lindaMensagem (msg) {
    return console.log("A sua mensagem é:", msg)
}

lindaMensagem("Java é bom! É incrível!")
lindaMensagem(3)
lindaMensagem("Quero morre")