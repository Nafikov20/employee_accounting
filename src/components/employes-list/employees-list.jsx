import {EmployeesListItem} from "../employees-list-item/employees-list-item";


import './employees-list.css';

export const EmployeesList = () => {
    return (
        <ul className="app__list list-group">
            <EmployeesListItem />
            <EmployeesListItem />
            <EmployeesListItem />
        </ul>
    );
};