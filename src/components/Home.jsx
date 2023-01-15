import React from 'react'

const Home = () => {
  return (
    <div className="home">
      <div className="center-section">
        <div>
          <div className="left-side">
            <div className="sec-one">
              <div>
                <img
                  src="https://raw.githubusercontent.com/Olliemint/Pokemon/main/src/assets/homeassets/sv01-announce-169-en.jpeg"
                  alt=""
                />
              </div>
              <div className="details-one">
                <h3>
                  Play with Paldean Flair in the Upcoming Pokémon TCG:{" "}
                  <em>Scarlet &amp; Violet</em> Expansion
                </h3>
                <p>
                  Meet new Pokémon from the Paldea region and prepare for the
                  return of Pokémon ex in <em>Scarlet &amp; Violet</em>.
                </p>
              </div>
            </div>
            <div className="sec-two">
              <div className="banner-one">
                <div>
                  <img
                    src="https://raw.githubusercontent.com/Olliemint/Pokemon/main/src/assets/homeassets/pokemon-center-169-en.jpg"
                    alt=""
                  />
                </div>
                <div className="banner-1">
                  <h3>
                    <em>Scarlet &amp; Violet</em> Preorders at Pokémon Center
                  </h3>
                </div>
              </div>
              <div className="banner-two">
                <div>
                  <img
                    src="https://raw.githubusercontent.com/Olliemint/Pokemon/main/src/assets/homeassets/scarlet-violet-169.png"
                    alt=""
                  />
                </div>
                <div className="banner-1">
                  <h3>Celebrating Over One Thousand Pokémon Discovered!</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="right-one">
            <img
              src="https://raw.githubusercontent.com/Olliemint/Pokemon/main/src/assets/homeassets/pokedex-169-en.png"
              alt=""
            />
            <div className="rf1-det">
              <h3>Pokémon from Paldea Join Our Pokédex</h3>
            </div>
          </div>
          <div className="right-two">
            <img
              src="https://raw.githubusercontent.com/Olliemint/Pokemon/main/src/assets/homeassets/scarlet-violet-169-en.jpg"
              alt=""
            />
            <div className="details-two">
              <h3>Complete Your Paldea Region Pokédex</h3>
              <p>
                Learn how to track down <em>Pokémon Scarlet</em> and
                <em>Pokémon Violet</em>’s most elusive Pokémon with this guide.
              </p>
            </div>
          </div>
          <div className="right-3">
            <img
              src="https://raw.githubusercontent.com/Olliemint/Pokemon/main/src/assets/homeassets/galar-34-en.jpeg"
              alt=""
            />
            <div className="details-3">
              <h3>Explore Galar in the Pokémon TCG</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
