
import './app-filter.css';

export const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen100', label: 'З/П больше 1000$'},
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button
                className={`btn btn__list ${clazz}`}
                type='button'
                key={name}
                onClick={() => props.onFilterSelect(name)}
            >
                {label}
            </button>
        )
    })

    return (
        <div className="btn__group">
            {buttons}
        </div>
    );
};