let contador=0;
let tester;
let tt=0;
let bb=0;
let cc=0;
let dd=1;
let ff=0;
let x=43; //de 0 a 28
let y=13; // de 0 a 88

window.addEventListener("offline", a=>{
    let e =document.getElementById("offline");
    console.log(e.style.zIndex);
    e.style.zIndex=110;
    setTimeout(()=>{
        e.style.zIndex=90;
    },2000);
})
window.addEventListener("online", a=>{
    let e =document.getElementById("online");
    console.log(e.style.zIndex);
    e.style.zIndex=110;
    setTimeout(()=>{
        e.style.zIndex=90;
    },2000);
})
document.addEventListener("DOMContentLoaded", b=>{
    theme();
    comprobar();
    gps();
})
document.addEventListener("scroll" ,pp=>{
    let scroll = document.documentElement.scrollTop;
    let ele= document.getElementById("bot");
    if(scroll<200){
        ele.setAttribute("class", "boton subir hidden");
    }
    else{
        ele.setAttribute("class", "boton subir");
    }
})
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
function subir(){
    document.documentElement.scrollTop=0;
}
function oscuro(){
    if(cc===0){
        let cuerpo= document.getElementById("cuerpo");
        cuerpo.setAttribute("class", "nocturno");
        cc++;
        localStorage.setItem("tema", 0);
        let bot= document.getElementById("noche");
        bot.textContent="🌞";
    }
    else{
        let cuerpo= document.getElementById("cuerpo");
        cuerpo.setAttribute("class", "dia");
        cc=0;
        localStorage.setItem("tema", 1);
        let bot= document.getElementById("noche");
        bot.textContent="🌙";
    }
}
function theme(){
    if(localStorage.getItem("tema")===null){
        localStorage.setItem("tema", 0);
    }
    if(localStorage.getItem("tema")==0){
        let cuerpo= document.getElementById("cuerpo");
        cuerpo.setAttribute("class", "nocturno");
        localStorage.setItem("tema", 0);
        cc=1;
        let bot= document.getElementById("noche");
        bot.textContent="🌞";
    }
    else if(localStorage.getItem("tema")==1){
        let cuerpo= document.getElementById("cuerpo");
        cuerpo.setAttribute("class", "dia");
        localStorage.setItem("tema", 1);
        cc=1;
        let bot= document.getElementById("noche");
        bot.textContent="🌙";
    }
}
function comprobar(){
    let vid=document.getElementById("vid");
    let videos=document.getElementById("videos");
    let maps=document.getElementById("maps");
    let mapas=document.getElementById("mapas");
    let ee=document.getElementById("responsives");
    let link=document.getElementById("link")

    if(window.innerWidth<=800){
        ee.removeChild(vid);
        ee.removeChild(maps);
        dd=0;
        link.insertAdjacentHTML("afterbegin", '<a id="videos" href="https://www.youtube.com/watch?v=WS6hnh7s7UI&ab_channel=Archivoschistosones2009"> video</a>');
        link.insertAdjacentHTML("afterbegin", '<a id="mapas" href="https://www.google.com.ar/maps/@-31.3366025,-64.2779967,15z">Mapa</a><br>');
    }
    else if(window.innerWidth>800 && dd===0){
        console.log(videos);
        link.removeChild(videos);
        link.removeChild(mapas);

        ee.insertAdjacentHTML("afterbegin", '<div class="vid" id="vid"></div>');
        let vid=document.getElementById("vid");
        vid.insertAdjacentHTML("afterbegin",'<iframe width="560" height="315" id="vide" src="https://www.youtube.com/embed/WS6hnh7s7UI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

        ee.insertAdjacentHTML("afterbegin", '<div class="maps" id="maps"></div>');
        let maps=document.getElementById("maps");
        maps.insertAdjacentHTML("afterbegin",'<iframe class="map" id="map" src="https://www.google.com/maps/embed?    pb=!1m14!1m12!1m3!1d13631.2425274672!2d-64.27799675!3d-31.336602499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.    1!5e0!3m2!1ses-419!2sar!4v1663243676434!5m2!1ses-419!2sar" width="600" height="450" style="border:0;"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>')
        dd=1;
    }
}
function ventanas(){ 
    event.preventDefault();
    let $form = document.getElementById("form");
    if(ff===0){
        tester = window.open($form.url.value, "tester", 'innerWidth='+$form.ancho.value+', innerHeight='+$form.alto.value);
        console.log(tester);
        ff=1;
    }
    else if(ff===1){
        tester.close();
        ff=0;
    }
}
function gps(){
    const options={
        enableHighAccuaracy:true,
        timeout:5000,
        maximumAge:0,
    };
    const success = (position)=>{
        console.log(position.coords);
        let coords=position.coords;
        let etiqueta = document.getElementById("geolocacion");
        etiqueta.insertAdjacentHTML("afterbegin", '<ul class="cordenadas"><div>Latitud: <b>'+coords.latitude+'</b></div><div>Longitud: <b>'+coords.longitude+'</b></div><div>Precicion: <b>'+Math.round(coords.accuracy)+' metros</b></div> <b><a class="cordenadas" href="https://www.google.com.ar/maps/@'+coords.latitude+','+coords.longitude+',15z" target="_blank" rel="noopener">Abrir en maps</a></b> </ul> ');

    };
    const error=(err)=>{
        console.log(err);
    };

    navigator.geolocation.getCurrentPosition(success , error , options);
}