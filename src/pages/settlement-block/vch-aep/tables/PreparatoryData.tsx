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


const PreparatoryData: FC = () => {

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
            field1: 'Частота обнаруженного сигнала автогенератора Fj, МГц',
            field2: '',
            field3: 'Таблица 1'
        },
        {
            id: GenerateId(),
            field1: 'Калибровочный коэффициент антенны, Kа, 1/м',
            field2: '',
            field3: 'Приложение Ж'
        },
        {
            id: GenerateId(),
            field1: 'Нормированное отношение сигнал/шум',
            field2: '',
            field3: 'Назначается оператором в соотв. с НМД'
        },
        {
            id: GenerateId(),
            field1: 'Нормированное значение словесной разборчивости речи Wн',
            field2: '',
            field3: 'Назначается оператором в соотв. с НМД'
        },
        {
            id: GenerateId(),
            field1: 'Полоса пропускания фильтра RBW, кГц',
            field2: '',
            field3: 'Устанавливается оператором'
        },
        {
            id: GenerateId(),
            field1: 'Удаление изм. антенны от корпуса ТС R, м',
            field2: '',
            field3: 'В соответствии с местом положения ТС в ЗП'
        },
        {
            id: GenerateId(),
            field1: 'Спектральная плотность нормированного шума для стационарных TCР, мкВ/(мкГц 0,5)',
            field2: '',
            field3: 'Приложение Г'
        },
        {
            id: GenerateId(),
            field1: 'Спектральная плотность нормированного шума для возимых TCP, мкВ/(мкГц0,5)',
            field2: '',
            field3: 'Приложение Г'
        },
        {
            id: GenerateId(),
            field1: 'Спектральная плотность нормированного шума для носимых TCP, мкВ/(мкГц0,5)',
            field2: '',
            field3: 'Приложение Г'
        },
        {
            id: GenerateId(),
            field1: 'Частота обнаруженного сигнала автогенератора Fj, МГц',
            field2: '',
            field3: 'Таблица 1'
        },
        {
            id: GenerateId(),
            field1: 'Коэффициент затухания электромагнитного поля, Kз',
            field2: '',
            field3: 'Приложение Д'
        }
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

export default PreparatoryData;