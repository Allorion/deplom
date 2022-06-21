import React, {FC, useState} from "react";
import {DataGrid, GridActionsCellItem, GridColumns, GridRowModel} from "@mui/x-data-grid";
import GenerateId from "../../../global-component/GenerateId";
import {Button} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


interface ITable {
    id: string,
    field1: string,
    field2: string
    field3: string
}


const PropertyList: FC = () => {

    // Указываем какие поля будут в строке таблицы
    const columns: GridColumns = [
        {
            field: 'field1',
            headerName: '',
            width: 100,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'field2',
            headerName: '',
            width: 270,
            editable: false,
            type: "number",
            headerAlign: 'center',
            align: 'left'
        },
        {
            field: 'field2',
            headerName: '',
            width: 270,
            editable: false,
            type: "number",
            headerAlign: 'center',
            align: 'left'
        },
        {
            field: 'test',
            headerName: 'Операции',
            width: 100,
            editable: false,
            type: 'actions',
            cellClassName: 'actions',
            getActions: ({id}) => {
                return [
                    <GridActionsCellItem
                        icon={<DeleteIcon/>}
                        label="Cancel"
                        className="textPrimary"
                        onClick={() => deleteRow(id)}
                        color="inherit"
                    />,
                ];
            }
        }
    ]

    const [rowsTbPo, setRowsTbPo] = useState<ITable[]>([]);

    // Функция для обновления табличных данных
    const processRowUpdate = React.useCallback(
        async (newRow: GridRowModel) => {
            setRowsTbPo(rowsTbPo.map(n => n.id === newRow.id ? newRow : n))
            return newRow;
        },
        [rowsTbPo],
    );

    const addNewRow = () => {
        setRowsTbPo([...rowsTbPo, {
            id: GenerateId(),
            field1: '',
            field2: '',
            field3: ''
        }])
    }

    const deleteRow = (id: string | number) => {
        setRowsTbPo(rowsTbPo.filter(obj => obj.id !== id))
    }

    return (
        <React.Fragment>
            <div style={{height: 787, width: '97%', marginBottom: 30}}>
                <Button onClick={addNewRow}>Добавить строку</Button>
                <DataGrid
                    rows={rowsTbPo}
                    columns={columns}
                    showCellRightBorder={true}
                    showColumnRightBorder={true}
                    processRowUpdate={processRowUpdate}
                    experimentalFeatures={{newEditingApi: true}}
                />
            </div>
        </React.Fragment>
    );
};

export default PropertyList;