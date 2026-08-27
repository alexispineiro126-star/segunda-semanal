

while(true){
let mes= prompt("Ingrese su mes de nacimiento").toLowerCase()

let dia= prompt("ingrese su dia de nacimiento")

if(dia <1 || dia >30){
    alert("Ingrese un dia de su nacimiento del 1 al 31")
    continue
}

switch(mes){
    case "enero":
        if(dia <= 19){
        alert("Tu signo es capricordio")
        }
        else{
            aler("tu signo es Acuario")
        }
        break
    case "febrero":
        if(dia <=18){
            alert("Tu signo es Acuario")
        }
        else{
            alert("Tu signo es piscis")
        }
        break
    case "marzo":
        if(dia <= 20){
            alert("Tu signo es piscis")
        }
        else{
            alert("Tu signo es Aries")
        }
        break
    case "abril":
        if(dia <=19){
            alert("Tu signo es Aries")
        }
        else{
            alert("Tu signo es Tauro ")
        }
        break
    case "mayo":
        if(dia <=20){
            alert("Tu signo es Tauro")
        }
        else{
            alert("Tu signo es Geminis")
        }
        break
    case "junio":
        if(dia <=20){
            alert("Tu signo es Geminis")
        }
        else{
            alert("tu sigmo es Cancer")
        }
        break
    case "julio":
        if(dia <=22){
            alert("Tu signo es cancer")
        }
        else{
            alert("Tu signo es leo")
        }
        break
    case "agosto":
        if(dia <=22){
            alert("tu signo es leo")
        }
        else{
            alert("Tu signo es Virgo")
        }
        break
    case "septiembre":
        if(dia <=22){
            alert("Tu signo es Virgo")
        }
        else{
            alert("Tu signo es Libra")
        }
        break
    case "octubre":
        if(dia <=22){
            alert("Tu signo es Libra")
        }
        else{
            alert("Tu signo es Escorpio")
        }
        break
    case "noviembre":
        if(dia <=21){
            alert("Tu signo es Escorpio")
        }
        else{
            alert("Tu signo es Sagitario")
        }
        break
    case "diciembre":
        if(dia <=21){
            alert("Tu signo es Sagitario")
        }
        else{
            alert("Tu signo es Capricornio")
        }
        break
    default:
        alert("elija un mes desde Enero a Diciembre ")
        continue
    }
    break
}
