import React, {useState, useEffect} from 'react';

const ClockFunctional = () => {

    const [data, setdata] = useState({
        fecha: new Date(),
        edad: 0,
        nombre: "Martin",
        apellidos: "San Jose"

    });

    //The empty array is to run just once
   useEffect(() => {
    console.log('====================================');
    console.log("DidMount");
    console.log('====================================');
    
    const timerID = setInterval(() => tick() , 1000);

    console.log('====================================');
    console.log("TimerId:"+timerID);
    console.log('====================================');
    
    return ()=>{
        clearInterval(timerID);
        console.log('====================================');
        console.log("willUnmount executed" +timerID);
        console.log('====================================');
    }
   },[]);

    const tick = () => {
        console.log('====================================');
        console.log("Llamado desde tick"+ data.edad);
        console.log('====================================');
        
        setdata(prevData => ({
            fecha : new Date(),
            edad:  prevData.edad+1,
            nombre: data.nombre,
            apellidos: data.apellidos
        }));
        /*
        setdata(prevData => ({
            ...prevData,
           fecha: new Date(),
           edad: prevData.edad + 1
        }))*/
    }
    return (
        <div>
          <h2>
          Hora Actual:
          {data.fecha.toLocaleTimeString()}
          </h2>
          <h3>{data.nombre} {data.apellidos}</h3>
          <h1>Edad: {data.edad}</h1>
          </div>
    );
}

export default ClockFunctional;
