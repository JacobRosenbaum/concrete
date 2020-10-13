import React, { useState } from "react";
import "./home.css";
import API from "../../utils/API"

function Home() {

        const [ingredient, setIngredient] = useState();
        const [beverages, setBeverages] = useState();
        const [drink, setDrink] = useState();
        const [five, showFive] = useState(true);
        const [ten, showTen] = useState(false);
        const [fifteen, showFifteen] = useState(false)

        const handleFormSubmit = e => {
                console.log(ingredient)
                e.preventDefault();
                API.getIngredient(ingredient)
                        .then(res => {
                                setBeverages(res.data.drinks);
                                console.log(res.data.drinks);
                        })
                        .catch(err => console.log(err));
        };
        const handleButtonSubmit = e => {
                console.log(drink)
                e.preventDefault();
                API.getDrink(drink)
                        .then(res => {
                                setDrink(res.data.drinks.strDrink);
                                console.log(res.data.drinks.strDrink);

                        })
                        .catch(err => console.log(err));
        };

        return (
                <div style={{ backgroundColor: "black" }}>
                        <div class="container">
                                <div id="title">
                                        sip
                                </div>
                                <div class="jumbotron">
                                        <div style={{ position: 'relative', bottom: '50px' }}>
                                                Have liquor that you don't know what to do with?
                                        <br />
                                                <br />
                                                <form onSubmit={handleFormSubmit} type="submit">
                                                        <input
                                                                placeholder="type in an ingredient"
                                                                onChange={e => setIngredient(e.target.value)}
                                                        >
                                                        </input>

                                                        <button
                                                                style={{ backgroundColor: "red", color: "black", marginLeft: '30px' }}
                                                        >
                                                                let's sip
                                                        </button>
                                                </form>
                                        </div>
                                </div>
                                {five ?
                                        <div>
                                                {beverages ? (
                                                        <div className = "drinks" >
                                                                {beverages.slice(0, 5).map(result =>
                                                                        <li
                                                                                data-aos="fade-left"
                                                                                data-aos-easing="ease-in-out-back"
                                                                                data-aos-once="false"
                                                                                data-aos-anchor-placement="top-bottom" class='show' key={result.id}
                                                                        >
                                                                                <div className="card" >
                                                                                        <div className="flex-container">
                                                                                                <img class="card-img-top" src={result.strDrinkThumb} alt="Card image cap"></img>
                                                                                                <h5 className="card-title" id="drink"
                                                                                                        onClick={handleButtonSubmit}
                                                                                                >
                                                                                                        <b style={{ fontSize: '20px' }}> {result.strDrink}</b>
                                                                                                </h5>
                                                                                        </div>
                                                                                </div>
                                                                        </li>
                                                                )
                                                                }
                                                                <i
                                                                        onClick={() => {
                                                                                showFive(false);
                                                                                showTen(true);
                                                                        }}
                                                                        className="far fa-arrow-alt-circle-right next"
                                                                ></i>
                                                        </div>
                                                ) : (
                                                                <h1 id="hide" style={{ color: 'red', textAlign: 'center' }}>
                                                                        Sorry, we can't make a drink with that
                                                                </h1>
                                                        )}
                                        </div> : null
                                }
                                {ten ?
                                        <div>
                                                <i 
                                                        onClick={() => {
                                                                showFive(true);
                                                                showTen(false);
                                                        }}
                                                        className="far fa-arrow-alt-circle-left last"
                                                ></i>

                                                {beverages ? (
                                                        <div className = "drinks" >
                                                                {beverages.slice(5, 10).map(result =>
                                                                        <li
                                                                                data-aos="fade-right"
                                                                                data-aos-easing="ease-in-out-back"
                                                                                data-aos-once="false"
                                                                                data-aos-anchor-placement="top-bottom" class='show' key={result.id}
                                                                        >
                                                                                <div className="card" >
                                                                                        <div className="flex-container">
                                                                                                <img class="card-img-top" src={result.strDrinkThumb} alt="Card image cap"></img>
                                                                                                <h5 className="card-title" id="drink"
                                                                                                        onClick={handleButtonSubmit}
                                                                                                >
                                                                                                        <b style={{ fontSize: '20px' }}> {result.strDrink}</b>
                                                                                                </h5>
                                                                                        </div>
                                                                                </div>
                                                                        </li>
                                                                )
                                                                }
                                                                <i
                                                                        onClick={() => {
                                                                                showTen(false);
                                                                                showFifteen(true)
                                                                                        ;
                                                                        }}
                                                                        className="far fa-arrow-alt-circle-right next"
                                                                ></i>
                                                        </div>
                                                ) : (
                                                                <h1 id="hide" style={{ color: 'red', textAlign: 'center' }}>
                                                                        Sorry, we can't make a drink with that
                                                                </h1>
                                                        )}
                                        
                                        </div> : null
                                }
                                {fifteen ?
                                        <div>
                                                <i 
                                                        onClick={() => {
                                                                showTen(true);
                                                                showFifteen(false);
                                                        }}
                                                        className="far fa-arrow-alt-circle-left last"
                                                ></i>

                                                {beverages ? (
                                                        <div className = "drinks">
                                                                {beverages.slice(10, 15).map(result =>
                                                                        <li
                                                                                data-aos="fade-right"
                                                                                data-aos-easing="ease-in-out-back"
                                                                                data-aos-once="false"
                                                                                data-aos-anchor-placement="top-bottom" class='show' key={result.id}
                                                                        >
                                                                                <div className="card" >
                                                                                        <div className="flex-container">
                                                                                                <img class="card-img-top" src={result.strDrinkThumb} alt="Card image cap"></img>
                                                                                                <h5 className="card-title" id="drink"
                                                                                                        onClick={handleButtonSubmit}
                                                                                                >
                                                                                                        <b style={{ fontSize: '20px' }}> {result.strDrink}</b>
                                                                                                </h5>
                                                                                        </div>
                                                                                </div>
                                                                        </li>
                                                                )
                                                                }
                                                                {/* <i 
                                                                        onClick={() => {
                                                                                showFive(false);
                                                                                showTen(true)
                                                                                        ;
                                                                        }}
                                                                        class="far fa-arrow-alt-circle-right"
                                                                ></i> */}
                                                        </div>
                                                ) : (
                                                                <h1 id="hide" style={{ color: 'red', textAlign: 'center' }}>
                                                                        Sorry, we can't make a drink with that
                                                                </h1>
                                                        )}
                                        
                                        </div> : null
                                }
                                
                        </div>

                        <div style={{ backgroundColor: "black" }}>
                                blah
                        </div>
                        <div style={{ backgroundColor: "black" }}>
                                blah
                        </div>
                        <div style={{ backgroundColor: "black" }}>
                                blah
                        </div>
                        <div style={{ backgroundColor: "black" }}>
                                blah
                        </div>
                        <div style={{ backgroundColor: "black" }}>
                                blah
                        </div>
                        <div style={{ backgroundColor: "black" }}>
                                blah
                        </div>
                        <div style={{ backgroundColor: "black" }}>
                                blah
                        </div>
                        <div style={{ backgroundColor: "black" }}>
                                blah
                        </div>
                        <div style={{ backgroundColor: "black" }}>
                                blah
                        </div>
                        <div style={{ backgroundColor: "black" }}>
                                blah
                        </div>
                        <div style={{ backgroundColor: "black" }}>
                                blah
                        </div>

                </div>
        )

}
export default Home

