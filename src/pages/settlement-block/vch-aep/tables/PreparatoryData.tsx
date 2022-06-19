import React, {FC, useEffect, useState} from "react";
import {Box, Paper, Typography} from "@mui/material";
import {DataGrid, GridColumns, GridRowModel} from "@mui/x-data-grid";
import GenerateId from "../../../../global-component/GenerateId";

interface iProps {
    preparatoryDataVchAepRef: {
        current: iPreparatoryDataVchAep[]
    }
}

export interface iPreparatoryDataVchAep {
    id: string,
    field1: string,
    field2: string,
    field3: string
}


const PreparatoryData: FC<iProps> = (props) => {

    // Указываем какие поля будут в строке таблицы
    const columns: GridColumns = [
        {
            field: 'field1',
            headerName: '',
            width: 600,
            editable: false,
            type: "number",
            headerAlign: 'center',
            align: 'left'
        },
        {
            field: 'field2',
            headerName: '',
            width: 150,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'field3',
            headerName: '',
            width: 300,
            editable: false,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
    ]

    const [rowsTbPo, setRowsTbPo] = useState<iPreparatoryDataVchAep[]>(props.preparatoryDataVchAepRef.current);

    useEffect(() => {
        props.preparatoryDataVchAepRef.current = rowsTbPo;
    }, [rowsTbPo])

    // Функция для обновления табличных данных
    const processRowUpdate = React.useCallback(
        async (newRow: GridRowModel) => {
            setRowsTbPo(rowsTbPo.map(n => n.id === newRow.id ? newRow : n))
            return newRow;
        },
        [rowsTbPo],
    );

    return (
        <React.Fragment>
            <Paper elevation={4}>
                <Box p={1}>
                    <Typography variant={'h6'} pb={2}>Подготовительные данные</Typography>
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

export default PreparatoryData;