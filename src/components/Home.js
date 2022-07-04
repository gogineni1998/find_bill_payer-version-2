import React, { useContext } from "react";
import { MyContext } from "../context";

import AddPlayers from "./AddPlayers";
import DecideLooser from "./DecideLooser"

const Home = () => {
    let context = useContext(MyContext)
    return (
        <>
            {context.pageNo === 1 ? <AddPlayers /> : <DecideLooser />}
        </>
    )
}

export default Home