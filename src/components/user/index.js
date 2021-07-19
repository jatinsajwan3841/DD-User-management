import React from 'react'
import Navbar from '../sidebar'
import { useSelector } from 'react-redux'
import Chart from 'chart.js/auto'

const User = () => {
    const dataList = useSelector((state) => state.data)
    const chartRefs = React.useRef([])

    const chartDraw = async (details) => {
        new Chart(chartRefs.current[details.id].getContext('2d'), {
            type: details.chart_type,
            data: {
                labels: [1, 2, 3, 4],
                datasets: [
                    {
                        label: details.chart_label,
                        data: [13, 15, 51, 53],
                        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            },
        })
    }

    React.useEffect(() => {
        dataList.forEach((element) => {
            chartDraw(element)
        })
    }, [])
    return (
        <>
            <Navbar />
            <div className="content">
                {dataList.map((v, i) => (
                    <div key={i} className="chart-holder">
                        <canvas ref={(el) => (chartRefs.current[v.id] = el)} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default User
