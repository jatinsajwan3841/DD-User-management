import React from 'react'
import Navbar from '../sidebar'
import { Container } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Chart from 'chart.js/auto'
import Xls from '../exportXls'
import Pdf from '../exportPdf'
import '../admin/index.scss'

const User = () => {
    const dataList = useSelector((state) => state.data)
    const chartRefs = React.useRef([])

    const chartDraw = async (details) => {
        new Chart(chartRefs.current[details.id].getContext('2d'), {
            type: details.chart_type,
            data: {
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                ],
                datasets: [
                    {
                        label: details.chart_label,
                        data: details.data,
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
            <Container>
                <div className="content">
                    {dataList.map((v, i) => (
                        <div key={i} className="chart-holder">
                            <canvas
                                ref={(el) => (chartRefs.current[v.id] = el)}
                            />
                        </div>
                    ))}
                </div>
                <Xls />
                <Pdf />
            </Container>
        </>
    )
}

export default User
