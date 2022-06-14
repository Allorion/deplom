import React, {FC, useState} from "react";
import {Box, Paper, Typography} from "@mui/material";
import {DataGrid, GridColumns, GridRowModel} from "@mui/x-data-grid";
import GenerateId from "../../../../global-component/GenerateId";

interface iTableField {
    id: string,
    field1: string,
    field2: string,
    field3: string
}


const VchnPreparatoryData: FC = () => {

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

    const [rowsTbPo, setRowsTbPo] = useState<iTableField[]>([
        {
            id: GenerateId(),
            field1: 'Измеренный уровень несущей UН , дБ',
            field2: '',
            field3: 'Устанавливается оператором'
        },
        {
            id: GenerateId(),
            field1: 'Длина линии от ТС до границы КЗ D, м',
            field2: '',
            field3: 'Устанавливается оператором'
        },
        {
            id: GenerateId(),
            field1: 'Вид линии 1 – Тлф кабель; 2 – линия сигнализации; 3 – эл. сеть;',
            field2: '',
            field3: 'Устанавливается оператором'
        },
        {
            id: GenerateId(),
            field1: 'Нормированное отношение сигнал/шум ∆Н',
            field2: '',
            field3: 'Назначается оператором в соотв. с НМД'
        },
        {
            id: GenerateId(),
            field1: 'Нормированное значение словесной разборчивости речи WН',
            field2: '',
            field3: 'Назначается оператором в соотв. с НМД '
        },
        {
            id: GenerateId(),
            field1: 'Антенный коэффициент проводной линии hP , м',
            field2: '',
            field3: 'Приложение К'
        },
        {
            id: GenerateId(),
            field1: 'Нормированная плотность напряженности шума Eш.н. , мкВ/(м⸱кГц⸱0,5)',
            field2: '',
            field3: 'Приложение Г'
        },
        {
            id: GenerateId(),
            field1: 'Расчет коэффициента затухания в зависимости от вида линии ɑ, дБ/м',
            field2: '',
            field3: 'Приложение И'
        },
    ]);

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

export default VchnPreparatoryData;