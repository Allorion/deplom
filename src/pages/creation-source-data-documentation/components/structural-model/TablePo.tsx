import React, {FC, useEffect, useState} from "react";
import {DataGrid, GridActionsCellItem, GridColumns, GridRowModel} from "@mui/x-data-grid";
import {Box, Button, Grid, Paper, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import GenerateId from "../../../../global-component/GenerateId";


export interface iPo {
    id: string,
    numberOrder: number,
    namePo: string;
    quantity: number | null;
    serialNumber: number | null;
    numberLicenses: number | null;
    endDate: Date | null
}

interface iProps {
    poField: {
        current: iPo[]
    }
}

const TablePo: FC<iProps> = (props) => {

    // Указываем какие поля будут в строке таблицы
    const columns: GridColumns = [
        {field: 'numberOrder', headerName: '№', width: 20, editable: false, type: "number", headerAlign: 'center'},
        {field: 'namePo', headerName: 'Название ПО', width: 300, editable: true, type: 'string', headerAlign: 'center'},
        {field: 'quantity', headerName: 'Количество', width: 100, editable: true, type: "number", headerAlign: 'center'},
        {field: 'serialNumber', headerName: 'Серийный номер', width: 250, editable: true, type: "number", headerAlign: 'center'},
        {field: 'numberLicenses', headerName: 'Номер лицензии', width: 250, editable: true, type: "number", headerAlign: 'center'},
        {field: 'endDate', headerName: 'Дата окончания', width: 250, editable: true, type: "date", headerAlign: 'center'},
        {
            field: 'test',
            headerName: 'Операции',
            width: 100,
            editable: false,
            type: 'actions',
            cellClassName: 'actions',
            headerAlign: 'center',
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

    const [rowsTbPo, setRowsTbPo] = useState<iPo[]>(props.poField.current);

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
            namePo: '',
            quantity: null,
            serialNumber: null,
            numberLicenses: null,
            endDate: null
        }])
    }

    const deleteRow = (id: string | number) => {
        setRowsTbPo(rowsTbPo.filter(obj => obj.id !== id))
    }

    useEffect(() => {
        props.poField.current = rowsTbPo
    }, [rowsTbPo])

    return (
        <React.Fragment>
            <Grid container mt={2}>
                <Grid item sm={12} md={12} lg={12} xl={12}>
                    <Paper elevation={4}>
                        <Box p={2}>
                            <Typography variant={'h6'} pb={2}>Таблица программного обеспечения</Typography>
                            <Button onClick={addNewRow}>Добавить строку</Button>
                            <div style={{height: 400, width: '100%'}}>
                                <DataGrid
                                    rows={rowsTbPo}
                                    showCellRightBorder={true}
                                    showColumnRightBorder={true}
                                    columns={columns}
                                    processRowUpdate={processRowUpdate}
                                    experimentalFeatures={{newEditingApi: true}}
                                />
                            </div>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default TablePo;