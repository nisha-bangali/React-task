import React, { useEffect, useState } from 'react'
import './CryptoConverter.css'

export default function CryptoConverter() {
    const arr = ['usd', 'eur', 'gbp', 'cny', 'jpy']
    const [currency, setCurrency] = useState(0)
    const [selectCurr, setSelectCurr] = useState('usd')
    const [convertedCurr, setConvertedCurr] = useState(0)
    const [isUp, setIsUp] = useState(true)
    const [diffCurr, setDiffCurr] = useState(0)

    const handleInputChange = (e) => {
        const val = e.target.value
        setCurrency(val)
    }

    const handleSelectValue = (e) => {
        const type = e.target.value
        setSelectCurr(type)
    }
    const fetchCurrency = async () => {
        try {
            const url = `https://api.frontendeval.com/fake/crypto/${selectCurr}`
            const response = await fetch(url)
            const data = await response.json()
            const val = data.value
            const showVal = val * currency
            setConvertedCurr(showVal.toFixed(2))

            const prevVal= window.sessionStorage.getItem('prevVal')
             
            let diff = showVal.toFixed(2) - prevVal
            diff < 0 ? setIsUp(false) : setIsUp(true)
            setDiffCurr(diff.toFixed(2))


            window.sessionStorage.setItem('prevVal', showVal.toFixed(2))
        } catch (err) {
            console.error('Error:', err)
        }
    }
    useEffect(() => {
        let tid = setInterval(() => {
            fetchCurrency()
        }, 3000);

        return () => {
            clearInterval(tid)
        }
    }, [currency, selectCurr])

    return (
        <div className='converter'>
            <h1>Crypto Converter App</h1>
            <div className="wrapper">
                <input
                    type="number"
                    value={currency}
                    onChange={handleInputChange}
                />
                <select
                    onChange={handleSelectValue}
                    value={selectCurr}
                >
                    {
                        arr.map((curr, idx) => (
                            <option

                                key={idx}>{curr.toUpperCase()}</option>
                        ))
                    }
                </select>
            </div>
            <div className="curr-info">
                <div>{convertedCurr}</div>
                <div>WUC</div>
                <div className={ isUp ? 'green' : 'red'}>
                    <span>{isUp ? '↑' : '↓'}</span>
                    <span>{diffCurr}</span>
                </div>
            </div>
        </div>
    )
}



//↓