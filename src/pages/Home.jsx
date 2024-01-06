import React from 'react'
import "../styles/Home.css"

const Home = () => {
  return (
    <>
      <section className="home section">
        <div className="home-container container grid">
          <div className="home_content grid">
            <h2 className="home-title">
              <b>Esmark </b> your go-to destination for exceptional rental
              apartments.
            </h2>
            <img
              src="https://img.freepik.com/free-vector/condominium-abstract-concept-vector-illustration-private-residence-building-complex-condominium-management-landlord-owned-household-multistorey-house-appartment-abstract-metaphor_335657-4252.jpg?size=626&ext=jpg"
              alt="/apartment-vector"
              className="home_img"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home
