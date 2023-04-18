
import {AppInfo} from "../app-info/app-info";
import {SearchPanel} from "../search-panel/search-panel";
import {AppFilter} from "../app-filter/app-filter";
import {EmployeesList} from "../employes-list/employees-list";
import {EmployeesAddForm} from "../employees-add-form/employees-add-form";


import './app.css';



export const App = () => {
    return (
        <div className='app'>
            <AppInfo />

            <div className="search__panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList />
            <EmployeesAddForm/>
        </div>
    );
};