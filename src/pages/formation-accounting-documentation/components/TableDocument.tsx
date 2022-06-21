import React, {FC, useState} from "react";
import {DataGrid, GridColumns, GridRowModel} from "@mui/x-data-grid";
import GenerateId from "../../../global-component/GenerateId";


interface ITable {
    id: string,
    field1: string,
    field2: string
}

const TableDocument: FC = () => {

    // Указываем какие поля будут в строке таблицы
    const columns: GridColumns = [
        {
            field: 'field1',
            headerName: '',
            width: 200,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'field2',
            headerName: 'Наименование документа (Примечание: для представленных документов указать учетные или регистрационные номера)',
            width: 540,
            editable: false,
            type: "number",
            headerAlign: 'center',
            align: 'left'
        },
    ]

    const [rowsTbPo, setRowsTbPo] = useState<ITable[]>([
        {
            id: GenerateId(),
            field1: '',
            field2: 'Акт категорирования объекта информатизации по степени секретности обрабатываемой информации'
        },
        {
            id: GenerateId(),
            field1: '',
            field2: 'Технический паспорт на объект информатизации'
        },
        {
            id: GenerateId(),
            field1: '',
            field2: 'Схемы и характеристики систем электропитания и заземления объекта информатизации '
        },
        {
            id: GenerateId(),
            field1: '',
            field2: 'План контролируемой зоны предприятия (организации)'
        },
        {
            id: GenerateId(),
            field1: '',
            field2: 'План размещения основных и вспомогательных технических средств и схема размещения средств защиты информации'
        },
        {
            id: GenerateId(),
            field1: '',
            field2: 'Описание технологического процесса обработки информации на объекте'
        },
        {
            id: GenerateId(),
            field1: '',
            field2: 'Инструкции по эксплуатации средств защиты информации'
        },
        {
            id: GenerateId(),
            field1: '',
            field2: 'Предписание на эксплуатацию средств ЭВТ'
        },
        {
            id: GenerateId(),
            field1: '',
            field2: 'Протокол СИ средств ЭВТ'
        },
        {
            id: GenerateId(),
            field1: '',
            field2: 'Заключение о специальной проверке средств ЭВТ импортного производства'
        },
        {
            id: GenerateId(),
            field1: '',
            field2: 'Положение о пропускном и внутри объектовом режиме'
        },
        {
            id: GenerateId(),
            field1: '',
            field2: 'Ведомственный перечень сведений, подлежащих засекречиванию'
        },
        {
            id: GenerateId(),
            field1: '',
            field2: 'Лицензия Управления ФСБ на право проведения работ, связанных с использованием сведений, составляющих государственную тайну'
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
            <div style={{height: 787, width: '97%'}}>
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

export default TableDocument;