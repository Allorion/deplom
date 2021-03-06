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
    measureResAvakRef: {
        current: iMeasureResAvakField[]
    }
    calculatedDataAvakRef: {
        current: iCalculatedDataAvak[]
    }
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

    const [calculatedDataAvak, setCalculatedDataAvak] = useState<iCalculatedDataAvak[]>(props.calculatedDataAvakRef.current);

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

            let Lci = 10 * Math.log(Math.pow(10, (Lchi / 10)) - Math.pow(10, (Lhi / 10)))
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
        props.calculatedDataAvakRef.current = copy
        return copy;
    }


    // ?????????????????? ?????????? ???????? ?????????? ?? ???????????? ??????????????
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
            headerName: 'L????i, ????',
            width: 150,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'Lchi',
            headerName: 'L??+??i,????',
            width: 150,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'Lhi',
            headerName: 'L??i,????',
            width: 150,
            editable: false,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'Q',
            headerName: 'Q, ????',
            width: 150,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'Lni',
            headerName: 'L??i, ????',
            width: 150,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'DeltaLtci',
            headerName: '???L????i, ????',
            width: 150,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'Eni',
            headerName: '??ni, ????',
            width: 150,
            editable: false,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'Eih',
            headerName: '??i??, ????',
            width: 150,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'DeltaEih',
            headerName: '?????i??, ????',
            width: 150,
            editable: true,
            type: "number",
            headerAlign: 'center',
            align: 'center'
        },
    ]

    const [measureResAvakField, setMeasureResAvakField] = useState<iMeasureResAvakField[]>(props.measureResAvakRef.current);

    // ?????????????? ?????? ???????????????????? ?????????????????? ????????????
    const processRowUpdate = React.useCallback(
        async (newRow: GridRowModel) => {
            setMeasureResAvakField(measureResAvakField.map(n => n.id === newRow.id ? newRow : n))
            props.measureResAvakRef.current = measureResAvakField
            return newRow;
        },
        [measureResAvakField],
    );

    return (
        <React.Fragment>
            <Typography variant={'h6'} textAlign={'center'} sx={{mb: 2}}>???????????? ????????</Typography>
            <Stack spacing={2}>
                <Paper elevation={4}>
                    <Box p={2}>
                        <Typography variant={'h6'} pb={2}>???????????????????? ??????????????????</Typography>
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
                                variant={'outlined'}>????????????????????</Button>
                        <TableContainer component={Paper} sx={{mt: 2}} elevation={4}>
                            <Table sx={{minWidth: 650}} aria-label="simple table">
                                <TableHead>
                                    <TableRow
                                        sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1}}}
                                    >
                                        <TableCell size="small" align="center">???</TableCell>
                                        <TableCell size="small" align="center">F<sub>i</sub>, ????</TableCell>
                                        <TableCell size="small" align="center">L<sub>????i</sub>, ????</TableCell>
                                        <TableCell size="small" align="center">L<sub>??+??i</sub>, ????</TableCell>
                                        <TableCell size="small" align="center">L<sub>??i</sub>, ????</TableCell>
                                        <TableCell size="small" align="center">L<sub>??i</sub>, ????</TableCell>
                                        <TableCell size="small" align="center">Q, ????</TableCell>
                                        <TableCell size="small" align="center">L<sub>??i</sub>, ????</TableCell>
                                        <TableCell size="small" align="center">???L<sub>????i</sub>, ????</TableCell>
                                        <TableCell size="small" align="center">L??<sub>????????.i</sub>, ????</TableCell>
                                        <TableCell size="small" align="center">??<sub>i</sub>, ????</TableCell>
                                        <TableCell size="small" align="center">??<sub>n<sub>i</sub></sub>, ????</TableCell>
                                        <TableCell size="small" align="center">??<sub>i??</sub>, ????</TableCell>
                                        <TableCell size="small" align="center">?????<sub>i??</sub>, ????</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableHead>
                                    <TableRow
                                        sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1}}}
                                    >
                                        <TableCell size="small" align="center"></TableCell>
                                        <TableCell size="small" align="center">???????????????????????????????????? ?????????????? ??????????</TableCell>
                                        <TableCell size="small" align="center">???????????????? ???????????????? ?????????????? (?????????? 90 ????)</TableCell>
                                        <TableCell size="small" align="center">???????????????? ???????????????? ????????????+??????</TableCell>
                                        <TableCell size="small" align="center">???????????????? ???????????????? ????????</TableCell>
                                        <TableCell size="small" align="center">???????????????? ???????????????? ??????????????</TableCell>
                                        <TableCell size="small" align="center">???????????????? ???????????????? ????</TableCell>
                                        <TableCell size="small" align="center">???????????????? ???????????????? ???????????? ?????????????? ????????</TableCell>
                                        <TableCell size="small" align="center">?????????????????????? ???? ???? ???? ???????????? ???? </TableCell>
                                        <TableCell size="small" align="center">?????????????????????? ???? ?????????????? ???? ???????????? ????</TableCell>
                                        <TableCell size="small" align="center">???????????????????? ????. ???????? ?????? ?????????????? ????????</TableCell>
                                        <TableCell size="small" align="center">?????????????????????????? ???????????????? ??<sub>i</sub>?????? W=0,4</TableCell>
                                        <TableCell size="small" align="center">???????????????? ???????????? ???????? ?????????????? ????????????</TableCell>
                                        <TableCell size="small" align="center">???????????????? ???????????????? ???????????? ???????? ?????????????? ????????????</TableCell>
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