import React, {FC, useEffect, useState} from "react";
import {DataGrid, GridActionsCellItem, GridColumns, GridRowModel} from "@mui/x-data-grid";
import {Box, Button, Grid, Paper, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import GenerateId from "../../../../global-component/GenerateId";


export interface iOtss {
    id: string,
    numberOrder: number,
    typeTs: string;
    numberInv: number | null;
    numberCfAttestation: string;
    quantity: number | null;
}

interface iProps {
    otssField: {
        current: iOtss[]
    }
}

const TableOtss: FC<iProps> = (props) => {

    // Указываем какие поля будут в строке таблицы
    const columns: GridColumns = [
        { field: 'numberOrder', headerName: '№', width: 20, editable: false, type: "number", headerAlign: 'center'},
        { field: 'typeTs', headerName: 'Тип ТС', width: 300, editable: true, type: 'string', headerAlign: 'center'},
        { field: 'numberInv', headerName: 'Инв. №', width: 250, editable: true, type: "number", headerAlign: 'center'},
        { field: 'numberCfAttestation', headerName: '№ акта о проведении аттестации', width: 286, editable: true, headerAlign: 'center'},
        { field: 'quantity', headerName: 'Количество', width: 100, editable: true, type: "number", headerAlign: 'center'},
        { field: 'test', headerName: 'Операции', width: 100, editable: false, type: 'actions', headerAlign: 'center', cellClassName: 'actions',
            getActions: ({ id }) => {
                return [
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Cancel"
                        className="textPrimary"
                        onClick={() => deleteRow(id)}
                        color="inherit"
                    />,
                ];
            }
        }
    ]

    const [rowsTbOtss, setRowsTbOtss] = useState<iOtss[]>(props.otssField.current);

    // Функция для обновления табличных данных
    const processRowUpdate = React.useCallback(
        async (newRow: GridRowModel) => {
            setRowsTbOtss(rowsTbOtss.map(n => n.id === newRow.id ? newRow : n))
            return newRow;
        },
        [rowsTbOtss],
    );

    const addNewRow = () => {
        setRowsTbOtss([...rowsTbOtss, {
            id: GenerateId(),
            numberOrder: rowsTbOtss.length + 1,
            typeTs: '',
            numberInv: null,
            numberCfAttestation: '',
            quantity: null
        }])
    }

    const deleteRow = (id: string | number) => {
        setRowsTbOtss(rowsTbOtss.filter(obj => obj.id !== id ))
    }

    useEffect(() => {
        props.otssField.current = rowsTbOtss
    }, [rowsTbOtss])

    return(
        <React.Fragment>
            <Grid container mt={2}>
                <Grid item sm={12} md={12} lg={12} xl={12}>
                    <Paper elevation={4}>
                        <Box p={2}>
                            <Typography variant={'h6'} pb={2}>Таблица ОТСС</Typography>
                            <Button onClick={addNewRow}>Добавить строку</Button>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    rows={rowsTbOtss}
                                    columns={columns}
                                    showCellRightBorder={true}
                                    showColumnRightBorder={true}
                                    processRowUpdate={processRowUpdate}
                                    experimentalFeatures={{ newEditingApi: true }}
                                />
                            </div>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default TableOtss;