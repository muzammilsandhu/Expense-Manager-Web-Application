import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import React from "react";
import { FormControl, InputGroup, Table } from "react-bootstrap";
import { useFilters, useGlobalFilter, useTable } from "react-table";

function GenericTable({ data, columns, handleDelete }) {
    const DefaultColumnFilter = ({ column: { filterValue, preFilteredRows, setFilter } }) => {
        const count = preFilteredRows.length;

        return (
            <InputGroup className="mb-3">
                <FormControl
                    type="text"
                    value={filterValue || ""}
                    onChange={(e) => {
                        setFilter(e.target.value || undefined);
                    }}
                    placeholder={`Search ${count} records...`}
                    aria-label={`Search ${count} records...`}
                />
            </InputGroup>
        );
    };

    const defaultColumn = React.useMemo(
        () => ({
            Filter: DefaultColumnFilter
        }),
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = useTable(
        {
            columns,
            data,
            defaultColumn
        },
        useFilters,
        useGlobalFilter
    );

    const { globalFilter } = state;

    const generatePdf = () => {
        const doc = new jsPDF();
        doc.setFontSize(12);

        const tableData = [];
        rows.forEach((row) => {
            const rowData = [];
            row.cells.forEach((cell, cellIndex) => {
                const column = columns[cellIndex];
                const cellData = cell.render('Cell');
                // Check if the cellData is a React element
                if (typeof cellData === 'string') {
                    rowData.push(cellData);
                } else {
                    const field = column.accessor;
                    rowData.push(data[row.index][field]?.toString());
                }
            });
            tableData.push(rowData);
        });

        doc.autoTable({
            head: [headerGroups[0].headers.map((column) => column.render('Header'))],
            body: tableData
        });

        doc.save('table.pdf');
    };



    return (
        <div>
            <div className="mb-3">
                {headerGroups.map((headerGroup, i) => (
                    <div {...headerGroup.getHeaderGroupProps()} key={i}>
                        {headerGroup.headers.map((column, j) => (
                            <div {...column.getHeaderProps()} key={j}>
                                {column.render('Header')}
                                {column.canFilter ? column.render('Filter') : null}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <Table striped bordered hover size="xl" {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup, i) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                            {headerGroup.headers.map((column, j) => (
                                <th {...column.getHeaderProps()} key={j}>
                                    {column.render('Header')}
                                </th>
                            ))}
                            <th>Actions</th>
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} key={i}>
                                {row.cells.map((cell, j) => {
                                    return (
                                        <td {...cell.getCellProps()} key={j}>
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                                <td>
                                    <span
                                        style={{ color: 'red', cursor: 'pointer' }}
                                        onClick={() => {
                                            handleDelete(row);
                                        }}
                                    >
                                        Delete
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <button onClick={generatePdf}>Download PDF</button>
        </div>
    );
}

export default GenericTable;
