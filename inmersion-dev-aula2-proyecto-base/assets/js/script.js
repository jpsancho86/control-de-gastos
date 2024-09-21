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
       htmlLista+=`<li>${elemento} - $${valorGasto} <br>Descripcion: ${descripcion}
                <div>
                <button onclick="modificarBoton(${posicion});">Modificar</button>
                <button onclick="eliminarBoton(${posicion});">Eliminar</button>
                </div>           
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
function modificarBoton(posicion){
    //Obtener y mostar datos a modificar
    document.getElementById('nombreGasto').value=listaNombreGasto[posicion];
    document.getElementById('valorGasto').value=listaValorGasto[posicion];
    document.getElementById('descripcionGasto').value=listaDescripcionGasto[posicion];
    //Cambiar boton
    const actulizarBoto=document.getElementById('botonFormulario');
    actulizarBoto.innerText="Actualizar Gasto";
    actulizarBoto.onclick= function(){actualizarBoton(posicion)};
    
    
}
function actualizarBoton(posicion){
    //Actualizar datos
    listaDescripcionGasto[posicion]=document.getElementById('descripcionGasto').value;
    listaNombreGasto[posicion]=document.getElementById('nombreGasto').value;
    listaValorGasto[posicion]=document.getElementById('valorGasto').value;
    
    const actulizarBoto=document.getElementById('botonFormulario');
    actulizarBoto.innerText="Agregar Gasto";
    actulizarBoto.onclick= clickBoton;
    
    actualizarLista();
}