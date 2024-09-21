//crear arrays para guardar datos
let listaNombreGasto=[];
let listaValorGasto=[];
let listaDescripcionGasto=[];

function clickBoton(){
    //Obtener datos de entrada
    let nombreGasto= document.getElementById('nombreGasto').value;
    let valorGasto= document.getElementById('valorGasto').value;
    let descripcionGasto= document.getElementById('descripcionGasto').value;
    //Add valores
    listaNombreGasto.push(nombreGasto);
    listaValorGasto.push(valorGasto);
    listaDescripcionGasto.push(descripcionGasto);

    if(Number(valorGasto)>150){
        alert("Este es un gasto de mas de $150");
    }

    actualizarLista();
}

function actualizarLista(){
    //Definir elementos a modificar en el DOM
    const listaElementos= document.getElementById('listaDeGastos');
    const total= document.getElementById('totalGastos');

    let htmlLista='';
    let totalGastos=0;

    listaNombreGasto.forEach((elemento,posicion)=>{
       const valorGasto=listaValorGasto[posicion];
        let descripcion= listaDescripcionGasto[posicion];
       htmlLista+=`<li>${elemento} ${descripcion} $${valorGasto}
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
    document.getElementById('descripcionGasto').value='';
}

function eliminarBoton(posicion){

    listaNombreGasto.splice(posicion,1);
    listaValorGasto.splice(posicion,1);
    listaDescripcionGasto.splice(posicion,1);
    
    actualizarLista();
}