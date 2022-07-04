import React, { useState } from "react";

const MyContext = React.createContext();

const MyProvider = (props) => {

    const [page, setPage] = useState({
        pageNo: 1,
        players: [],
        randomIndex: 0
    })
    const Proceed = () => {
        let index = Math.floor(Math.random() * (page.players.length))
        page.players.length > 3 ?
            setPage({
                ...page,
                pageNo: 2,
                randomIndex: index
            }) : alert("Minimum 4 Players are required")
    }
    const addPlayer = (item) => {
        item.current.value.length >= 3 ?
            setPage({
                ...page,
                players: [...page.players, item.current.value]
            }) : alert("Name Should have atleast 3 characters")

        item.current.value = ''
    }
    const removePlayers = (item) => {
        setPage({
            ...page,
            players: page.players.filter((name) => (
                name !== item
            ))
        })
    }
    const generateRandom = () => {
        let index = Math.floor(Math.random() * (page.players.length))
        setPage({
            ...page,
            randomIndex: index
        })
    }
    const reset = () => {
        setPage({
            pageNo: 1,
            players: [],
            randomIndex: 0
        })
    }
    console.log(page);
    return (
        <MyContext.Provider
            value={{
                pageNo: page.pageNo,
                players: page.players,
                addPlayer: addPlayer,
                proceed: Proceed,
                removePlayers: removePlayers,
                getRandom: page.randomIndex,
                generateNew: generateRandom,
                reset: reset
            }}
        >
            {props.children}
        </MyContext.Provider>
    )

}

export { MyContext, MyProvider }