var d = new Date(1221801584716)
var dias = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sabado"]
console.log(dias[d.getDay()])
console.log(d)
// year, month, day, hours, minutes, seconds, milliseconds
// o número do mês funciona como um array então se eu digitar aqui no código na parte de mês um "12" ele vai imprimir novembro ja que todo array começa com "0"