let listaNombreGasto=[];
let listaValorGasto=[];

function clickBoton(){
    let nombreGasto= document.getElementById('nombreGasto').value;
    let valorGasto= document.getElementById('valorGasto').value;

    console.log(nombreGasto);
    console.log(valorGasto);

    listaNombreGasto.push(nombreGasto);
    listaValorGasto.push(valorGasto);
    
    console.log(listaNombreGasto);
    console.log(listaValorGasto);

    actualizarLista();
}

function actualizarLista(){
    const listaElementos= document.getElementById('listaDeGastos');
    const total= document.getElementById('totalGastos');
    let htmlLista='';
    let totalGastos=0;
    listaNombreGasto.forEach((elemento,posicion)=>{
       const valorGasto=listaValorGasto[posicion];
        
       htmlLista+=`<li>${elemento} $${valorGasto}
                <button onclick="eliminarBoton(${posicion});">Eliminar</button>             
                </li>`;

        //calculo del total
        totalGastos+= Number(valorGasto);
        console.log(totalGastos);
    });
    listaElementos.innerHTML=htmlLista;
    total.innerHTML=totalGastos;
    limpiar();
}

function limpiar(){
    document.getElementById('nombreGasto').value='';
    document.getElementById('valorGasto').value='';
}

function eliminarBoton(posicion){
    console.log(posicion);
    listaNombreGasto.splice(posicion,1);
    listaValorGasto.splice(posicion,1);

    actualizarLista();
}