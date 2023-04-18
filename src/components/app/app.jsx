
import {AppInfo} from "../app-info/app-info";
import {SearchPanel} from "../search-panel/search-panel";
import {AppFilter} from "../app-filter/app-filter";
import {EmployeesList} from "../employes-list/employees-list";
import {EmployeesAddForm} from "../employees-add-form/employees-add-form";


import './app.css';



export const App = () => {

    const data = [
        {name: "Ivan I.", salary: 3000, increase: true},
        {name: "Alex M.", salary: 800, increase: false},
        {name: "John C.", salary: 1000, increase: false},
        {name: "Mark R.", salary: 11000, increase: false},
    ]

    return (
        <div className='app'>
            <AppInfo />

            <div className="search__panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
};