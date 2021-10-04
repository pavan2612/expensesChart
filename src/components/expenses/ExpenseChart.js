import Chart from '../Chart/Chart'


const ExpenseChart = (props) => {

    const dataPoints = [
        {label: 'Jan', val: 0},
        {label: 'Feb', val: 0},
        {label: 'Mar', val: 0},
        {label: 'Apr', val: 0},
        {label: 'May', val: 0},
        {label: 'Jun', val: 0},
        {label: 'Jul', val: 0},
        {label: 'Aug', val: 0},
        {label: 'Sep', val: 0},
        {label: 'Oct', val: 0},
        {label: 'Nov', val: 0},
        {label: 'Dec', val: 0},
    ]  
    
    for(let dataPoint of props.item){
        const month = dataPoint.date.getMonth()
        dataPoints[month].val += dataPoint.amount
    }

    return(
        <Chart datapoint={dataPoints}/>
    )
}
export default ExpenseChart;