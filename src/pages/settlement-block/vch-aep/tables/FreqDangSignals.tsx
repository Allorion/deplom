import React, {FC, useEffect, useState} from "react";
import {Box, Button, Paper, Typography} from "@mui/material";
import {DataGrid, GridActionsCellItem, GridColumns, GridRowModel} from "@mui/x-data-grid";
import GenerateId from "../../../../global-component/GenerateId";
import DeleteIcon from "@mui/icons-material/Delete";

interface iProps {
    freqDangSignalsVchAepRef: {
        current: iFreqDangSignalsVchAep[]
    }
}


export interface iFreqDangSignalsVchAep {
    id: string,
    numberOrder: number,
    j1: number | null,
    j2: number | null,
    j3: number | null,
    j4: number | null,
    Fj1: number | null,
    Fj2: number | null,
    Fj3: number | null,
    Fj4: number | null,
}

const FreqDangSignals: FC<iProps> = (props) => {

    // Указываем какие поля будут в строке таблицы
    const columns: GridColumns = [
        {field: 'numberOrder', headerName: '№', width: 50, editable: true, type: "number", headerAlign: 'center'},
        {field: 'j1', headerName: 'j', width: 115, editable: true, type: "number", headerAlign: 'center'},
        {field: 'Fj1', headerName: 'Fj, MГц', width: 115, editable: true, type: "number", headerAlign: 'center'},
        {field: 'j2', headerName: 'j', width: 115, editable: true, type: "number", headerAlign: 'center'},
        {field: 'Fj2', headerName: 'Fj, MГц', width: 115, editable: true, type: "number", headerAlign: 'center'},
        {field: 'j3', headerName: 'j', width: 115, editable: true, type: "number", headerAlign: 'center'},
        {field: 'Fj3', headerName: 'Fj, MГц', width: 115, editable: true, type: "number", headerAlign: 'center'},
        {field: 'j4', headerName: 'j', width: 115, editable: true, type: "number", headerAlign: 'center'},
        {field: 'Fj4', headerName: 'Fj, MГц', width: 115, editable: true, type: "number", headerAlign: 'center'},
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

    const [rowsTbPo, setRowsTbPo] = useState<iFreqDangSignalsVchAep[]>(props.freqDangSignalsVchAepRef.current);

    useEffect(() => {
        props.freqDangSignalsVchAepRef.current = rowsTbPo;
    }, [rowsTbPo])

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
            j1: null,
            j2: null,
            j3: null,
            j4: null,
            Fj1: null,
            Fj2: null,
            Fj3: null,
            Fj4: null
        }])
    }

    const deleteRow = (id: string | number) => {
        setRowsTbPo(rowsTbPo.filter(obj => obj.id !== id))
    }

    return (
        <React.Fragment>
            <Paper elevation={4}>
                <Box p={1}>
                    <Typography variant={'h6'} pb={2}>Частоты «опасных» сигналов</Typography>
                    <Button onClick={addNewRow}>Добавить строку</Button>
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
                </Box>
            </Paper>
        </React.Fragment>
    );
};

export default FreqDangSignals;