import React from 'react'
import "./Card.css"

const Card = () => {
    return (
        <div>
            <main>
                <section class="content">
                    <h1>Welcome to My Website</h1>
                    <p>Explore our features and services below</p>

                    <div class="card-container">

                        <div class="card">
                            <img src="./src/img/zoro.png" alt="Card Image"/>
                                <h3>Card 1</h3>
                                <p>This is a simple card description.</p>
                        </div>

                        <div class="card">
                             <img src="./src/img/tanjiro.png" alt="Card Image"/>
                            <h3>Card 2</h3>
                            <p>This is a simple card description.</p>
                        </div>

                        <div class="card">
                             <img src="./src/img/luffy.png" alt="Card Image"/>
                            <h3>Card 3</h3>
                            <p>This is a simple card description.</p>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    )
}

export default Card
