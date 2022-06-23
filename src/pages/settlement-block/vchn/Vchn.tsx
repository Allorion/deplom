import React, {FC, useEffect, useState} from "react";
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
import VchnPreparatoryData, {iPreparatoryDataVchn} from "./table/VchnPreparatoryData";
import VchnFreqDangSignals, {iFreqDangSignalsVchn} from "./table/VchnFreqDangSignals";


interface iProps {
    measureResVchnRef: {
        current: iMeasureResVchnField[]
    }
    calculatedDataVchnRef: {
        current: iCalculatedDataVchn[]
    }
    preparatoryDataVchnRef: {
        current: iPreparatoryDataVchn[]
    }
    freqDangSignalsVchnRef: {
        current: iFreqDangSignalsVchn[]
    }
}

export interface iVcaep {
    ush: number,
    uh: number,
    ucij: number,
    kimkv: number,
    ucprivij: number,
    ecij: number,
    deltaij: number
}

export interface iMeasureResVchnField {
    id: string,
    numberOrder: number | null,
    vchnI: number | null,
    vchnFi: number | null,
    vchnDeltaFi: number | null,
    vchnFniFvi: number | null,
    vchnLni: number | null,
    vchnLi: number | null,
    vchnUshi: number | null,
    vchnUhi: number | null,
    vchnUni: number | null,
    vchnD: number | null,
}

export interface iCalculatedDataVchn {
    Fi: number,
    Uci: number,
    Ki: number,
    Ucprivi: number,
    mi: number,
    Uskzij: number,
    Deltaij: number
}

