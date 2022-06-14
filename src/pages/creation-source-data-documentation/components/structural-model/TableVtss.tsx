import React, {FC, useEffect, useState} from "react";
import {DataGrid, GridActionsCellItem, GridColumns, GridRowModel} from "@mui/x-data-grid";
import {Box, Button, Grid, Paper, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import GenerateId from "../../../../global-component/GenerateId";


export interface iVtss {
    id: string,
    numberOrder: number,
    typeTs: string;
    numberInv: number | null;
    numberCfAttestation: string;
    quantity: number | null;
}

interface iProps {
    vtssField: {
        current: iVtss[]
    }
}

const TableVtss: FC<iProps> = (props) => {

    // Указываем какие поля будут в строке таблицы
    const columns: GridColumns = [
        {field: 'numberOrder', headerName: '№', width: 20, editable: false, type: "number", headerAlign: 'center'},
        {field: 'typeTs', headerName: 'Тип ТС', width: 300, editable: true, type: 'string', headerAlign: 'center'},
        {field: 'numberInv', headerName: 'Инв. №', width: 250, editable: true, type: "number", headerAlign: 'center'},
        {field: 'numberCfAttestation', headerName: '№ акта о проведении аттестации', width: 286, editable: true, headerAlign: 'center'},
        {field: 'quantity', headerName: 'Количество', width: 100, editable: true, type: "number", headerAlign: 'center'},
        {
            headerAlign: 'center',
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

    const [rowsTbVtss, setRowsTbVtss] = useState<iVtss[]>(props.vtssField.current);

    // Функция для обновления табличных данных
    const processRowUpdate = React.useCallback(
        async (newRow: GridRowModel) => {
            setRowsTbVtss(rowsTbVtss.map(n => n.id === newRow.id ? newRow : n))
            return newRow;
        },
        [rowsTbVtss],
    );

    const addNewRow = () => {
        setRowsTbVtss([...rowsTbVtss, {
            id: GenerateId(),
            numberOrder: rowsTbVtss.length + 1,
            typeTs: '',
            numberInv: null,
            numberCfAttestation: '',
            quantity: null
        }])
    }

    const deleteRow = (id: string | number) => {
        setRowsTbVtss(rowsTbVtss.filter(obj => obj.id !== id))
    }

    useEffect(() => {
        props.vtssField.current = rowsTbVtss
    }, [rowsTbVtss])

    return (
        <React.Fragment>
            <Grid container mt={2}>
                <Grid item sm={12} md={12} lg={12} xl={12}>
                    <Paper elevation={4}>
                        <Box p={2}>
                            <Typography variant={'h6'} pb={2}>Таблица ВТСС</Typography>
                            <Button onClick={addNewRow}>Добавить строку</Button>
                            <div style={{height: 400, width: '100%'}}>
                                <DataGrid
                                    rows={rowsTbVtss}
                                    columns={columns}
                                    showCellRightBorder={true}
                                    showColumnRightBorder={true}
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

export default TableVtss;