import React, { useState } from 'react'
import { data } from './Data'
import './transfer.css'

export default function TransferData() {
    const [leftItems, setLeftItems] = useState(data)
    const [rightItems, setRightItems] = useState([])

    const checkedList = (list, id, checked) => {
        return list.map((item) => {
            if (id === item.id) {
                return {
                    ...item,
                    checked: !checked
                }
            }
            return item;
        })
    }

    const handleClick = ({ id, checked }, dir) => {
        if (dir === 'LEFT') {
            let copyItems = [...leftItems]
            copyItems = checkedList(copyItems, id, checked)
            setLeftItems(copyItems)
        } else {
            let copyItems = [...rightItems]
            copyItems = checkedList(copyItems, id, checked)
            setRightItems(copyItems)
        }
    }

    const resetItem=(list)=>{
        return list.map((item)=>{
            return {
                ...item,
                checked:false
            }
        })
    }

    const handleTransferBtn = (dir) => {
        if (dir === 'Left_To_Right') {
            if (leftItems.length) {
                let copyItems = [...leftItems]
                const checkedList = copyItems.filter(item => item.checked)
                const unCheckedList = copyItems.filter(item => !item.checked)
                setRightItems(resetItem([...rightItems, ...checkedList]))
                setLeftItems(unCheckedList)
            } 
        }else {
                let copyItems = [...rightItems]
                const checkedList = copyItems.filter(item => item.checked)
                const unCheckedList = copyItems.filter(item => !item.checked)
                setLeftItems(resetItem([...leftItems, ...checkedList]))
                setRightItems(unCheckedList)
            }
    }
    
    return (

        <div className='transfer-App'>
            <h1>Transfer List</h1>
            <div className="transfer-container">
                <div className="transfer-box">
                    {
                        leftItems.map((items) => (
                            <div
                                onClick={() => handleClick(items, 'LEFT')}
                                className={`items ${items.checked && 'checked'}`}
                                id={items.id}
                                key={items.id}
                            >
                                {items.title}
                            </div>
                        ))
                    }
                </div>
                <div className="buttons">
                    <button
                        onClick={() => handleTransferBtn('Left_To_Right')}
                    >Left</button>
                    <button
                        onClick={() => handleTransferBtn('Right_To_Left')}
                    >Right</button>
                </div>
                <div className="transfer-box">
                    {
                        rightItems.map((items) => (
                            <div
                                onClick={() => handleClick(items, 'RIGHT')}
                                className={`items ${items.checked && 'checked'}`}
                                id={items.id}
                                key={items.id}
                            >
                                {items.title}
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
