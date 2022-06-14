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
import VchnPreparatoryData from "./table/VchnPreparatoryData";
import VchnFreqDangSignals from "./table/VchnFreqDangSignals";


interface iProps {
    vcaepFiedl: {
        current: iVcaep
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

export interface imeasureResVchnField {
    id: string,
    numberOrder: number | null,
    vchnI: number | null,
    vchnFi: number | null,
    vchnDeltaFi: number | null,
    vchnFniFvi: number | null,
    vchnLni: number | null,
    vchnLi: number | null,
    vchnUshi: number | null,
    vchnUhi: number | null
}

export interface iCalculatedDataVchn {
    Fi: number,
    Uci: number,
    Ki: number,
    Ucprivi: number,
    mi: number,
    Uhni: number,
    Uhokti: number
}

const Vchn: FC<iProps> = (props) => {

    const [calculatedDataVchn, setCalculatedDataVchn] = useState<iCalculatedDataVchn[]>([]);

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

            let Uci: number = 0.7 * Math.sqrt(Ushi ^ 2 - Uhi ^ 2)
            let Ki: number = 10 ^ ((Li - Lni) / 20)
            let Ucprivi: number = Uci / Ki
            let mi: number = (2 * Ucprivi) / (0.7 * Uhi)
            let Uhni: number = Uhi / Math.sqrt(Ucprivi)
            let Uhokti: number = (Ucprivi / (mi * Math.sqrt(FniFvi))) * Math.sqrt(Fi)

            const obj: iCalculatedDataVchn = {
                Fi,
                Uci,
                Ki,
                Ucprivi,
                mi,
                Uhni,
                Uhokti
            }
            copy.push(obj)
        }
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
            width: 245,
            editable: false,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'vchnFi',
            headerName: 'Fi',
            width: 245,
            editable: false,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'vchnDeltaFi',
            headerName: '∆fi ,Гц',
            width: 245,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'vchnFniFvi',
            headerName: 'fнifвi, Гц',
            width: 245,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'vchnLni',
            headerName: 'Lнi, дБ',
            width: 245,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'vchnLi',
            headerName: 'Li, дБ',
            width: 245,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'vchnUshi',
            headerName: 'Ucшi, дБ',
            width: 245,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'vchnUhi',
            headerName: 'Uшi,дБ',
            width: 245,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
    ]

    const [measureResVchnField, setMeasureResVchnField] = useState<imeasureResVchnField[]>([
        {
            id: GenerateId(),
            numberOrder: 1,
            vchnI: 275,
            vchnFi: 275,
            vchnDeltaFi: 0,
            vchnFniFvi: 0,
            vchnLni: 0,
            vchnLi: 0,
            vchnUshi: 0,
            vchnUhi: 0
        },
        {
            id: GenerateId(),
            numberOrder: 2,
            vchnI: 525,
            vchnFi: 525,
            vchnDeltaFi: 0,
            vchnFniFvi: 0,
            vchnLni: 0,
            vchnLi: 0,
            vchnUshi: 0,
            vchnUhi: 0
        },
        {
            id: GenerateId(),
            numberOrder: 3,
            vchnI: 1025,
            vchnFi: 1025,
            vchnDeltaFi: 0,
            vchnFniFvi: 0,
            vchnLni: 0,
            vchnLi: 0,
            vchnUshi: 0,
            vchnUhi: 0
        },
        {
            id: GenerateId(),
            numberOrder: 4,
            vchnI: 2025,
            vchnFi: 2025,
            vchnDeltaFi: 0,
            vchnFniFvi: 0,
            vchnLni: 0,
            vchnLi: 0,
            vchnUshi: 0,
            vchnUhi: 0
        },
        {
            id: GenerateId(),
            numberOrder: 5,
            vchnI: 4025,
            vchnFi: 4025,
            vchnDeltaFi: 0,
            vchnFniFvi: 0,
            vchnLni: 0,
            vchnLi: 0,
            vchnUshi: 0,
            vchnUhi: 0
        },
    ]);

    // Функция для обновления табличных данных
    const processRowUpdate = React.useCallback(
        async (newRow: GridRowModel) => {
            setMeasureResVchnField(measureResVchnField.map(n => n.id === newRow.id ? newRow : n))
            return newRow;
        },
        [measureResVchnField],
    );

    return (
        <React.Fragment>
            <Typography variant={'h6'} textAlign={'center'} sx={{mb: 2}}>Расчет ВЧН</Typography>
            <Stack spacing={2}>
                <VchnFreqDangSignals/>
                <VchnPreparatoryData/>
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
                                        <TableCell size="small" align="center">U<sub>шнi</sub>, мкВ</TableCell>
                                        <TableCell size="small" align="center">U<sub>ш.октi</sub>, мкВ</TableCell>
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
                                            <TableCell align="center">{obj.Uhni}</TableCell>
                                            <TableCell align="center">{obj.Uhokti}</TableCell>
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

export default Vchn;