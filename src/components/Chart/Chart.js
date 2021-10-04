import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {

    const expensesValue = props.datapoint.map((dataPoint) => {
            return dataPoint.val
    })
    const maximumValue = Math.max(...expensesValue)

    return(
    <div className='chart'>
        {props.datapoint.map((eachdatapoint) => {
            return(
        <ChartBar 
        key = {eachdatapoint.label}
        value = {eachdatapoint.val}
        max = {maximumValue}
        label = {eachdatapoint.label}
        />
        )})}
    </div>)
}

export default Chart
