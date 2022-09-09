import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={require("../images/chimchar-pokemon.gif" )}
                className="header--image"
                alt="meme lord"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}