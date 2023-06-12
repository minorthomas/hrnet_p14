import './filter.scss';

export function Filter({ onClear, onFilter, filterText }) {
    return (
        <div className='filter'>
            <input
                className='filter_search'
                type='text'
                placeholder='Search'
                value={filterText}
                onChange={onFilter}
            />
            <button className='filter_clear' onClick={onClear}>
                x
            </button>
        </div>
    );
}
