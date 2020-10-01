import React, { useState } from "react";
import "./home.css";
import API from "../../utils/API"

function Home() {

        const [ingredient, setIngredient] = useState();
        const [drink, setDrink] = useState()

        const handleFormSubmit = e => {
                console.log(ingredient)
                e.preventDefault();
                API.getDrink(ingredient)
                        .then(res => {
                                setDrink(res.data.drinks);
                                console.log(res.data.drinks)
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
                                        Have liquor that you don't know what to do with?
                                        <div>
                                        <br />
                                                <form  onSubmit={ handleFormSubmit } type="submit">
                                                        <input
                                                        placeholder="type in an ingredient"
                                                        onChange={e => setIngredient(e.target.value)}
                                                        >
                                                        </input>
                                                                <br />
                                                                <br />
                                                        <button
                                                        style={{ backgroundColor: "red", color: "black" }}
                                                        >
                                                        let's sip
                                                        </button>
                                                </form>
                                        </div>
                                </div>
                        </div>
                        {drink? (
                            <div style={{ background: 'none' }}>
                                {drink.map(result =>
                                    <li data-aos="fade-up"
                                        // data-aos-offset="200"
                                        // data-aos-delay="50"
                                        // data-aos-duration="1000"
                                        data-aos-easing="ease-in-out-back"
                                        // data-aos-mirror="true"
                                        data-aos-once="false"
                                        // data-aos-anchor="#anchor"
                                        data-aos-anchor-placement="top-bottom" class='show' key={result.id} >
                                        <div className="card" style={{ border: 'none', marginTop: '40px', background: 'none' }}>
                                            <div className="row">
                                                <div id="titleAuthor" className="col-md-6">
                                                    <b id="title" style={{ fontSize: '20px' }}> {result.strDrink}</b>
                                                </div>
                                             
                                            </div>
                                           
                                        </div>
                                    </li>
                                )
                                }
                            </div>
                        ) : (
                                <h3> </h3>
                            )}
                        
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

