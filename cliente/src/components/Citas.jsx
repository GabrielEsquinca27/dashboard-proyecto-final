import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

function Citas() {
    
    const [citas, setCitas] = useState([]);

    useEffect(() => {
        obtenerCitas();
    }, []);

    const obtenerCitas = async () => {
        try {
            const response = await fetch('/obtenerCitas');
            const citas = await response.json();
            setCitas(citas);
        } catch (error) {
            console.error('¡Error al obtener citas!');
        }
    };

    return (
        <>
            <DivContainer>
            {citas.map((cita) => (
            <CitaContainer key={cita.id}>
                <p>ID: {cita.id}</p>
                <p>Usuario ID: {cita.idusuario}</p>
                <p>Telefono: {cita.telefono}</p>
                <p>Fecha: {cita.fecha}</p>
                <p>Hora: {cita.hora}</p>
                <p>Servicio ID: {cita.idservicio}</p>
            </CitaContainer>
        ))}
            </DivContainer>
        </>
    )
}

export default Citas;

const DivContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 1500px;
    margin: 20px;
    padding: 40px;
    background: #fff;
    border-top: 5px solid #D9D9D9;
    border-left: 5px solid #D9D9D9;
`;

const CitaContainer = styled.div`
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 15px;
    margin: 15px;
    width: 200px;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.05);
        background: #3146FF;
        p {
            color: #ffffff;
        }
    }

    p {
        margin: 0;
        font-size: 16px;
        line-height: 1.5;
        color: #333;
    }
`;