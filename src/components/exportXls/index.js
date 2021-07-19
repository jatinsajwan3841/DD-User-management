import React from 'react'
import ReactExport from 'react-data-export'
import { useSelector } from 'react-redux'

const ExcelFile = ReactExport.ExcelFile
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn

const ExportXls = () => {
    const dataList = useSelector((state) => state.data)
    return (
        <ExcelFile element={<button>ExportXls Data</button>}>
            <ExcelSheet data={dataList} name="Data">
                <ExcelColumn label="id" value="id" />
                <ExcelColumn label="chart_label" value="chart_label" />
                <ExcelColumn label="chart_type" value="chart_type" />
                <ExcelColumn label="data_source" value="data_source" />
                <ExcelColumn
                    label="data"
                    value={(data) => JSON.stringify(data.data)}
                />
            </ExcelSheet>
        </ExcelFile>
    )
}

export default ExportXls
