import React, {FC, useState} from "react";
import {
    Box,
    Button,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {DataGrid, GridColumns, GridRowModel} from "@mui/x-data-grid";
import GenerateId from "../../../global-component/GenerateId";


interface iProps {

}

export interface iMeasureResAvakField {
    id: string,
    Fi: number | null,
    Lchi: number | null,
    Ltci: number | null,
    Lhi: number | null,
    Q: number | null,
    Lni: number | null,
    DeltaLtci: number | null,
    Eni: number | null,
    Eih: number | null,
    DeltaEih: number | null
}

export interface iCalculatedDataAvak {
    Fi: number,
    Ltci: number,
    Lchi: number,
    Lhi: number,
    Lci: number,
    Q: number,
    Lni: number,
    DeltaLtci: number,
    Lcprivi: number,
    Ei: number,
    Eni: number,
    Eih: number,
    DeltaEih: number
}

const Avak: FC<iProps> = (props) => {

    const [calculatedDataAvak, setCalculatedDataAvak] = useState<iCalculatedDataAvak[]>([]);

    const calculateAvak = () => {
        let copy: iCalculatedDataAvak[] = [];
        for (let i = 0; i < measureResAvakField.length; i++) {

            //@ts-ignore
            let Lchi: number = measureResAvakField[i].Lchi === null ? 0 : measureResAvakField[i].Lchi
            //@ts-ignore
            let Lhi: number = measureResAvakField[i].Lhi === null ? 0 : measureResAvakField[i].Lhi
            //@ts-ignore
            let Ltci: number = measureResAvakField[i].Ltci === null ? 0 : measureResAvakField[i].Ltci
            //@ts-ignore
            let Lni: number = measureResAvakField[i].Lni === null ? 0 : measureResAvakField[i].Lni
            //@ts-ignore
            let Fi: number = measureResAvakField[i].Fi === null ? 0 : measureResAvakField[i].Fi
            //@ts-ignore
            let Q: number = measureResAvakField[i].Q === null ? 0 : measureResAvakField[i].Q
            //@ts-ignore
            let DeltaLtci: number = measureResAvakField[i].DeltaLtci === null ? 0 : measureResAvakField[i].DeltaLtci
            //@ts-ignore
            let Eni: number = measureResAvakField[i].Eni === null ? 0 : measureResAvakField[i].Eni
            //@ts-ignore
            let Eih: number = measureResAvakField[i].Eih === null ? 0 : measureResAvakField[i].Eih
            //@ts-ignore
            let DeltaEih: number = measureResAvakField[i].DeltaEih === null ? 0 : measureResAvakField[i].DeltaEih

            let Lci = 10 * Math.log((10 ^ (Lchi / 10)) - (10 ^ (Lhi / 10)))
            let DeltaLi: number = Ltci - Lni
            let Lcprivi: number = Lci - DeltaLi
            let Ei: number = Lcprivi - Lhi

            const obj: iCalculatedDataAvak = {
                Fi,
                Ltci,
                Lchi,
                Lhi,
                Lci,
                Q,
                Lni,
                DeltaLtci,
                Lcprivi,
                Ei,
                Eni,
                Eih,
                DeltaEih
            }
            copy.push(obj)
        }
        return copy;
    }


    // Указываем какие поля будут в строке таблицы
    const columns: GridColumns = [
        {
            field: 'Fi',
            headerName: 'Fi',
            width: 150,
            editable: false,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'Ltci',
            headerName: 'LТСi, дБ',
            width: 150,
            editable: false,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'Lchi',
            headerName: 'LС+Шi,дБ',
            width: 150,
            editable: false,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'Lhi',
            headerName: 'LШi,дБ',
            width: 150,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'Q',
            headerName: 'Q, дБ',
            width: 150,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'Lni',
            headerName: 'LНi, дБ',
            width: 150,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'DeltaLtci',
            headerName: '∆Lтсi, дБ',
            width: 150,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'Eni',
            headerName: 'Еni, дБ',
            width: 150,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'Eih',
            headerName: 'Еiш, дБ',
            width: 150,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'DeltaEih',
            headerName: '∆Еiш, дБ',
            width: 150,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
    ]

    const [measureResAvakField, setMeasureResAvakField] = useState<iMeasureResAvakField[]>([
        {
            id: GenerateId(),
            Fi: 250,
            Ltci: 0,
            Lchi: 0,
            Lhi: 0,
            Q: 0,
            Lni: 66,
            DeltaLtci: 0,
            Eni: -2,
            Eih: 0,
            DeltaEih: 0
        },
        {
            id: GenerateId(),
            Fi: 500,
            Ltci: 0,
            Lchi: 0,
            Lhi: 0,
            Q: 0,
            Lni: 66,
            DeltaLtci: 0,
            Eni: -6,
            Eih: 0,
            DeltaEih: 0
        },
        {
            id: GenerateId(),
            Fi: 1000,
            Ltci: 0,
            Lchi: 0,
            Lhi: 0,
            Q: 0,
            Lni: 61,
            DeltaLtci: 0,
            Eni: -10,
            Eih: 0,
            DeltaEih: 0
        },
        {
            id: GenerateId(),
            Fi: 2000,
            Ltci: 0,
            Lchi: 0,
            Lhi: 0,
            Q: 0,
            Lni: 56,
            DeltaLtci: 0,
            Eni: -13,
            Eih: 0,
            DeltaEih: 0
        },
        {
            id: GenerateId(),
            Fi: 4000,
            Ltci: 0,
            Lchi: 0,
            Lhi: 0,
            Q: 0,
            Lni: 53,
            DeltaLtci: 0,
            Eni: -16,
            Eih: 0,
            DeltaEih: 0
        },
    ]);

    // Функция для обновления табличных данных
    const processRowUpdate = React.useCallback(
        async (newRow: GridRowModel) => {
            setMeasureResAvakField(measureResAvakField.map(n => n.id === newRow.id ? newRow : n))
            return newRow;
        },
        [measureResAvakField],
    );

    return (
        <React.Fragment>
            <Typography variant={'h6'} textAlign={'center'} sx={{mb: 2}}>Расчет НЧ АЭП</Typography>
            <Stack spacing={2}>
                <Paper elevation={4}>
                    <Box p={2}>
                        <Typography variant={'h6'} pb={2}>Результаты измерений</Typography>
                        <div style={{height: 400, width: '100%'}}>
                            <DataGrid
                                rows={measureResAvakField}
                                columns={columns}
                                showCellRightBorder={true}
                                showColumnRightBorder={true}
                                processRowUpdate={processRowUpdate}
                                experimentalFeatures={{newEditingApi: true}}
                            />
                        </div>
                        <Button sx={{mt: 2}} onClick={() => {
                            setCalculatedDataAvak(calculateAvak())
                        }}
                                variant={'outlined'}>Рассчитать</Button>
                        <TableContainer component={Paper} sx={{mt: 2}} elevation={4}>
                            <Table sx={{minWidth: 650}} aria-label="simple table">
                                <TableHead>
                                    <TableRow
                                        sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1}}}
                                    >
                                        <TableCell size="small" align="center">№</TableCell>
                                        <TableCell size="small" align="center">F<sub>i</sub>, Гц</TableCell>
                                        <TableCell size="small" align="center">L<sub>ТСi</sub>, дБ</TableCell>
                                        <TableCell size="small" align="center">L<sub>С+Шi</sub>, дБ</TableCell>
                                        <TableCell size="small" align="center">L<sub>Шi</sub>, дБ</TableCell>
                                        <TableCell size="small" align="center">L<sub>Сi</sub>, дБ</TableCell>
                                        <TableCell size="small" align="center">Q, дБ</TableCell>
                                        <TableCell size="small" align="center">L<sub>Нi</sub>, дБ</TableCell>
                                        <TableCell size="small" align="center">∆L<sub>тсi</sub>, дБ</TableCell>
                                        <TableCell size="small" align="center">LС<sub>прив.i</sub>, дБ</TableCell>
                                        <TableCell size="small" align="center">Е<sub>i</sub>, дБ</TableCell>
                                        <TableCell size="small" align="center">Е<sub>n<sub>i</sub></sub>, дБ</TableCell>
                                        <TableCell size="small" align="center">Е<sub>iш</sub>, дБ</TableCell>
                                        <TableCell size="small" align="center">∆Е<sub>iш</sub>, дБ</TableCell>
                                    </TableRow>
                                </TableHead>
                                    <TableHead>
                                    <TableRow
                                        sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1}}}
                                    >
                                        <TableCell size="small" align="center"></TableCell>
                                        <TableCell size="small" align="center">Среднеквадратичные частоты октав</TableCell>
                                        <TableCell size="small" align="center">Звуковое давление колонки (более 90 дБ)</TableCell>
                                        <TableCell size="small" align="center">Звуковое давление сигнал+шум</TableCell>
                                        <TableCell size="small" align="center">Звуковое давление шума</TableCell>
                                        <TableCell size="small" align="center">Звуковое давление сигнала</TableCell>
                                        <TableCell size="small" align="center">Звуковое давление ОК</TableCell>
                                        <TableCell size="small" align="center">Звуковое давление модели русской речи</TableCell>
                                        <TableCell size="small" align="center">Приведенное ЗД ТС на модель РР </TableCell>
                                        <TableCell size="small" align="center">Приведенное ЗД сигнала на модель РР</TableCell>
                                        <TableCell size="small" align="center">Превышение Зв. Давл над уровнем шума</TableCell>
                                        <TableCell size="small" align="center">Нормированное значение Е<sub>i</sub>для W=0,4</TableCell>
                                        <TableCell size="small" align="center">Значение уровня шума средств защиты</TableCell>
                                        <TableCell size="small" align="center">Поправка значений уровня шума средств защиты</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {calculatedDataAvak.map((obj, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{
                                                '&:nth-of-type(even) td, &:nth-of-type(odd) td, &:nth-of-type(even) th, &:nth-of-type(odd) th': {
                                                    border: 1,
                                                    rowSpan: 1,
                                                    align: 'center',
                                                    size: "small"
                                                }
                                            }}>
                                            <TableCell align="center">{index + 1}</TableCell>
                                            <TableCell align="center">{obj.Fi}</TableCell>
                                            <TableCell align="center">{obj.Ltci}</TableCell>
                                            <TableCell align="center">{obj.Lchi}</TableCell>
                                            <TableCell align="center">{obj.Lhi}</TableCell>
                                            <TableCell align="center">{obj.Lci}</TableCell>
                                            <TableCell align="center">{obj.Q}</TableCell>
                                            <TableCell align="center">{obj.Lni}</TableCell>
                                            <TableCell align="center">{obj.DeltaLtci}</TableCell>
                                            <TableCell align="center">{obj.Lcprivi}</TableCell>
                                            <TableCell align="center">{obj.Ei}</TableCell>
                                            <TableCell align="center">{obj.Eni}</TableCell>
                                            <TableCell align="center">{obj.Eih}</TableCell>
                                            <TableCell align="center">{obj.DeltaEih}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Paper>
            </Stack>
        </React.Fragment>
    );
};

export default Avak;