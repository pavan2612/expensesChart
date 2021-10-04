import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {

    const expensesValue = props.datapoint.map((dataPoint) => {
            return dataPoint.val
    })
    const maximumValue = [...expensesValue]

    return(
    <div>
        {props.datapoint.map((datapoint) => {
        <ChartBar 
        key = {datapoint.label}
        value = {datapoint.val}
        max = {maximumValue}
        label = {datapoint.label}
        />
})}
    </div>)
}

export default Chart
