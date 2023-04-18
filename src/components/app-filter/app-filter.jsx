
import './app-filter.css';

export const AppFilter = () => {
    return (
        <div className="btn__group">
            <button
                className="btn btn__list btn-light"
                type='button'
            >
                Все сотрудники
            </button>
            <button
                className="btn btn__list btn-outline-light"
                type='button'
            >
                На повышение
            </button>
            <button
                className="btn btn__list btn-outline-light"
                type='button'
            >
                З/П больше 1000$
            </button>
        </div>
    );
};