const Vchn: FC<iProps> = (props) => {

    const [calculatedDataVchn, setCalculatedDataVchn] = useState<iCalculatedDataVchn[]>(props.calculatedDataVchnRef.current);

    const calculateVcaep = () => {
        let copy: iCalculatedDataVchn[] = [];
        for (let i = 0; i < measureResVchnField.length; i++) {
            //@ts-ignore
            let Ushi: number = measureResVchnField[i].vchnUshi === null ? 0 : measureResVchnField[i].vchnUshi
            //@ts-ignore
            let Uhi: number = measureResVchnField[i].vchnUhi === null ? 0 : measureResVchnField[i].vchnUhi
            //@ts-ignore
            let Lni: number = measureResVchnField[i].vchnLni === null ? 0 : measureResVchnField[i].vchnLni
            //@ts-ignore
            let Li: number = measureResVchnField[i].vchnLi === null ? 0 : measureResVchnField[i].vchnLi
            //@ts-ignore
            let FniFvi: number = measureResVchnField[i].vchnFniFvi === null ? 0 : measureResVchnField[i].vchnFniFvi
            //@ts-ignore
            let Fi: number = measureResVchnField[i].vchnFi === null ? 0 : measureResVchnField[i].vchnFi
            //@ts-ignore
            let DeltaFi: number = measureResVchnField[i].vchnDeltaFi === null ? 0 : measureResVchnField[i].vchnDeltaFi
            //@ts-ignore
            let Uni: number = measureResVchnField[i].vchnUni === null ? 0 : measureResVchnField[i].vchnUni
            //@ts-ignore
            let D: number = measureResVchnField[i].vchnD === null ? 0 : measureResVchnField[i].vchnD

            // Перевод из децибел в мкВ
            Ushi = +(Math.pow(10, (Ushi/20))).toFixed(3)
            Uhi = +(Math.pow(10, (Uhi/20))).toFixed(3)

            // 1. Рассчитать уровень информативного сигнала
            let Uci: number = +(0.7 * Math.sqrt(Math.pow(Ushi, 2) - Math.pow(Uhi, 2))).toFixed(3)

            // 2.	Рассчитать степень превышения создаваемого акустического давления над нормированным звуковым
            // давлением в i-ой октаве (коэффициент увеличения звукового давления)
            let Ki: number = +(Math.pow(10, ((Li - Lni) / 20))).toFixed(1)

            // 3. Рассчитать октавный уровень информативного сигнала, приведенного к нормированному уровню акустического
            // воздействия:
            let Ucprivi: number = +(Uci / Ki).toFixed(3)

            // 4. Рассчитать коэффициент модуляции отраженного сигнала информативным сигналом
            let mi = +((2 * Ucprivi)/(0.7 * Uni)).toFixed(7)

            // 5. Рассчитать напряжение нормированного шума в каждой октаве:
            let Ehnj: number;
            if (Fi === 275) {
                Ehnj = 0.007
            } else if (Fi === 525) {
                Ehnj = 0.010
            } else if (Fi === 1025) {
                Ehnj = 0.013
            } else if (Fi === 2025) {
                Ehnj = 0.019
            } else if (Fi === 4025) {
                Ehnj = 0.027
            } else {
                Ehnj = 0
            }
            let hdj: number = 2.1
            let Ushnotkij: number = +(Ehnj * hdj * Math.sqrt(DeltaFi)).toFixed(3)

            // 6. Рассчитать октавный уровень информативного сигнала на границе КЗ:
            let Kotr: number = 0.1
            let UnazN: number = Math.pow(10, 6)
            let a: number = 0.05
            let Uskzij: number = +(0.5 * mi * Kotr * UnazN * Math.pow(10, (-0.1 * a - D))).toFixed(12)

            // 7
            let Deltaij = +(Uskzij/Ushnotkij).toFixed(12)


            const obj: iCalculatedDataVchn = {
                Fi,
                Uci,
                Ki,
                Ucprivi,
                mi,
                Uskzij,
                Deltaij
            }
            copy.push(obj)
        }
        props.calculatedDataVchnRef.current = copy
        return copy;
    }


    // Указываем какие поля будут в строке таблицы
    const columns: GridColumns = [
        {
            field: 'numberOrder',
            headerName: '№',
            width: 56,
            editable: false,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'vchnI',
            headerName: 'i',
            width: 100,
            editable: false,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'vchnFi',
            headerName: 'Fi',
            width: 100,
            editable: false,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'vchnDeltaFi',
            headerName: '∆fi ,Гц',
            width: 100,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'vchnFniFvi',
            headerName: 'fнifвi, Гц',
            width: 100,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'vchnLni',
            headerName: 'Lнi, дБ',
            width: 100,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'vchnLi',
            headerName: 'Li, дБ',
            width: 100,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'vchnUshi',
            headerName: 'Ucшi, дБ',
            width: 100,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'vchnUhi',
            headerName: 'Uшi,дБ',
            width: 100,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'vchnUni',
            headerName: 'Uнi',
            width: 100,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'vchnD',
            headerName: 'D',
            width: 100,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
    ]

    const [measureResVchnField, setMeasureResVchnField] = useState<iMeasureResVchnField[]>(props.measureResVchnRef.current);

    // Функция для обновления табличных данных
    const processRowUpdate = React.useCallback(
        async (newRow: GridRowModel) => {
            setMeasureResVchnField(measureResVchnField.map(n => n.id === newRow.id ? newRow : n))
            return newRow;
        },
        [measureResVchnField],
    );

    useEffect(() => {
        props.measureResVchnRef.current = measureResVchnField
    }, [measureResVchnField])

    return (
        <React.Fragment>
            <Typography variant={'h6'} textAlign={'center'} sx={{mb: 2}}>Расчет ВЧН</Typography>
            <Stack spacing={2}>
                <VchnFreqDangSignals
                    freqDangSignalsVchnRef={props.freqDangSignalsVchnRef}
                />
                <VchnPreparatoryData
                    preparatoryDataVchnRef={props.preparatoryDataVchnRef}
                />
                <Paper elevation={4}>
                    <Box p={2}>
                        <Typography variant={'h6'} pb={2}>Результаты измерений</Typography>
                        <div style={{height: 400, width: '100%'}}>
                            <DataGrid
                                rows={measureResVchnField}
                                columns={columns}
                                showCellRightBorder={true}
                                showColumnRightBorder={true}
                                processRowUpdate={processRowUpdate}
                                experimentalFeatures={{newEditingApi: true}}
                            />
                        </div>
                        <Button sx={{mt: 2}} onClick={() => {
                            setCalculatedDataVchn(calculateVcaep())
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
                                        <TableCell size="small" align="center">U<sub>ci</sub>, мкВ</TableCell>
                                        <TableCell size="small" align="center">K<sub>i</sub></TableCell>
                                        <TableCell size="small" align="center">U<sub>c.привi</sub>, мкВ</TableCell>
                                        <TableCell size="small" align="center">m<sub>шнi</sub>, мкВ</TableCell>
                                        <TableCell size="small" align="center">U<sub>с.кзij</sub></TableCell>
                                        <TableCell size="small" align="center">∆<sub>ij</sub></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {calculatedDataVchn.map((obj, index) => (
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
                                            <TableCell align="center">{index}</TableCell>
                                            <TableCell align="center">{obj.Fi}</TableCell>
                                            <TableCell align="center">{obj.Uci}</TableCell>
                                            <TableCell align="center">{obj.Ki}</TableCell>
                                            <TableCell align="center">{obj.Ucprivi}</TableCell>
                                            <TableCell align="center">{obj.mi}</TableCell>
                                            <TableCell align="center">{obj.Uskzij}</TableCell>
                                            <TableCell align="center">{obj.Deltaij}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TableContainer
                            component={Paper}
                            sx={{mt: 2, display: props.calculatedDataVchnRef.current[0]?.Deltaij === undefined ? 'none' : 'block'}}
                            elevation={4}
                        >
                            <Table sx={{minWidth: 650}} aria-label="simple table">
                                <TableBody>
                                    <TableRow
                                        sx={{
                                            '&:nth-of-type(even) td, &:nth-of-type(odd) td, &:nth-of-type(even) th, &:nth-of-type(odd) th': {
                                                border: 1,
                                                rowSpan: 1,
                                                align: 'center',
                                                size: "small"
                                            }
                                        }}>
                                        <TableCell align="center">Словесная разборчивость речи W для стац. TCP</TableCell>
                                        <TableCell align="center">0.27</TableCell>
                                        <TableCell align="center">Норма выполняется?</TableCell>
                                        <TableCell align="center">Да</TableCell>
                                    </TableRow>
                                    <TableRow
                                        sx={{
                                            '&:nth-of-type(even) td, &:nth-of-type(odd) td, &:nth-of-type(even) th, &:nth-of-type(odd) th': {
                                                border: 1,
                                                rowSpan: 1,
                                                align: 'center',
                                                size: "small"
                                            }
                                        }}>
                                        <TableCell align="center">Словесная разборчивость речи W для воз. TCP</TableCell>
                                        <TableCell align="center">0.27</TableCell>
                                        <TableCell align="center">Норма выполняется?</TableCell>
                                        <TableCell align="center">Да</TableCell>
                                    </TableRow>
                                    <TableRow
                                        sx={{
                                            '&:nth-of-type(even) td, &:nth-of-type(odd) td, &:nth-of-type(even) th, &:nth-of-type(odd) th': {
                                                border: 1,
                                                rowSpan: 1,
                                                align: 'center',
                                                size: "small"
                                            }
                                        }}>
                                        <TableCell align="center">Словесная разборчивость речи W для нос. TCP</TableCell>
                                        <TableCell align="center">0.12</TableCell>
                                        <TableCell align="center">Норма выполняется?</TableCell>
                                        <TableCell align="center">Да</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Paper>
            </Stack>
        </React.Fragment>
    );
};

export default Vchn;