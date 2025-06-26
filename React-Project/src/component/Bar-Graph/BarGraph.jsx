import React, { useEffect, useState } from 'react'
import './bar.css'

const BarGraph = () => {

    //https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new
    const [freq, setFreq] = useState([])
    const [yAxis, setYAxis] = useState(undefined)

    const fetchBarData = async () => {
        const url = 'https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new';
        const response = await fetch(url)
        let data = await response.text()
        data = data.split('\n').filter(Boolean);
        const map = {}
        data.forEach((item) => {
            if (map[item]) {
                map[item] = map[item] + 1
            } else {
                map[item] = 1
            }
        })
        setFreq(map)
    }

    useEffect(() => {
        if (freq) {
            const max = Math.max(...Object.values(freq))
            const maxValue = Math.ceil(max / 10) * 10;
            let arr = []
            for (let i = (maxValue / 10); i >= 0; i--) {
                arr.push(i * 10)
            }
            setYAxis(arr)
        }
    }, [freq])
   
    

    useEffect(() => {
        fetchBarData()
    }, [])
    return (
        <div className='bar-graph-App'>
            <h1>Bar Graph</h1>
            <div className="bar-container">
                <div className="bar-box">
                    <div
                     className="y-axix-box"
                     style={{height:`${yAxis && yAxis[0]}%`}}
                     >
                        {
                            yAxis?.map((val,idx)=>(
                                <div key={idx}>
                                    <span>{val}</span>
                                </div>
                            ))
                        }
                    </div>
                    {
                        freq && Object.entries(freq)?.map(([key,val])=>(
                            <div className="x-axis-box">
                                <div
                                 className='graph'
                                 style={{height: `${val}%`}}
                                 >

                                </div>
                                <div className='index'>
                                    {key}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BarGraph
