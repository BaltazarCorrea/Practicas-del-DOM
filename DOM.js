let contador=0;
let tt=0;
let x=43; //de 0 a 28
let y=13; // de 0 a 88

document.addEventListener("keypress", e=>{
    interaccion(e);
});
function cambio(){
    let elemento= document.getElementById("menu");
    if(contador===0){
        elemento.setAttribute("class", "modal");
        contador++;
    }
    else if(contador===1){
        elemento.setAttribute("class","escondido");
        contador=0;
    }
}
let bb=0;
function reloj(){
    var temporisador=setInterval(()=>{
        const date = new Date();
        let horas = date.getHours();
        let minutos = date.getMinutes();
        let segundos = date.getSeconds();
        if(segundos===0 || segundos===1 || segundos===2 || segundos===3 || segundos===4 || segundos===5 || segundos===6 ||  segundos===7 || segundos===8 || segundos===9){
            segundos="0"+segundos;
        }
        if(minutos===0 || minutos===1 || minutos===2 || minutos===3 || minutos===4 || minutos===5 || minutos===6 ||  minutos===7 || minutos===8 || minutos===9){
            minutos="0"+minutos;
        }
        if(horas===0 || horas===1 || horas===2 || horas===3 || horas===4 || horas===5 || horas===6 ||  horas===7 || horas===8 || horas===9){
            horas="0"+horas;
        }

        horas = document.createTextNode(horas);
        minutos = document.createTextNode(minutos);
        segundos = document.createTextNode(segundos);
        let elemento = document.getElementById("cronometro");


        if(bb!==0){
            let u=document.getElementById("uno");
            let d=document.getElementById("dos");
            let t=document.getElementById("tres");
            elemento.removeChild(u);
            elemento.removeChild(d);
            elemento.removeChild(t);
        }
        let horario = "<spam id='uno'></spam><spam id='dos'>:</spam><spam id='tres'>:</spam>"
        elemento.insertAdjacentHTML("afterbegin" , horario)

        let uno = document.getElementById("uno");
        let dos = document.getElementById("dos");
        let tres = document.getElementById("tres");
        uno.appendChild(horas);
        dos.appendChild(minutos);
        tres.appendChild(segundos);
        bb++;
        if(tt===1){
            clearInterval(temporisador)
            tt=0;
        }
    },1000);
}

function freno(){
    tt=1;
    
}

function alarma(){
    var tempo=setInterval(()=>{
        let alarma = document.getElementById("alarma");
        alarma.play();
        if(aa===1){
            clearInterval(tempo)
            aa=0;
        }
    },1250);
}
function detener(){
    aa=1;
}

function interaccion(e){
    console.log(e.keyCode);
    console.log(e.shiftKey);
    if(e.keyCode===65 && e.shiftKey){
        alert("Esto es una alerta");
    }
    if(e.keyCode===80 && e.shiftKey){
        prompt("Esto es un input");
    }
    if(e.keyCode===67 && e.shiftKey){
        confirm("Esto es una confirmacion");
    }
    
    var objetivo = document.getElementById("obj");

    if(e.keyCode===119){
        if(y!==0){
            y= y-0.5;
        }
        objetivo.style.top= y+"rem";
    }
    if(e.keyCode===115){
        if(y!==25.5){
            y= y+0.5;
        }
        objetivo.style.top= y+"rem";
    }
    if(e.keyCode===100){
        if(x!==85.5){
            x= x+0.5;
        }
        objetivo.style.left= x+"rem";
    }
    if(e.keyCode===97){
        if(x!==0){
            x= x-0.5;
        }
        objetivo.style.left= x+"rem";
    }

}