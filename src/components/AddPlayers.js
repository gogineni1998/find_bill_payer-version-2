import React, { useContext, useRef } from "react";

import { MyContext } from "../context";
import '../css/styles.css'
const AddPlayers = () => {
    let context = useContext(MyContext)
    const inputText = useRef()
    console.log(context.players.length !== 0);
    return (
        <div className="container my-5">
            <div className="text-center">
                <h1 className="text-secondary box"><i>Who Pays the Bill??</i></h1>
                <form>
                    <input className="m-3" placeholder="Enter Name" ref={inputText} />
                    <button type="button" onClick={() => context.addPlayer(inputText)}>Add Player</button>
                </form>
            </div>
            <div>
                {
                    context.players.map((item, i) => (
                        <div className="alert alert-warning alert-dismissible text-center" key={i}>
                            <button className="close" data-dismiss="alert" aria-label="close" onClick={() => context.removePlayers(item)}>&times;</button>
                            <strong className="person-name">{item}</strong>
                        </div>
                    ))
                }
            </div>
            <div className="text-right">
                <button type="button" className="text-secondary" onClick={() => context.proceed()}>Next</button>
            </div>


        </div>
    )
}

export default AddPlayers