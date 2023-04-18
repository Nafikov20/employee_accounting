import {EmployesListItem} from "../employes-list-item/employes-list-item";


import './employes-list.css';

export const EmployesList = () => {
    return (
        <ul className="app__list list-group">
            <EmployesListItem />
            <EmployesListItem />
            <EmployesListItem />
        </ul>
    );
};