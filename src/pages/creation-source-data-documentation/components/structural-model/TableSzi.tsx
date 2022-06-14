import React, {FC, useEffect, useState} from "react";
import {DataGrid, GridActionsCellItem, GridColumns, GridRowModel} from "@mui/x-data-grid";
import {Box, Button, Grid, Paper, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import GenerateId from "../../../../global-component/GenerateId";


export interface iSzi {
    id: string,
    numberOrder: number,
    meansProtection: string,
    quantity: number | null,
    serialNumber: number | null,
    certificateConformity: number | null,
    endDate: Date | null
}

interface iProps {
    sziField: {
        current: iSzi[]
    }
}

const TableSzi: FC<iProps> = (props) => {

    // Указываем какие поля будут в строке таблицы
    const columns: GridColumns = [
        { field: 'numberOrder', headerName: '№', width: 20, editable: false, type: "number", headerAlign: 'center'},
        { field: 'meansProtection', headerName: 'Название средства защиты', width: 300, editable: true, type: 'string', headerAlign: 'center'},
        { field: 'quantity', headerName: 'Количество', width: 100, editable: true, type: "number", headerAlign: 'center'},
        { field: 'serialNumber', headerName: 'Серийный номер', width: 250, editable: true, type: "number", headerAlign: 'center'},
        { field: 'certificateConformity', headerName: 'Сертификат соответствия', width: 250, editable: true, type: "number", headerAlign: 'center'},
        { field: 'endDate', headerName: 'Дата окончания', width: 250, editable: true, type: "date", headerAlign: 'center'},
        { field: 'test', headerName: 'Операции', width: 100, editable: false, type: 'actions', cellClassName: 'actions',
            headerAlign: 'center',
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

    const [rowsTbSzi, setRowsTbSzi] = useState<iSzi[]>(props.sziField.current);

    // Функция для обновления табличных данных
    const processRowUpdate = React.useCallback(
        async (newRow: GridRowModel) => {
            setRowsTbSzi(rowsTbSzi.map(n => n.id === newRow.id ? newRow : n))
            return newRow;
        },
        [rowsTbSzi],
    );

    const addNewRow = () => {
        setRowsTbSzi([...rowsTbSzi, {
            id: GenerateId(),
            numberOrder: rowsTbSzi.length + 1,
            meansProtection: '',
            quantity: null,
            serialNumber: null,
            certificateConformity: null,
            endDate: null
        }])
    }

    const deleteRow = (id: string | number) => {
        setRowsTbSzi(rowsTbSzi.filter(obj => obj.id !== id ))
    }

    useEffect(() => {
        props.sziField.current = rowsTbSzi
    }, [rowsTbSzi])

    return(
        <React.Fragment>
            <Grid container mt={2}>
                <Grid item sm={12} md={12} lg={12} xl={12}>
                    <Paper elevation={4}>
                        <Box p={2}>
                            <Typography variant={'h6'} pb={2}>Таблица СЗИ</Typography>
                            <Button onClick={addNewRow}>Добавить строку</Button>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    rows={rowsTbSzi}
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

export default TableSzi;