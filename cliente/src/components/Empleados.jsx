import React, {useState, useEffect } from 'react';
import styled from 'styled-components';

function Empleados() {
    const [data, setData] = useState([]);
    const [newUser, setNewUser] = useState({ nombre: '', apellido: '', edad: '', puesto: '', sueldo: '', contrasena: ''});

    useEffect(() => {
        obtenerEmpleados();
    }, []);

    const obtenerEmpleados = async () => {
        try {
            const response = await fetch('/obtenerEmpleados');
            const users = await response.json();
            setData(users);
        } catch (error) {
            console.error('¡Error al obtener empleados!');
        }
    };

    const handleAddRow = async () => {
        try {
            await fetch('/registrarEmpleado', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });
            obtenerEmpleados();
            //setNewUser({ nombre: '', email: '', contrasena: '' });
            
        } catch (error) {
            console.error('¡Error al agregar empleado!');
        }
    };

    const handleSaveRow = async (id) => {
        try {
            await fetch(`/actualizarEmpleado/${id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(data.find((user) => user.id === id)),
            });
            obtenerEmpleados();
        } catch (error) {
            console.error('¡Error al guardar empleado!');
        }
    };

    const handleDeleteRow = async (id) => {
        try {
            await fetch(`/eliminarEmpleado/${id}`, {
                method: 'DELETE',
            });
            obtenerEmpleados();
        } catch (error) {
            console.error('¡Error al eliminar empleado!');
        }
    };

    const handleInputChange = (id, field, value) => {
        const updatedData = data.map((user) =>
        user.id === id ? { ...user, [field]: value } : user
        );
        setData(updatedData);
    };

    return (
        <>
            <DivContainer>
                <DivForm>
                    <h1>Tabla de Empleados</h1>
                    <form>
                        <div className='inputs-one'>
                            <button type="button" onClick={handleAddRow}>+</button>
                        </div>                        
                    </form>
                    <Tabla>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Edad</th>
                                <th>Puesto</th>
                                <th>Sueldo</th>
                                <th>Pss</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td><input type='text' value={row.nombre} onChange={(e) =>
                                            handleInputChange(row.id, 'nombre', e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type='text' value={row.apellido} onChange={(e) =>
                                            handleInputChange(row.id, 'apellido', e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type='text' value={row.edad} onChange={(e) =>
                                            handleInputChange(row.id, 'edad', e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type='text' value={row.puesto} onChange={(e) =>
                                            handleInputChange(row.id, 'puesto', e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type='text' value={row.sueldo} onChange={(e) =>
                                            handleInputChange(row.id, 'sueldo', e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type='text' value={row.contrasena} onChange={(e) =>
                                            handleInputChange(row.id, 'contrasena', e.target.value)}/>
                                    </td>
                                    <td>
                                        <Botones onClick={() => handleSaveRow(row.id)} id='btn1'>Guardar</Botones>
                                        <Botones onClick={() => handleDeleteRow(row.id)} id='btn2'>Eliminar</Botones>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Tabla>
                </DivForm>
            </DivContainer>
        </>
    )
}

export default Empleados;

const DivContainer = styled.div`
    display: flex;
    /*@media (max-width: 1500px) {
        display: block;
    }*/
`
const DivForm = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 1400px;
    margin: 20px;
    padding: 40px;
    background: #fff;
    border-top: 5px solid #D9D9D9;
    border-left: 5px solid #D9D9D9;
    h1 {
        font-size: 28px;
        margin-bottom: 30px;
    }
    form {
        button {
            padding: 15px;        
            background: #ED2820;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border: none;
            color: white;
            font-size: 28px;
            width: 70px;
            border-radius: 5px;
            margin-bottom: 40px;
            cursor: pointer;
        }
        button:hover {
            background: #3146FF;
        }
    }
    input {
        width: 100%;
        border: none;
        font-family: Poppins;
        outline: none;
        padding: 8px;
        font-size: 18px;
        box-sizing: border-box;
        &:hover {
            outline: 1px solid #ccc;
        }
    }
`

const Tabla = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    th,td {
        font-size: 18px;
        border: 1px solid #ddd;
        padding: 15px;
        text-align: center;
    }
    th {
        background-color: #f2f2f2;
    }
`

const Botones = styled.button`
    padding: 15px;
    font-size: 18px;
    border: none;
    color: white;
    background:#3146ff;
    margin: 5px;
    border-radius: 6px;
    cursor: pointer;
`