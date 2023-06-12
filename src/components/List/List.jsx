import { useContext, useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import { UsersContext } from '../../utils/Context';
import { Filter } from '../Filter/Filter';

const dateFormat = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
};

const columns = [
    {
        name: 'First Name',
        selector: (row) => row.firstName,
        sortable: true,
    },
    {
        name: 'Last Name',
        selector: (row) => row.lastName,
        sortable: true,
    },
    {
        name: 'Start Date',
        selector: (row) =>
            new Date(row.startdate).toLocaleDateString('fr-FR', dateFormat),
        sortable: true,
    },
    //
    {
        name: 'Department',
        selector: (row) => row.department.value,
        sortable: true,
    },
    {
        name: 'Date of birth',
        selector: (row) =>
            new Date(row.birthdate).toLocaleDateString('fr-FR', dateFormat),
        sortable: true,
    },
    {
        name: 'Street',
        selector: (row) => row.street,
        sortable: true,
    },
    {
        name: 'City',
        selector: (row) => row.city,
        sortable: true,
    },
    {
        name: 'State',
        selector: (row) => row.state.value,
        sortable: true,
    },
    {
        name: 'Zip Code',
        selector: (row) => row.zip,
        sortable: true,
    },
];

export function List() {
    const { usersData } = useContext(UsersContext);
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    const filteredItems = usersData.filter(
        (employee) =>
            employee.firstName
                .toLowerCase()
                .includes(filterText.toLowerCase()) ||
            employee.lastName
                .toLowerCase()
                .includes(filterText.toLowerCase()) ||
            employee.department.value
                .toLowerCase()
                .includes(filterText.toLowerCase()) ||
            employee.street.toLowerCase().includes(filterText.toLowerCase()) ||
            employee.city.toLowerCase().includes(filterText.toLowerCase()) ||
            employee.state.label
                .toLowerCase()
                .includes(filterText.toLowerCase()) ||
            employee.zip.toLowerCase().includes(filterText.toLowerCase())
    );

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <Filter
                onFilter={(e) => setFilterText(e.target.value)}
                onClear={handleClear}
                filterText={filterText}
            />
        );
    }, [filterText, resetPaginationToggle]);

    return (
        <DataTable
            title='Employee List'
            pagination
            columns={columns}
            data={filteredItems}
            subHeaderComponent={subHeaderComponentMemo}
            subHeader
            paginationResetDefaultPage={resetPaginationToggle}
            persistTableHead
        />
    );
}
