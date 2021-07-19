import { usePDF, Document, Page, Text } from '@react-pdf/renderer'
import { useSelector } from 'react-redux'

const ExportPdf = () => {
    const dataList = useSelector((state) => state.data)

    const MyDoc = (
        <Document>
            <Page size="A4" wrap={true}>
                <Text
                    render={({ pageNumber, totalPages }) =>
                        `${dataList.map(
                            (v) =>
                                `ID : ${v.id}, chart_label : ${
                                    v.chart_label
                                }, chart_type : ${
                                    v.chart_type
                                }, data_source : ${
                                    v.data_source
                                }, data : ${JSON.stringify(v.data)}`,
                        )}`
                    }
                    style={{
                        color: 'black',
                        margin: 30,
                    }}
                    wrap={true}
                />
            </Page>
        </Document>
    )

    const [instance, updateInstance] = usePDF({ document: MyDoc })
    if (instance.loading) return <div>Loading ...</div>

    if (instance.error) return <div>Something went wrong: {instance.error}</div>

    return (
        <a href={instance.url} download="test.pdf">
            <button>Export to PDF</button>
        </a>
    )
}
export default ExportPdf
