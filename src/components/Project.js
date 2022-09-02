import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { works } from '../data/works';

export const Project = () => {

    const [project, setProject] = useState({});
    const params = useParams();

    useEffect(() => {
        let project = works.filter(work => work.id === params.id);
        //paso index 0 porque el filter devuelve un array, pero como va  aser un objeto, es la unica posicion
        setProject(project[0]);
    }, [])

    return (
        <div className='page page-work'>
            <div className='mask'>
                <img src={"/img/" + project.id + ".png"} />
            </div>
            <h2 className='heading'>{project.name}</h2>
            <p>{project.technologies}</p>
            <p>{project.description}</p>

            <a href={"https://"+project.url} target="_blank">Go to project</a>
        </div>
    )
}
