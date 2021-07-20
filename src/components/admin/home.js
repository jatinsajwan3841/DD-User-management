import React from 'react'
import {
    makeStyles,
    Container,
    TextField,
    Button,
    Fab,
} from '@material-ui/core'
import PostAddIcon from '@material-ui/icons/PostAdd'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, editData } from '../../actions'
import Chart from 'chart.js/auto'
import Xls from '../exportXls'
import Pdf from '../exportPdf'
import './index.scss'

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}))

const Home = () => {
    const dataList = useSelector((state) => state.data)
    const [editvals, seteditvals] = React.useState('')
    const [open, setOpen] = React.useState(false)
    const [open1, setOpen1] = React.useState(false)

    const chartRefs = React.useRef([])
    const id = React.useRef(dataList[dataList.length - 1].id + 1)
    const charts = React.useRef([])

    const dispatch = useDispatch()
    const classes = useStyles()

    const submit = async (e) => {
        e.preventDefault()
        await setOpen(false)
        const tar = e.target
        const details = {
            id: id.current,
            chart_label: tar.chart_label.value,
            chart_type: tar.chart_type.value,
            data_source: tar.data_source.value,
            data:
                tar.chart_type.value !== 'bubble'
                    ? [13, 15, 51, 53]
                    : [
                          {
                              x: 20,
                              y: 30,
                              r: 5,
                          },
                          {
                              x: 30,
                              y: 10,
                              r: 10,
                          },
                          {
                              x: 40,
                              y: 20,
                              r: 8,
                          },
                          {
                              x: 50,
                              y: 25,
                              r: 14,
                          },
                      ],
        }
        await dispatch(addData(details))
        id.current++
        chartDraw(details)
    }

    const chartDraw = (details) => {
        charts.current[details.id] !== undefined &&
            charts.current[details.id].destroy()
        charts.current[details.id] = new Chart(
            chartRefs.current[details.id].getContext('2d'),
            {
                type: details.chart_type,
                data: {
                    labels: [1, 2, 3, 4],
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
            },
        )
    }

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        setOpen1(false)
    }

    const handleEdit = (e) => {
        e.preventDefault()
        setOpen1(false)
        const tar = e.target
        const editlist = {
            id: parseInt(tar.id.value),
            chart_label: tar.chart_label.value,
            chart_type: tar.chart_type.value,
            data_source: tar.data_source.value,
            data:
                tar.chart_type.value !== 'bubble'
                    ? [13, 15, 51, 53]
                    : [
                          {
                              x: 20,
                              y: 30,
                              r: 5,
                          },
                          {
                              x: 30,
                              y: 10,
                              r: 10,
                          },
                          {
                              x: 40,
                              y: 20,
                              r: 8,
                          },
                          {
                              x: 50,
                              y: 25,
                              r: 14,
                          },
                      ],
        }
        seteditvals('')
        chartDraw(editlist)
        dispatch(editData(editlist))
    }

    const tempvals = (tid) => {
        setOpen1(true)
        const element = dataList.findIndex((elem) => elem.id === tid)
        seteditvals(dataList[element])
    }

    React.useEffect(() => {
        dataList.forEach((element) => {
            chartDraw(element)
        })
    }, [])

    return (
        <Container style={{ paddingLeft: '73px' }}>
            <Fab
                color="secondary"
                aria-label="add"
                className={classes.fab}
                onClick={handleClickOpen}
            >
                <PostAddIcon />
            </Fab>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <form onSubmit={submit}>
                    <DialogTitle id="form-dialog-title">
                        Add new data
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter the details below:
                        </DialogContentText>

                        <TextField
                            required
                            fullWidth
                            name="chart_label"
                            label="chart label"
                            helperText="Please enter chart label"
                        />
                        <FormControl style={{ width: '150px' }}>
                            <InputLabel id="chart_type">Data type</InputLabel>
                            <Select
                                labelId="chart_type"
                                name="chart_type"
                                required
                            >
                                <MenuItem value="line">Line chart</MenuItem>
                                <MenuItem value="bar">Bar chart</MenuItem>
                                <MenuItem value="radar">Radar chart</MenuItem>
                                <MenuItem value="doughnut">
                                    Doughnut chart
                                </MenuItem>
                                <MenuItem value="pie">Pie chart</MenuItem>
                                <MenuItem value="polarArea">
                                    Polar chart
                                </MenuItem>
                                <MenuItem value="bubble">Bubble chart</MenuItem>
                                <MenuItem value="scatter">
                                    Scatter chart
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl
                            style={{ marginLeft: '15px', width: '150px' }}
                        >
                            <InputLabel id="data_source">
                                Data Source
                            </InputLabel>
                            <Select labelId="data_source" name="data_source">
                                <MenuItem value="SOAP">SOAP</MenuItem>
                                <MenuItem value="REST">REST</MenuItem>
                                <MenuItem value="GraphQL">GraphQL</MenuItem>
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<PostAddIcon />}
                            type="submit"
                        >
                            Add
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>

            {editvals !== '' && (
                <Dialog
                    open={open1}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <form onSubmit={handleEdit}>
                        <DialogTitle id="form-dialog-title">
                            Edit details
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Please edit the details below:
                            </DialogContentText>
                            <input
                                type="number"
                                hidden
                                readOnly
                                name="id"
                                value={editvals.id}
                            />
                            <TextField
                                required
                                fullWidth
                                name="chart_label"
                                label="chart label"
                                helperText="Please enter chart label"
                                defaultValue={editvals.chart_label}
                            />
                            <FormControl style={{ width: '150px' }}>
                                <InputLabel id="chart_type">
                                    Data type
                                </InputLabel>
                                <Select
                                    labelId="chart_type"
                                    name="chart_type"
                                    required
                                    defaultValue={editvals.chart_type}
                                >
                                    <MenuItem value="line">Line chart</MenuItem>
                                    <MenuItem value="bar">Bar chart</MenuItem>
                                    <MenuItem value="radar">
                                        Radar chart
                                    </MenuItem>
                                    <MenuItem value="doughnut">
                                        Doughnut chart
                                    </MenuItem>
                                    <MenuItem value="pie">Pie chart</MenuItem>
                                    <MenuItem value="polarArea">
                                        Polar chart
                                    </MenuItem>
                                    <MenuItem value="bubble">
                                        Bubble chart
                                    </MenuItem>
                                    <MenuItem value="scatter">
                                        Scatter chart
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl
                                style={{
                                    marginLeft: '15px',
                                    width: '150px',
                                }}
                            >
                                <InputLabel id="data_source">
                                    Data Source
                                </InputLabel>
                                <Select
                                    labelId="data_source"
                                    name="data_source"
                                    defaultValue={editvals.data_source}
                                >
                                    <MenuItem value="SOAP">SOAP</MenuItem>
                                    <MenuItem value="REST">REST</MenuItem>
                                    <MenuItem value="GraphQL">GraphQL</MenuItem>
                                </Select>
                            </FormControl>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<PostAddIcon />}
                                type="submit"
                            >
                                Edit
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            )}

            <div className="content">
                {dataList.map((v, i) => (
                    <div key={i} className="chart-holder resizable">
                        <canvas ref={(el) => (chartRefs.current[v.id] = el)} />
                        <EditIcon
                            color="primary"
                            size="small"
                            onClick={() => tempvals(v.id)}
                        />
                        <DeleteIcon
                            color="secondary"
                            size="small"
                            onClick={() => dispatch(deleteData(v.id))}
                        />
                    </div>
                ))}
            </div>
            <Xls />
            <Pdf />
        </Container>
    )
}

export default Home
