import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
const Ingredients = () => {
    useEffect(() => {
        fetchAPI()
    }, [])
    const [item, setItem] = useState([])

    const [lodaing, setLoading] = useState(true)

    const fetchAPI = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/photos')
        const data = await resp.json()
        setItem(data)
        console.log(data)
        setLoading(false)
    }
    const styles = {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        margin: '0 auto'
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
            <h5 style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                {lodaing && <div class="preloader-wrapper big active">
                    <div class="spinner-layer spinner-blue-only">
                        <div class="circle-clipper left">
                            <div class="circle"></div>
                        </div><div class="gap-patch">
                            <div class="circle"></div>
                        </div><div class="circle-clipper right">
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>}
            </h5>
            {item.map(elem => (
                <div key={elem.id} style={{ width: '33%', boxShadow: '0 0 2px rgba(0,0,0,0.1)', margin: '1px' }}>
                    <p style={{ textAlign: 'center', paddingBottom: '15px', textTransform: 'uppercase' }}>{elem.title}</p>
                    <img src={elem.thumbnailUrl} style={styles} alt="img" />
                    <NavLink to={elem.url} style={{ display: 'grid', justifyContent: 'center' }}>Read more...</NavLink>
                </div>
            ))}
        </div>
    )
}
export default Ingredients