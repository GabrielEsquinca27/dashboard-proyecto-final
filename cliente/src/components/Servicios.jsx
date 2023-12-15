import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

function Servicios() {
    const [services, setServices] = useState([]);
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        disponibilidad: false,
        imagen: '',
    });

    useEffect(() => {
        obtenerServicios();
    }, []);

    const obtenerServicios = async () => {
        try {
            const response = await fetch('/obtenerServicios');
            const servicios = await response.json();
            setServices(servicios);
        } catch (error) {
            console.error('¡Error al obtener servicios!');
        }
    };

    const handleInputChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    const handleCheckboxChange = () => {
        setFormData({
            ...formData,
            disponibilidad: !formData.disponibilidad,
        });
    };

    const handleEnviar = async () => {
        try {
            await fetch('/registrarServicio', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    disponibilidad: formData.disponibilidad ? 1 : 0,
                    imagen: '',
                }),
            });
            obtenerServicios();
            setFormData({
                nombre: '',
                descripcion: '',
                disponibilidad: false,
                imagen: '',
            });
        } catch (error) {
            console.error('¡Error al agregar servicio!');
        }
    };
    return (
        <>
            <DivContainer>
                <DivForm>
                    <h1>Tabla de Servicios</h1>
                    <form>
                        <div className='inputs'>
                            <label>Nombre</label>
                            <input type="text" id="noms" name="noms" value={formData.nombre}
                                onChange={(e) => handleInputChange('nombre', e.target.value)}/>
                        </div>
                        <div className='inputs'>
                            <label>Descripción</label>
                            <textarea id="desc" name="desc" rows="3" value={formData.descripcion}
                                onChange={(e) => handleInputChange('descripcion', e.target.value)}/>
                        </div>
                        <div className='inputs'>
                            <label>Disponibilidad</label>
                            <label>
                                <input type="checkbox" id="cbox1" checked={formData.disponibilidad}
                                    onChange={handleCheckboxChange}/>
                                    Sí</label>
                            <label>
                                <input type="checkbox" id="cbox2" checked={!formData.disponibilidad}
                                    onChange={handleCheckboxChange}/>
                                    No</label>
                        </div>
                        <div className='inputs'>
                            <label>Cargar icono</label>
                        </div>
                        <div className='inputs-one'>
                            <button type="button" onClick={handleEnviar}>Añadir</button>
                            <button type="button">Editar</button>
                        </div>
                    </form>
                </DivForm>
                <DivTable>
                    <Tabla>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Disponibilidad</th>
                                <th>Imagen</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>{row.nombre}</td>
                                    <td>{row.descripcion}</td>
                                    <td>{row.disponibilidad ? 'Sí' : 'No'}</td>
                                    <td>{row.imagen}</td>
                                    <td>
                                        {/* Agrega botones para editar y eliminar */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Tabla>
                </DivTable>
            </DivContainer>
        </>
    )
}

export default Servicios;

const DivContainer = styled.div`
    display: flex;
    @media (max-width: 1500px) {
        display: block;
    }
`
const DivForm = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 20px;
    padding: 40px;
    background: #fff;
    border-top: 5px solid #D9D9D9;
    border-left: 5px solid #D9D9D9;
    @media (max-width: 700px) {
        margin: 30px 30px 30px 30px;
    }
    h1 {
        font-size: 28px;
        margin-bottom: 30px;
    }
    form {
        width: 100%;
    }
    .inputs-one {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 40px;
        @media (max-width: 700px) {
            display: block;
        }
    }   
    .inputs {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        width: 100%;
    }
    label {
        font-size: 18px;
        margin-bottom: 8px;
    }
    input,
    textarea {
        border: none;
        font-family: Poppins;
        border-bottom: 1px solid #ccc;
        transition: border-bottom .2s;
        outline: none;
        padding: 8px;
        font-size: 18px;
        box-sizing: border-box;
    }
    input:focus, textarea:focus {
        border-bottom: 1px solid #3146FF;
    }
    textarea {
        resize: none;
    }
    button {
        padding: 15px;        
        background: #ED2820;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border: none;
        color: white;
        font-size: 20px;
        width: 50%;
        border-radius: 5px;
        margin-top: 15px;
        cursor: pointer;
        @media (max-width: 700px) {
            width: 100%;
        }
    }
    button:hover {
        background: #3146FF;
    }
    .mensaje {
        //margin-top: 20px;
        font-size: 16px;
        color: #000000;
    }
`
const DivTable = styled.div`
    margin: 20px;
    padding: 40px;
    background: #fff;
    border-top: 5px solid #D9D9D9;
    border-left: 5px solid #D9D9D9;
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