const express = require("express");

const app = express();

let global = 1;
const size= 5;




app.get("/movimientos",(req,res)=>{
    const listOfMovements = [];
    console.log("--------------")
    console.log("movimientos creados con monto: "+ global)
    for (let index = 0; index < size; index++) {
        
        let movement =  {
            puntoVenta: "12-2",
            sorteo: 9240,
            numeroSorteo: 10111,
            juego: 0,
            tipoSorteo: "B",
            loteria: 4,
            movimientos: [
                {
                    concepto: "NORMAL",
                    canalVenta: 1,
                    importe: 30000.0,
                    moneda: 0,
                    fecha: "09-03-2022",
                    medio: 0
                }
            ]
        };
        movement.movimientos[0].importe =global;
        global++;
        listOfMovements.push(movement);
    
    }
    
    console.log("hasta monto: "+ (global-1))
    console.log("--------------")
    res.send(listOfMovements)
});



let globalSorteo = 1;
const sizeSorteo= 100;

app.get("/sorteos",(req,res)=>{
    const listOfRaffle = [];
    console.log("--------------")
    console.log("sorteos creados con numeroSorteo: "+ globalSorteo)
    for (let index = 0; index < sizeSorteo; index++) {
        
        let sorteo =      {
            codigoSorteo: 50502,
            numeroSorteo: 50500,
            codigoJuego: 0,
            loteria: 1,
            tipoEvento: "E",
            fechaEvento: "2024-01-27 00:00:00",
            fechaSorteo: "2024-01-27 18:00:00",
            fechaApertura: "2024-01-27 08:00:00",
            fechaCierreOn: "2024-01-27 17:50:00",
            fechaCierreOff: "2024-01-27 08:00:00",
            fechaCaducidad: "2024-02-07 23:59:00",
            fechaAdjudicacion: "2024-01-28 17:59:00"
        };
        sorteo.numeroSorteo =globalSorteo;
        globalSorteo++;
        listOfRaffle.push(sorteo);
    
    }
    
    console.log("hasta monto: "+ (globalSorteo-1))
    console.log("--------------")
    res.send(listOfRaffle)
});


app.listen(3000,()=>{
   console.log("Server Running in 3000") 
});
