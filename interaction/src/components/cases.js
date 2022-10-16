import React from 'react'
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";

const caseStudies = [
    {
        id: 1, 
        subtitle: "curology", 
        title: "A custom formulae for your skin needs",
        img: "curology-min"
    },
    {
        id: 2, 
        subtitle: "Yourspace", 
        title: "Open space floor plans ",
        img: "yourspace-min"
    },
    {
        id: 3, 
        subtitle: "Lumin", 
        title: "For your best look ever",
        img: "lumin-min"
    }
]

export default function Cases() {
  return (
    <section className='cases'>
        <div className='container-fluid'>
            <div className='cases-navigation'>
                <div className='cases-arrow prev disabled'>
                    <CasesPrev />
                </div>
                <div className='cases-arrow next'>
                    <CasesNext />
                </div>
            </div>
            <div className='row'>
                {caseStudies.map(casesItem => (
                    <div className='case' key={casesItem.id}>
                        <div className='case-details'>
                            <span>{casesItem.subtitle}</span>
                            <h2>{casesItem.title}</h2>
                        </div>
                        <div className='case-image'>
                            <img
                                src={require(`../assets/${casesItem.img}.png`)}
                                alt={casesItem.title}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
