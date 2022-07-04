import React, { useContext } from "react";
import { MyContext } from "../context";
import '../css/styles.css'
const DecideLooser = () => {
    let context = useContext(MyContext)
    let index = context.getRandom
    return (
        <div className="container">
            <div className="text-center">
                <h1 className="looser-person my-5">The Looser Is : </h1>
                <div className="alert alert-success m-3">
                    <strong className="d-block p-3">{context.players[index]}</strong>
                </div>
            </div>
            <div className="text-right">
                <button type="button" className="m-2" onClick={() => context.generateNew()}>Get New Looser</button>
                <button type="button" className="m-2" onClick={() => context.reset()}>Reset</button>
            </div>
        </div>


    )
}

export default DecideLooser