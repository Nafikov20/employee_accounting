
import './app-info.css';

export const AppInfo = ({increased, employees}) => {
    return (
        <div className="app__info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
};