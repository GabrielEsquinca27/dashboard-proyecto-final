import React from 'react';
import styled from 'styled-components';

function Navbar() {

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/sesion")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);

    const handleClick = async () => {
        try {
            await fetch('/cerrarsesion', { method: 'GET'});
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <>
            <DivContainer>
                <div className='logo'>
                    <svg width="54" height="54" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#ED2820" d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"/>
                    </svg>
                    <h2>Cruz Roja <span>Yajalón</span></h2> 
                </div>
                <div className='usuario'>
                    <div className='nombre'>
                        <p><b>¡</b>Hola <span>{!data ? " Usuario " : data}</span><b>!</b></p>
                    </div>     
                    <div className='icono'>
                        <i className="bi bi-person-circle"></i>
                    </div>    
                    <div className='icono'>
                        <a href="/" id='cerrar' onClick={handleClick}><i class="bi bi-box-arrow-right"></i></a>
                    </div>                                
                </div>
            </DivContainer>
        </>
    )
}

export default Navbar;

const DivContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    color: #000000;
    padding: 1rem 3rem;
    border-bottom: 1px solid #c6c9db7b;
    user-select: none;
    height: 70px;
    .logo {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
    h2{
        margin-left: 20px;
        color: #151515;
        font-weight: 400;
        span{
            font-weight: bold;
        }
    }
    .usuario {
        display: flex;
        align-items: center;
        gap: 20px; 
        .bi {
            font-size: 55px;
        }
    }
    .usuario div {
        display: flex;
        justify-content: center;
    }
    .nombre span {
        color: #3E08C9;
        font-weight: 600;
    }
    .nombre p{
        font-size: 20px;
    }
    .icono {
        display: flex;
        align-items: center;
        width: 80px;
        height: 80%;
        &:hover {
            background: #c6c9db7b;
            border-radius: 50%;
            padding: 12px 0px;
            cursor: pointer;
            transition: all 0.3s;
        }
    }
`