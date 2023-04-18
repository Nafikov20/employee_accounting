import './search-panel.css'

export const SearchPanel = () => {
    return (
        <div>
            <input type="text"
                   className='form-control search-input'
                   placeholder='Найти сотрудника'
            />
        </div>
    );
};    