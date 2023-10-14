/**
 * @author: Tejas Upmanyu (@tejasupmanyu)
 * App Component
 */
import React from 'react';
import './App.scss';
import addIcon from './assets/plus-icon.svg';
import { NewEntrySheet, IEntry } from './components/NewEntrySheet';
import { TaskList } from './components/TaskList';
import { storageKey } from './constants/constants';

const App: React.FC = () => {
    const [isEntrySheetOpen, setIsEntrySheetOpen] = React.useState(false);

    const openEntrySheet = () => {
        setIsEntrySheetOpen(true);
    };

    const closeEntrySheet = () => {
        setIsEntrySheetOpen(false);
    };

    const onAddEntry = (entry: IEntry) => {
        const existingTasksString = window.localStorage.getItem(storageKey);
        if (existingTasksString) {
            const existingTasks = JSON.parse(existingTasksString);
            const newTasks = [...existingTasks, entry];
            window.localStorage.setItem(storageKey, JSON.stringify(newTasks));
        } else {
            window.localStorage.setItem(storageKey, JSON.stringify([entry]));
        }
        closeEntrySheet();
    };
    /*
    const onDeleteEntry = (entry : IEntry) => {
        entry : null;
    }
    */
    const getTaskEntries = () => {
        /* Use to reset
        window.localStorage.setItem(storageKey,""); 
        window.localStorage.setItem('hrs','0');
        window.localStorage.setItem('mins','0');
        */
        const entriesString = window.localStorage.getItem(storageKey);
        const entries = entriesString ? JSON.parse(entriesString) : [];
        return entries;
    };

    const entries = getTaskEntries();
    
    //calculate the time
    let hrs = window.localStorage.getItem('hrs');
    let hr = hrs ? JSON.parse(hrs) : [];
    hr = hr * 1;
    let mins = window.localStorage.getItem('mins');
    let min = mins ? JSON.parse(mins) : [];
    min = min * 1;//added this to display min
    let time : number;
    time = hr * 60 + min;
    time = (time/(8*60)) * 100;
    //console.log("HI"+{time});

    return (
        <div className="app-container">
            <h1>Timesheet</h1>
            <div className="outbar">
                {   
                    time < 50  ? <div className="red-bar" style={{width:time+'%'}}>&nbsp;</div> : 
                    (time < 100 ? <div className="orange-bar" style={{width:time+'%'}}>&nbsp;</div> :
                    <div className="green-bar" style={{width:time+'%'}}>&nbsp;</div>) 
                    
                } 
                    {/* ; */}  
            </div>
            {/*<h4>{time} {hr} {min}</h4>*/}
            
            {entries.length > 0 ? (
                <TaskList entries={entries} onRemove={entries}/> 
            ) : (
                <p className="empty-text">No entries yet. Add a new entry by clicking the + button.</p>
            )}
            <button className="floating-add-entry-btn" onClick={openEntrySheet}>
                <img className="add-icon" src={addIcon} alt="add entry" />
            </button>
            {isEntrySheetOpen && <NewEntrySheet onClose={closeEntrySheet} onAdd={onAddEntry} />}
        </div>
    );
};

export default App;
