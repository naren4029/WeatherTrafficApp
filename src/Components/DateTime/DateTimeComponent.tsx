import './DateTimeStyle.scss';

export default function DateTimeComponent(props:any){
    
    return(
        <div className="date-time-pnl-cls">
            <input type="date" className="input-content-cls" min="2016-03-01" max="2016-04-08" defaultValue={props.date} onChange={(event)=>props.dateTimeChange(event,'date',props)}/>
            <input type="time" className="input-content-cls" defaultValue={props.time} onChange={(event)=>props.dateTimeChange(event,'time',props)}/>
        </div>
    );
}