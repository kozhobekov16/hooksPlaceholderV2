import React from 'react'
import { NavLink } from 'react-router-dom'
import { datas } from './datas/datas'
export default function Nav() {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-evenly'}}>
            {datas.map(elem => {
                return (<NavLink style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }} to={elem.url} key={elem.id}>
                    {elem.name}
                </NavLink>
                )
            })}
        </nav>
    )
}
