import React, {useState}  from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';

const Login = ({ state, changeState }) => {
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/iniciars', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                nombre: document.getElementById("nombre").value,
                contrasena: document.getElementById("contrasena").value,
              }),
            });
      
            const data = await response.json();
      
            if (response.status !== 200) {
              setError(data.message);
            } else {
              setError("");
              document.getElementById("nombre").value = "";
              document.getElementById("contrasena").value = "";
              window.location.reload();
            }
        } catch (error) {
            setError("¡Intenta nuevamente!");
        }
        //
    };

    return (
        <>
            {state &&
                <OverLay>
                    <DivContainer>
                <form onSubmit={handleSubmit}>
                    <div className="login">		
                        <div className="block">
                            <h1>Inicie sesión</h1>
                            <img src={logo} width="80px" alt='logo'/>
                        </div>        
                        <div className="input">
                            <input type="text" name="nombre" id="nombre" placeholder="Nombre de usuario"/>
                        </div>
                        <div className="input">
                            <input type="password" name="contrasena" id="contrasena" placeholder="Contraseña"/>
                        </div>
                        <p><span>{error}</span></p>
                        <div className="input">
                            <button type="submit" value="iniciarsesion">Iniciar Sesión</button>   
                        </div>	
                    </div>
                </form>
            </DivContainer>
                </OverLay>
            }
        </>
    );
};

export default Login

const OverLay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #FF3131;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const DivContainer = styled.div`
    display: flex; 
	justify-content: center; 
	align-items: center; 
    .login {
        position: relative; 
        padding: 60px;
        background: #fff;
        border-radius: 10px;
        width: 400px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        box-shadow:
        2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
        6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
        12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
        22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
        41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
        100px 100px 80px rgba(0, 0, 0, 0.07); 

        input {
            box-sizing: border-box;
            position: relative; 
            width: 100%;
            padding: 20px; 
            border: 2px solid #D9D9D9; 
            font-size: 18px; 
            color: #455A64; 
            outline: none;
        }
        h1 {
            font-weight: 500;
            color: #FF3131;
        }
        button {
            border: none;
            background: #040202;
            cursor: pointer;
            width: 100%;
            color: white;
            padding: 15px;        
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            font-size: 20px;
            border-radius: 5px;
            margin-top: 15px;
        }
    }
    .block {
        display: flex; 
        justify-content: space-between; 
        align-items: center; 
    }
`
