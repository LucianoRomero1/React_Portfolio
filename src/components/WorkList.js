import React from 'react'
import { Link } from 'react-router-dom'
import { works } from '../data/works'

export const WorkList = ({limit}) => {
    return (
        <section className='works'>
            {/* se usa la variable limite para que en portfolio muestren todos y en home solo 2 */}
            {
                works.slice(0, limit).map(work => {
                    return (
                        <article key={work.id} className='work-item'>
                            <div className='mask'>
                                <img src={"/img/" + work.id + ".png"} />
                            </div>
                            <span>{work.category}</span>
                            <h3><Link to={'/project/' + work.id}>{work.name}</Link></h3>
                            <h4>{work.technologies}</h4>
                        </article>
                    )
                })
            }
        </section>
    )
}
