import React, { useEffect, useState } from 'react'
import '../css/tictac.css'

export default function TicTacToe() {
    const [matrix, setMatrix] = useState(Array(9).fill(null))
    const [isTrue, setIsTrue] = useState(true)
    const [won, setWon] = useState(null)

    const handleUserClick = (e) => {
        const pos = e.target.id;
        const copyMatrix = [...matrix];
        copyMatrix[pos] = isTrue ? 'X' : 'O';
        setMatrix(copyMatrix);
        setIsTrue((prevTurn) => !prevTurn);

    }
    const decideWinner = () => {
        const list = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i = 0; i < list.length; i++) {
            const [a, b, c] = list[i];
            if (matrix[a] && matrix[a] === matrix[b] && matrix[a] === matrix[c]) {
                setWon(matrix[a])
                setTimeout(() => {
                   handleReset()
                }, 2000);
               
            }
        }
    }
    useEffect(() => {
        decideWinner()
    }, [matrix])

    const handleReset = () =>{
        setMatrix(Array(9).fill(null))
        setIsTrue(true)
        setWon(null)
    }
    return (
        <div className='App'>
            <h1>Tic Tac Toe</h1>
            <div className="box-container"
                onClick={handleUserClick}
            >

                {
                    matrix.map((item, index) => (
                        <div
                            className="box"
                            key={index}
                            id={index}
                        >
                            {item}
                        </div>
                    ))
                }
            </div>
            <div className="game-info">
                <button className='reset' onClick={handleReset}>Reset</button>
                <p className="turn">Next Player : {isTrue ? 'X' : 'O'}</p>
                {won && <p className="won">Player {won} Won the Game</p>}
            </div>
        </div>
    )
}
