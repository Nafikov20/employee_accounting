import {EmployeesListItem} from "../employees-list-item/employees-list-item";


import './employees-list.css';

export const EmployeesList = ({data}) => {

    const elem = data.map(i => {
        const {id, ...iProps} = i
        return (
            <EmployeesListItem key={id} {...iProps}/>
        )
    })

    return (
        <ul className="app__list list-group">
            {elem}
        </ul>
    );
};