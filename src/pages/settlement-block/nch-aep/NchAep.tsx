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
import GenerateId from "../../../global-component/GenerateId";


interface iProps {
    measureResNchAepRef: {
        current: iMeasureResNchAepField[]
    }
    calculatedDataNchAepRef: {
        current: iCalculatedDataNchAep[]
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

export interface iMeasureResNchAepField {
    id: string,
    numberOrder: number | null,
    nchAepFi: number | null,
    nchAepDeltaFi: number | null,
    nchAepDeltaFipr: number | null,
    nchAepLni: number | null,
    nchAepLi: number | null,
    nchAepUshi: number | null,
    nchAepUhi: number | null,
    nchAepUh0i: number | null
}

export interface iCalculatedDataNchAep {
    Fi: number,
    Uci: number,
    Ki: number,
    Ucprivi: number,
    NoUsnokti: number,
    Deltai: number
}

const NchAep: FC<iProps> = (props) => {

    const [calculatedDataNchAep, setCalculatedDataVchAep] = useState<iCalculatedDataNchAep[]>(props.calculatedDataNchAepRef.current);

    const calculateVcaep = () => {
        let copy: iCalculatedDataNchAep[] = [];
        for (let i = 0; i < measureResNchAepField.length; i++) {
            //@ts-ignore
            let Ushi: number = measureResNchAepField[i].nchAepUshi === null ? 0 : measureResNchAepField[i].nchAepUshi
            //@ts-ignore
            let Uhi: number = measureResNchAepField[i].nchAepUhi === null ? 0 : measureResNchAepField[i].nchAepUhi
            //@ts-ignore
            let Lni: number = measureResNchAepField[i].nchAepLni === null ? 0 : measureResNchAepField[i].nchAepLni
            //@ts-ignore
            let Li: number = measureResNchAepField[i].nchAepLi === null ? 0 : measureResNchAepField[i].nchAepLi
            //@ts-ignore
            let Fi: number = measureResNchAepField[i].nchAepFi === null ? 0 : measureResNchAepField[i].nchAepFi
            //@ts-ignore
            let DeltaFi: number = measureResNchAepField[i].nchAepDeltaFi === null ? 0 : measureResNchAepField[i].nchAepDeltaFi

            // Перевод из децибел в мкВ
            Ushi = +(Math.pow(10, (Ushi/20))).toFixed(3)
            Uhi = +(Math.pow(10, (Uhi/20))).toFixed(3)

            //1. Рассчитать уровень информативного сигнала
            let Uci: number = +(0.7 * Math.sqrt(Math.pow(Ushi, 2) - Math.pow(Uhi, 2))).toFixed(3)

            // 2
            let Ki: number = +(Math.pow(10, ((Li - Lni) / 20))).toFixed(1)

            // 3
            let Ucprivi: number = +(Uci / Ki).toFixed(3)


            let NoUsnokti: number

            if (Fi === 275) {
                NoUsnokti = 0.055
            } else if (Fi === 525) {
                NoUsnokti = 0.068
            } else if (Fi === 1025) {
                NoUsnokti = 0.081
            } else if (Fi === 2025) {
                NoUsnokti = 0.098
            } else if (Fi === 4025) {
                NoUsnokti = 0.117
            } else {
                NoUsnokti = 0
            }

            let Usnokti: number = +(NoUsnokti).toFixed(3)
            let Deltai: number = +(Ucprivi / Usnokti).toFixed(3)

            const obj: iCalculatedDataNchAep = {
                Fi,
                Uci,
                Ki,
                Ucprivi,
                NoUsnokti,
                Deltai
            }
            copy.push(obj)
        }
        props.calculatedDataNchAepRef.current = copy
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
            field: 'nchAepFi',
            headerName: 'Fi',
            width: 150,
            editable: false,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'nchAepDeltaFi',
            headerName: '∆Fi',
            width: 150,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'nchAepDeltaFipr',
            headerName: '∆Fiпр',
            width: 150,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'nchAepLni',
            headerName: 'Lнi',
            width: 150,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'nchAepLi',
            headerName: 'Li',
            width: 150,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'nchAepUshi',
            headerName: 'Uсшi',
            width: 150,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'nchAepUhi',
            headerName: 'Uшi',
            width: 150,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'nchAepUh0i',
            headerName: 'Uш0i',
            width: 150,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
    ]

    const [measureResNchAepField, setMeasureResNchAepField] = useState<iMeasureResNchAepField[]>(props.measureResNchAepRef.current);

    // Функция для обновления табличных данных
    const processRowUpdate = React.useCallback(
        async (newRow: GridRowModel) => {
            setMeasureResNchAepField(measureResNchAepField.map(n => n.id === newRow.id ? newRow : n))
            return newRow;
        },
        [measureResNchAepField],
    );

    useEffect(() => {
        props.measureResNchAepRef.current = measureResNchAepField
    }, [measureResNchAepField])

    return (
        <React.Fragment>
            <Typography variant={'h6'} textAlign={'center'} sx={{mb: 2}}>Расчет НЧ АЭП</Typography>
            <Stack spacing={2}>
                <Paper elevation={4}>
                    <Box p={2}>
                        <Typography variant={'h6'} pb={2}>Результаты измерений</Typography>
                        <div style={{height: 400, width: '100%'}}>
                            <DataGrid
                                rows={measureResNchAepField}
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
                                        <TableCell size="small" align="center">F<sub>i</sub>, Гц</TableCell>
                                        <TableCell size="small" align="center">U<sub>сi</sub>, мкВ</TableCell>
                                        <TableCell size="small" align="center">K<sub>i</sub></TableCell>
                                        <TableCell size="small" align="center">U<sub>с.привi</sub>, мкВ</TableCell>
                                        <TableCell size="small" align="center">Ū<sub>с.н.октi</sub></TableCell>
                                        <TableCell size="small" align="center">∆<sub>i</sub></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {calculatedDataNchAep.map((obj, index) => (
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
                                            <TableCell align="center">{obj.NoUsnokti}</TableCell>
                                            <TableCell align="center">{obj.Deltai}</TableCell>
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

export default NchAep;