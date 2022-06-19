import React, {FC, useState} from "react";
import {Button, Typography} from "@mui/material";
import {DataGrid, GridActionsCellItem, GridColumns, GridRowModel} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import GenerateId from "../../../global-component/GenerateId";
import "../static/index.css";

interface iRow {
    id: string,
    numberOrder: number,
    field1: string,
    field2: string,
    field3: string
    field4: string
}

const Table1: FC = () => {

    // Указываем какие поля будут в строке таблицы
    const columns: GridColumns = [
        {
            field: 'numberOrder',
            headerName: '№',
            width: 50,
            editable: true,
            type: "number",
            headerAlign: 'center'
        },
        {
            field: 'field1',
            headerName: 'Наименование основного технического средства и системы, заводской (инвентарный) номер',
            width: 170,
            editable: true,
            type: "string",
            headerAlign: 'center'
        },
        {
            field: 'field2',
            headerName: 'Минимальное расстояние до границы контролируемой зоны, м',
            width: 170,
            editable: true,
            type: "string",
            headerAlign: 'center'
        },
        {
            field: 'field3',
            headerName: 'Сведения о специальных проверках4',
            width: 115,
            editable: true,
            type: "string",
            headerAlign: 'center'
        },
        {
            field: 'field4',
            headerName: 'Сведения о специальных исследованиях или сертификатах соответствия5',
            width: 170,
            editable: true,
            type: "string",
            headerAlign: 'center'
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

    const [rowsTbPo, setRowsTbPo] = useState<iRow[]>([]);

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
            numberOrder: rowsTbPo.length + 1,
            field1: '',
            field2: '',
            field3: '',
            field4: ''
        }])
    }

    const deleteRow = (id: string | number) => {
        setRowsTbPo(rowsTbPo.filter(obj => obj.id !== id))
    }

    return(
        <React.Fragment>
            <Typography variant={'body1'} textAlign={'right'}>Таблица 1</Typography>
            <Button onClick={addNewRow} id={'buttonAddRow'}>Добавить строку</Button>
            <div style={{height: 400, width: '100%'}}>
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

export default Table1;