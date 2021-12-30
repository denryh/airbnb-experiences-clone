import React from "react";
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Card from './components/Card'
import './App.css'
import data from './data'

export default function App() {
    const cards = data.map((card) => {
        return (
            <Card
                key={card.id}
                {...card}
            />
        ) 
    })

    return (
        <div className="container">
            <Navbar />
            <Hero />
            <section className="card-container">
                {cards}
            </section>
        </div>
    )
}