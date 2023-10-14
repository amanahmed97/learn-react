/**
 * @author: Tejas Upmanyu (@tejasupmanyu)
 * TaskList Component - Renders list of task cards of all the tasks entered in timesheet.
 */
import * as React from 'react';
import './styles.scss';
import { IEntry } from '../NewEntrySheet';
import crossIcon from '../../assets/cross-icon.svg';
import { storageKey } from '../../constants/constants';


interface ITaskListProps {
    entries: IEntry[];
    onRemove: (entry : IEntry) => void;
    /*
    enables : boolean;
    onClose: () => {};
    */
}
interface ITaskCardProps {
    entry: IEntry;
    onRemove: (entry : IEntry) => void;
    /*
    enable: boolean;
    onClose: () => {enable:false;};
    */
}

export const TaskList: React.FC<ITaskListProps> = (props: ITaskListProps) => {
    const { entries } = props;
    /*
    const onRemoveCard = (entry:IEntry) => {
        const existingTasks = window.localStorage.getItem(storageKey);
        const newTasks = entries.filter(newEntry => (
            !(newEntry.task==entry.task && newEntry.hours==entry.hours && newEntry.hours==entry.minutes && newEntry.remarks==entry.remarks)
        ));
    
        window.localStorage.setItem(storageKey, JSON.stringify(newTasks));
    
    }
    */
    const onRemoveCard = (entry:IEntry) => {
        const existingTasksString = window.localStorage.getItem(storageKey);
        //const newEntry : IEntry;
        /*
        if(existingTasksString){
        const existingTasks = JSON.parse(existingTasksString);
        const newTasks = existingTasks.filter(newEntry => (
            !(newEntry.task==entry.task && newEntry.hours==entry.hours && newEntry.hours==entry.minutes && newEntry.remarks==entry.remarks)
        ));
            
        window.localStorage.setItem(storageKey, JSON.stringify(newTasks));
        }//if    
        */
    }


    return (
        <div className="task-list">
            {entries.map((entry: IEntry) => (
                <TaskCard entry={entry} onRemove={props.onRemove}/> //{onRemoveCard}
            ))}
        </div>
    );
};

/*<button className="close-sheet-btn" onClick={props.onClose} autoFocus>
                    <img src={crossIcon} alt="close" className="close-icon" />
  </button>
  <button className="close-sheet-btn"  onClick={(entry)=>{entry.stopPropagation();entry.preventDefault();entry.triggerDelete(task, index);}} autoFocus>
                    <img src={crossIcon} alt="close" className="close-icon" />
  </button> 
*/
// changed e to entry in close button onClick

const TaskCard: React.FC<ITaskCardProps> = (props: ITaskCardProps) => {
    const {
        entry: { task, hours, minutes, remarks },
    } = props;
    /*
    const onRemoveCard: () => {
        const entry:IEntry = props;
        
        props.onRemove(entry);
    }  
    onClick={onRemoveCard}
    */

    return (
        <div className="task-card">
            <div className="close-header">
            <button className="close-out">
            <img src={crossIcon} className="close-btn" alt="close" />
            </button>
            </div>
            <div className="task-head">
            <div className="task-title">{task}</div> 
            <div className="task-time">{`${hours}h ${minutes}m`} </div>
            </div>
             
            <div>
            <p className="remarks">{remarks}</p>    
            </div>     
        </div>
        
    );
};
