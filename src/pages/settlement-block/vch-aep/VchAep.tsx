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
import FreqDangSignals, {iFreqDangSignalsVchAep} from "./tables/FreqDangSignals";
import PreparatoryData, {iPreparatoryDataVchAep} from "./tables/PreparatoryData";
import {DataGrid, GridColumns, GridRowModel} from "@mui/x-data-grid";


interface iProps {
    measureResVchAepRef: {
        current: iMeasureResVchAepField[]
    }
    calculatedDataVchAepRef: {
        current: iCalculatedDataVchAep[]
    }
    preparatoryDataVchAepRef: {
        current: iPreparatoryDataVchAep[]
    }
    freqDangSignalsVchAepRef: {
        current: iFreqDangSignalsVchAep[]
    }
}

export interface iMeasureResVchAepField {
    id: string,
    numberOrder: number | null,
    vchAepFi: number | null,
    vchAepUshij: number | null,
    vchAepUhij: number | null,
    vchAepLi: number | null
}

export interface iCalculatedDataVchAep {
    Ucij: number,
    Ki: number,
    Ucprivij: number,
    Ecij: number,
    Deltaij: number
}

const VchAep: FC<iProps> = (props) => {

    const [calculatedDataVchAep, setCalculatedDataVchAep] = useState<iCalculatedDataVchAep[]>(props.calculatedDataVchAepRef.current);

    const calculateVcaep = () => {
        let copy: iCalculatedDataVchAep[] = [];
        for (let i = 0; i < measureResVchAepField.length; i++) {
            //@ts-ignore
            let Ushij: number = measureResVchAepField[i].vchAepUshij === null ? 0 : measureResVchAepField[i].vchAepUshij
            //@ts-ignore
            let Fi: number = measureResVchAepField[i].vchAepFi === null ? 0 : measureResVchAepField[i].vchAepFi
            //@ts-ignore
            let Uhij: number = measureResVchAepField[i].vchAepUhij === null ? 0 : measureResVchAepField[i].vchAepUhij
            //@ts-ignore
            let Li: number = measureResVchAepField[i].vchAepLi === null ? 0 : measureResVchAepField[i].vchAepLi

            // Перевод из децибел в мкВ
            Ushij = +(Math.pow(10, (Ushij/20))).toFixed(3)
            Uhij = +(Math.pow(10, (Uhij/20))).toFixed(3)

            // 1. Рассчитать уровень информативного сигнала
            let Ucij: number = +(0.7 * Math.sqrt(Math.pow(Ushij, 2) - Math.pow(Uhij, 2))).toFixed(3)

            // 2. Рассчитать степень превышения создаваемого акустического давления над нормированным звуковым
            // давлением в i-ой октаве (коэффициент увеличения звукового давления)
            let Lni: number;
            if (Fi === 275 || Fi === 525) {
                Lni = 66
            } else if (Fi === 1025) {
                Lni = 61
            } else if (Fi === 2025) {
                Lni = 56
            } else if (Fi === 4025) {
                Lni = 53
            } else {
                Lni = 0
            }
            let Ki: number = +(Math.pow(10, ((Li - Lni) / 20))).toFixed(1)

            // 3. Рассчитать октавный уровень информативного сигнала, приведенного к нормированному уровню
            // акустического воздействия
            let Ucprivij: number = +(Ucij / Ki).toFixed(3)

            // 4. Рассчитать напряженность поля информативного сигнала на j-й частоте встроенного генератора (Fj) в
            // i-й октаве на границе контролируемой зоны
            let Kz: number = 23
            let Kant: number = 10
            let Ecij: number = +((Ucprivij / Kz) * Kant).toFixed(3)

            // 5. Рассчитать уровень напряженности нормированного шума в пяти октавах Ешпij для стационарных, возимых и
            // носимых технических средств разведки
            let Ehoktnij: number;
            if (Fi === 275) {
                Ehoktnij = 0.007
            } else if (Fi === 525) {
                Ehoktnij = 0.010
            } else if (Fi === 1025) {
                Ehoktnij = 0.013
            } else if (Fi === 2025) {
                Ehoktnij = 0.019
            } else if (Fi === 4025) {
                Ehoktnij = 0.027
            } else {
                Ehoktnij = 0
            }

            // 6. Рассчитать отношение "информативный сигнал/шум" в i-й октаве на j-й частоте автогенератора ТС на
            // границе КЗ
            let Deltaij: number = +(Ecij / Ehoktnij).toFixed(3)

            const obj: iCalculatedDataVchAep = {
                Ucij,
                Ki,
                Ucprivij,
                Ecij,
                Deltaij
            }
            copy.push(obj)
        }
        props.calculatedDataVchAepRef.current = copy;
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
            field: 'vchAepFi',
            headerName: 'Fi',
            width: 245,
            editable: false,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'vchAepUshij',
            headerName: 'Uсшij, дБ',
            width: 245,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'vchAepUhij',
            headerName: 'Uшij, дБ',
            width: 245,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'vchAepLi',
            headerName: 'Li',
            width: 245,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
    ]

    const [measureResVchAepField, setMeasureResVchAepField] = useState<iMeasureResVchAepField[]>(props.measureResVchAepRef.current);

    // Функция для обновления табличных данных
    const processRowUpdate = React.useCallback(
        async (newRow: GridRowModel) => {
            setMeasureResVchAepField(measureResVchAepField.map(n => n.id === newRow.id ? newRow : n))
            return newRow;
        },
        [measureResVchAepField],
    );

    useEffect(() => {
        props.measureResVchAepRef.current = measureResVchAepField;
    }, [measureResVchAepField])

    return (
        <React.Fragment>
            <Typography variant={'h6'} textAlign={'center'} sx={{mb: 2}}>Расчет ВЧ
                АЭП</Typography>
            <Stack spacing={2}>
                <FreqDangSignals
                    freqDangSignalsVchAepRef={props.freqDangSignalsVchAepRef}
                />
                <PreparatoryData
                    preparatoryDataVchAepRef={props.preparatoryDataVchAepRef}
                />
                <Paper elevation={4}>
                    <Box p={2}>
                        <Typography variant={'h6'} pb={2}>Результаты измерений</Typography>
                        <div style={{height: 400, width: '100%'}}>
                            <DataGrid
                                rows={measureResVchAepField}
                                columns={columns}
                                showCellRightBorder={true}
                                showColumnRightBorder={true}
                                processRowUpdate={processRowUpdate}
                                experimentalFeatures={{newEditingApi: true}}
                            />
                        </div>
                        <Button sx={{mt: 2}} onClick={() => {
                            setCalculatedDataVchAep(calculateVcaep())
                        }}
                                variant={'outlined'}>Рассчитать</Button>
                        <TableContainer component={Paper} sx={{mt: 2}} elevation={4}>
                            <Table sx={{minWidth: 650}} aria-label="simple table">
                                <TableHead>
                                    <TableRow
                                        sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1}}}
                                    >
                                        <TableCell size="small" align="center">№</TableCell>
                                        <TableCell size="small" align="center">U<sub>cij</sub>, мкВ</TableCell>
                                        <TableCell size="small" align="center">K<sub>i</sub></TableCell>
                                        <TableCell size="small" align="center">U<sub>с.привij</sub>, мкВ</TableCell>
                                        <TableCell size="small" align="center">E<sub>cij</sub>, мкВ/м</TableCell>
                                        <TableCell size="small" align="center">∆<sub>ij</sub></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {calculatedDataVchAep.map((obj, index) => (
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
                                            <TableCell align="center">{obj.Ucij}</TableCell>
                                            <TableCell align="center">{obj.Ki}</TableCell>
                                            <TableCell align="center">{obj.Ucprivij}</TableCell>
                                            <TableCell align="center">{obj.Ecij}</TableCell>
                                            <TableCell align="center">{obj.Deltaij}</TableCell>
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

export default VchAep;