import {EmployeesListItem} from "../employees-list-item/employees-list-item";


import './employees-list.css';

export const EmployeesList = ({data}) => {

    const elem = data.map(i => {
        return (
            <EmployeesListItem {...i}/>
        )
    })

    return (
        <ul className="app__list list-group">
            {elem}
        </ul>
    );
};