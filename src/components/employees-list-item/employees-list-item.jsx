
import './employes-list-item.css';

export const EmployesListItem = () => {
    return (
        <li className="list__group-item d-flex justify-content-between">
            <span className="list__group-item-label">John Smith</span>
            <input type="text" className="list__group-item-input" defaultValue="1000$"/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        className="btn__cookie btn-sm ">
                    <i className="fas fa__cookie"></i>
                </button>

                <button type="button"
                        className="btn__trash btn-sm ">
                    <i className="fas fa__trash"></i>
                </button>
                <i className="fas fa__star"></i>
            </div>
        </li>
    );
};