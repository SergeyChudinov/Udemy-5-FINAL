import './app-filter.css'

const AppFilter = (props) => {
    const buttonData = [
        {name: 'Brazil', label: 'Brazil'},
        {name: 'Kenya', label: 'Kenya'},
        {name: 'Columbia', label: 'Columbia'},
        {name: 'all', label: 'all'}
    ];
    const buttons = buttonData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? "aboutOurBeans-button-light" : "aboutOurBeans-button";
        return (
            <button    //<button className="aboutOurBeans-button">Brazil</button>
            onClick={() => props.onFilterSelect(name)}
                className={clazz}
                type="button"
                key={name}>
                {label}
            </button>
        )
    })
    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;