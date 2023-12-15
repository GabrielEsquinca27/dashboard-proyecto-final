import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import { FaUserDoctor } from "react-icons/fa6";

function Sidebar() {
    return (
        <>
            <DivContainer>
                <ul>
                    <li><NavLink to="/" activeClassName="active"><i className="bi bi-house-fill"></i>Inicio</NavLink></li>
                    <li><NavLink to="/empleados" activeClassName="active"><i><FaUserDoctor/></i>Empleados</NavLink></li>
                    <li><NavLink to="/usuarios" activeClassName="active"><i className="bi bi-people-fill"></i>Usuarios</NavLink></li>
                    <li><NavLink to="/servicios" activeClassName="active"><i class="bi bi-heart-pulse-fill"></i>Servicios</NavLink></li>
                    {/*<li><NavLink to="/expedientes" activeClassName="active"><i class="bi bi-journal"></i>Expedientes</NavLink></li>*/}
                    <li><NavLink to="/farmacia" activeClassName="active"><i class="bi bi-capsule"></i>Farmacia</NavLink></li>
                    <li><NavLink to="/citas" activeClassName="active"><i className="bi bi-calendar2-event-fill"></i>Citas</NavLink></li>
                    <li><NavLink to="/contacto" activeClassName="active"><i class="bi bi-person-lines-fill"></i>Contacto</NavLink></li>
                </ul>
            </DivContainer>
        </>
    )
}

export default Sidebar;

const DivContainer = styled.div`
	display: flex;
    justify-content: center;
    width: 17rem;
	background: #1c1c1c;
    min-height: 100vh;
    ul {
        //display: flex;
        //flex-direction: column;
        margin-top: 30px;
        list-style: none;
        width: 100%;
        li {
            i{
                font-size: 1.8rem;
                margin-right: 20px;
            }
            a{
                display: block;
                text-decoration: none;
                font-size: 18px;
                padding: 20px;
                color: #D9D9D9;
                border-left: 5px solid transparent;
                transition: all 100ms ease;   
                user-select: none;             
                &:hover {
                    border-left: 5px solid #D9D9D9;
                    background: #2b2b2b;
                }
                
                &.active {
                    background: #ED2820;
                    color: #fff;
                    //display: inline-block;
                }
            }
        }
    }
`