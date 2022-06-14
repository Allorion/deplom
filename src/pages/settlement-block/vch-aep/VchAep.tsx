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
import FreqDangSignals from "./tables/FreqDangSignals";
import PreparatoryData from "./tables/PreparatoryData";
import {DataGrid, GridColumns, GridRowModel} from "@mui/x-data-grid";
import GenerateId from "../../../global-component/GenerateId";


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

    const [calculatedDataVchAep, setCalculatedDataVchAep] = useState<iCalculatedDataVchAep[]>([]);

    const calculateVcaep = () => {
        let copy: iCalculatedDataVchAep[] = [];
        for (let i = 0; i < measureResVchAepField.length; i++) {
            //@ts-ignore
            let Ushij: number = measureResVchAepField[i].vchAepUshij === null ? 0 : measureResVchAepField[i].vchAepUshij
            //@ts-ignore
            let Uhij: number = measureResVchAepField[i].vchAepUhij === null ? 0 : measureResVchAepField[i].vchAepUhij
            //@ts-ignore
            let Li: number = measureResVchAepField[i].vchAepLi === null ? 0 : measureResVchAepField[i].vchAepLi

            let Ucij: number = 0.7 * Math.sqrt(Ushij - Uhij)
            let Ki: number = 10 ^ ((Li - 30) / 20)
            let Ucprivij: number = Ucij / Ki
            let Kz: number = 23
            let Ecij: number = Ucprivij / Kz
            let Ehoktnij: number = 0.007
            let Deltaij: number = Ecij / Ehoktnij

            const obj: iCalculatedDataVchAep = {
                Ucij,
                Ki,
                Ucprivij,
                Ecij,
                Deltaij
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
            headerName: 'Uсшij',
            width: 245,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'vchAepUhij',
            headerName: 'Uсшij',
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

    const [measureResVchAepField, setMeasureResVchAepField] = useState<iMeasureResVchAepField[]>([
        {
            id: GenerateId(),
            numberOrder: 1,
            vchAepFi: 275,
            vchAepUshij: 0,
            vchAepUhij: 0,
            vchAepLi: 0
        },
        {
            id: GenerateId(),
            numberOrder: 2,
            vchAepFi: 525,
            vchAepUshij: 0,
            vchAepUhij: 0,
            vchAepLi: 0
        },
        {
            id: GenerateId(),
            numberOrder: 3,
            vchAepFi: 1025,
            vchAepUshij: 0,
            vchAepUhij: 0,
            vchAepLi: 0
        },
        {
            id: GenerateId(),
            numberOrder: 4,
            vchAepFi: 2025,
            vchAepUshij: 0,
            vchAepUhij: 0,
            vchAepLi: 0
        },
        {
            id: GenerateId(),
            numberOrder: 5,
            vchAepFi: 4025,
            vchAepUshij: 0,
            vchAepUhij: 0,
            vchAepLi: 0
        },
    ]);

    // Функция для обновления табличных данных
    const processRowUpdate = React.useCallback(
        async (newRow: GridRowModel) => {
            setMeasureResVchAepField(measureResVchAepField.map(n => n.id === newRow.id ? newRow : n))
            return newRow;
        },
        [measureResVchAepField],
    );

    return (
        <React.Fragment>
            <Typography variant={'h6'} textAlign={'center'} sx={{mb: 2}}>Расчет ВЧ
                АЭП</Typography>
            <Stack spacing={2}>
                <FreqDangSignals/>
                <PreparatoryData/>
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