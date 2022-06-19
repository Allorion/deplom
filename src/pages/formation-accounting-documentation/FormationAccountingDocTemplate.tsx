import React, {FC} from "react";
import {iCalculatedDataVchAep, iMeasureResVchAepField} from "../settlement-block/vch-aep/VchAep";
import {iPreparatoryDataVchAep} from "../settlement-block/vch-aep/tables/PreparatoryData";
import {iFreqDangSignalsVchAep} from "../settlement-block/vch-aep/tables/FreqDangSignals";
import {iCalculatedDataNchAep, iMeasureResNchAepField} from "../settlement-block/nch-aep/NchAep";
import {iCalculatedDataVchn, iMeasureResVchnField} from "../settlement-block/vchn/Vchn";
import {iPreparatoryDataVchn} from "../settlement-block/vchn/table/VchnPreparatoryData";
import {iFreqDangSignalsVchn} from "../settlement-block/vchn/table/VchnFreqDangSignals";
import {iCalculatedDataAvak, iMeasureResAvakField} from "../settlement-block/avak/Avak";
import {Grid, Paper, Stack, TextField, Typography} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import "./static/index.css"
import {useLocation} from "react-router-dom";
import Table1 from "./components/Table1";
import Table3 from "./components/Table3";
import Table2 from "./components/Table2";

interface iRoute {
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
    measureResNchAepRef: {
        current: iMeasureResNchAepField[]
    }
    calculatedDataNchAepRef: {
        current: iCalculatedDataNchAep[]
    }
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
    measureResAvakRef: {
        current: iMeasureResAvakField[]
    }
    calculatedDataAvakRef: {
        current: iCalculatedDataAvak[]
    }
}

const FormationAccountingDocTemplate: FC = () => {

    // Указываем получение id отчета
    const location = useLocation();
    const propsRout = location.state as iRoute;

    return (
        <React.Fragment>

            {/*<div id={'page'} style={{borderStyle: 'double'}}>*/}
            {/*    <Typography variant={'h5'} textAlign={'center'}>*/}
            {/*        Южно-Российский государственный политехнический университет имени М.И. Платова*/}
            {/*    </Typography>*/}
            {/*    <Typography variant={'h6'} textAlign={'center'}>*/}
            {/*        Кафедра "Информационная безопасность"*/}
            {/*    </Typography>*/}
            {/*    <Typography variant={'h3'} textAlign={'center'} marginTop={'40%'}>*/}
            {/*        Отчет*/}
            {/*    </Typography>*/}
            {/*    <Typography variant={'subtitle1'} textAlign={'center'}>*/}
            {/*        Тут текст*/}
            {/*    </Typography>*/}
            {/*    <Typography variant={'subtitle2'} textAlign={'center'} sx={{marginTop: 'auto'}}>*/}
            {/*        г. Новочеркасск {new Date().getFullYear()} г.*/}
            {/*    </Typography>*/}
            {/*</div>*/}
            <div id={'page'}>
                <Stack p={2} spacing={2}>
                    <Typography variant={'h5'} align={'center'}>1. Защищенности речевой информации в канале ВЧ АЭП</Typography>
                    <Typography align={'right'} variant={'body2'}>Таблица 1.1. Частоты «опасных» сигналов</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <TableHead>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1, borderColor: 'rgba(224, 224, 224, 1)'}}}
                                >
                                    <TableCell align="center">№</TableCell>
                                    <TableCell align="center">j</TableCell>
                                    <TableCell align="center">F<sub>j</sub>, MГц</TableCell>
                                    <TableCell align="center">j</TableCell>
                                    <TableCell align="center">F<sub>j</sub>, MГц</TableCell>
                                    <TableCell align="center">j</TableCell>
                                    <TableCell align="center">F<sub>j</sub>, MГц</TableCell>
                                    <TableCell align="center">j</TableCell>
                                    <TableCell align="center">F<sub>j</sub>, MГц</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {propsRout.freqDangSignalsVchAepRef.current.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{
                                            '&:nth-of-type(even) td, &:nth-of-type(odd) td, &:nth-of-type(even) th, &:nth-of-type(odd) th': {
                                                border: 1,
                                                rowSpan: 1,
                                                align: 'center',
                                                size: "small",
                                                borderColor: 'rgba(224, 224, 224, 1)'
                                            }
                                        }}
                                    >
                                        <TableCell align="center">{index + 1}</TableCell>
                                        <TableCell align="center">{row.j1}</TableCell>
                                        <TableCell align="center">{row.Fj1}</TableCell>
                                        <TableCell align="center">{row.j2}</TableCell>
                                        <TableCell align="center">{row.Fj2}</TableCell>
                                        <TableCell align="center">{row.j3}</TableCell>
                                        <TableCell align="center">{row.Fj3}</TableCell>
                                        <TableCell align="center">{row.j4}</TableCell>
                                        <TableCell align="center">{row.Fj4}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography align={'right'} variant={'body2'}>Таблица 1.2. Подготовительные данные</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <TableBody>
                                {propsRout.preparatoryDataVchAepRef.current.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{
                                            '&:nth-of-type(even) td, &:nth-of-type(odd) td, &:nth-of-type(even) th, &:nth-of-type(odd) th': {
                                                border: 1,
                                                rowSpan: 1,
                                                align: 'center',
                                                size: "small",
                                                borderColor: 'rgba(224, 224, 224, 1)'
                                            }
                                        }}
                                    >
                                        <TableCell>{row.field1}</TableCell>
                                        <TableCell>{row.field2}</TableCell>
                                        <TableCell>{row.field3}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography align={'right'} variant={'body2'}>Таблица 1.3. Результаты измерений</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650, flexFlow: 'column nowrap'}} aria-label="simple table">
                            <TableHead>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1, borderColor: 'rgba(224, 224, 224, 1)'}}}
                                >
                                    <TableCell align="center">№</TableCell>
                                    <TableCell align="center">F<sub>i</sub></TableCell>
                                    <TableCell align="center">U<sub>сшij</sub></TableCell>
                                    <TableCell align="center">U<sub>шij</sub></TableCell>
                                    <TableCell align="center">L<sub>i</sub>, мкВ/м</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {propsRout.measureResVchAepRef.current.map((obj, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{
                                            '&:nth-of-type(even) td, &:nth-of-type(odd) td, &:nth-of-type(even) th, &:nth-of-type(odd) th': {
                                                border: 1,
                                                rowSpan: 1,
                                                align: 'center',
                                                size: "small",
                                                borderColor: 'rgba(224, 224, 224, 1)'
                                            }
                                        }}>
                                        <TableCell align="center">{index + 1}</TableCell>
                                        <TableCell align="center">{obj.vchAepFi}</TableCell>
                                        <TableCell align="center">{obj.vchAepUshij}</TableCell>
                                        <TableCell align="center">{obj.vchAepUhij}</TableCell>
                                        <TableCell align="center">{obj.vchAepLi}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography align={'right'} variant={'body2'}>Таблица 1.4. Расчитанные данные</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650, flexFlow: 'column nowrap'}} aria-label="simple table">
                            <TableHead>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1, borderColor: 'rgba(224, 224, 224, 1)'}}}
                                >
                                    <TableCell align="center">№</TableCell>
                                    <TableCell align="center">U<sub>cij</sub>, мкВ</TableCell>
                                    <TableCell align="center">K<sub>i</sub></TableCell>
                                    <TableCell align="center">U<sub>с.привij</sub>, мкВ</TableCell>
                                    <TableCell align="center">E<sub>cij</sub>, мкВ/м</TableCell>
                                    <TableCell align="center">∆<sub>ij</sub></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {propsRout.calculatedDataVchAepRef.current.map((obj, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{
                                            '&:nth-of-type(even) td, &:nth-of-type(odd) td, &:nth-of-type(even) th, &:nth-of-type(odd) th': {
                                                border: 1,
                                                rowSpan: 1,
                                                align: 'center',
                                                size: "small",
                                                borderColor: 'rgba(224, 224, 224, 1)'
                                            }
                                        }}>
                                        <TableCell align="center">{index + 1}</TableCell>
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
                </Stack>
            </div>

            <div id={'page'}>
                <Stack p={2} spacing={2}>
                    <Typography variant={'h5'} align={'center'}>2. Защищенности речевой информации в канале НЧ АЭП</Typography>
                    <Typography align={'right'} variant={'body2'}>Таблица 2.1. Результаты измерений</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650, flexFlow: 'column nowrap'}} aria-label="simple table">
                            <TableHead>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1, borderColor: 'rgba(224, 224, 224, 1)'}}}
                                >
                                    <TableCell align="center">№</TableCell>
                                    <TableCell align="center">F<sub>i</sub></TableCell>
                                    <TableCell align="center">∆F<sub>i</sub></TableCell>
                                    <TableCell align="center">∆F<sub>iпр</sub></TableCell>
                                    <TableCell align="center">L<sub>нi</sub></TableCell>
                                    <TableCell align="center">L<sub>i</sub></TableCell>
                                    <TableCell align="center">U<sub>сшi</sub></TableCell>
                                    <TableCell align="center">U<sub>шi</sub></TableCell>
                                    <TableCell align="center">U<sub>ш0i</sub></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {propsRout.measureResNchAepRef.current.map((obj, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{
                                            '&:nth-of-type(even) td, &:nth-of-type(odd) td, &:nth-of-type(even) th, &:nth-of-type(odd) th': {
                                                border: 1,
                                                rowSpan: 1,
                                                align: 'center',
                                                size: "small",
                                                borderColor: 'rgba(224, 224, 224, 1)'
                                            }
                                        }}>
                                        <TableCell align="center">{index + 1}</TableCell>
                                        <TableCell align="center">{obj.nchAepFi}</TableCell>
                                        <TableCell align="center">{obj.nchAepDeltaFi}</TableCell>
                                        <TableCell align="center">{obj.nchAepDeltaFipr}</TableCell>
                                        <TableCell align="center">{obj.nchAepLni}</TableCell>
                                        <TableCell align="center">{obj.nchAepLi}</TableCell>
                                        <TableCell align="center">{obj.nchAepUshi}</TableCell>
                                        <TableCell align="center">{obj.nchAepUhi}</TableCell>
                                        <TableCell align="center">{obj.nchAepUh0i}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography align={'right'} variant={'body2'}>Таблица 2.2. Расчитанные данные</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650, flexFlow: 'column nowrap'}} aria-label="simple table">
                            <TableHead>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1, borderColor: 'rgba(224, 224, 224, 1)'}}}
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
                                {propsRout.calculatedDataNchAepRef.current.map((obj, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{
                                            '&:nth-of-type(even) td, &:nth-of-type(odd) td, &:nth-of-type(even) th, &:nth-of-type(odd) th': {
                                                border: 1,
                                                rowSpan: 1,
                                                align: 'center',
                                                size: "small",
                                                borderColor: 'rgba(224, 224, 224, 1)'
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
                </Stack>
            </div>

            <div id={'page'}>
                <Stack p={2} spacing={2}>
                    <Typography variant={'h5'} align={'center'}>3. Расчет ВЧН</Typography>
                    <Typography align={'right'} variant={'body2'}>Таблица 3.1. Список частот навязывания F<sub>j</sub></Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <TableHead>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1, borderColor: 'rgba(224, 224, 224, 1)'}}}
                                >
                                    <TableCell align="center">№</TableCell>
                                    <TableCell align="center">j</TableCell>
                                    <TableCell align="center">F<sub>j</sub>, MГц</TableCell>
                                    <TableCell align="center">j</TableCell>
                                    <TableCell align="center">F<sub>j</sub>, MГц</TableCell>
                                    <TableCell align="center">j</TableCell>
                                    <TableCell align="center">F<sub>j</sub>, MГц</TableCell>
                                    <TableCell align="center">j</TableCell>
                                    <TableCell align="center">F<sub>j</sub>, MГц</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {propsRout.freqDangSignalsVchnRef.current.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{
                                            '&:nth-of-type(even) td, &:nth-of-type(odd) td, &:nth-of-type(even) th, &:nth-of-type(odd) th': {
                                                border: 1,
                                                rowSpan: 1,
                                                align: 'center',
                                                size: "small",
                                                borderColor: 'rgba(224, 224, 224, 1)'
                                            }
                                        }}
                                    >
                                        <TableCell align="center">{index + 1}</TableCell>
                                        <TableCell align="center">{row.j1}</TableCell>
                                        <TableCell align="center">{row.Fj1}</TableCell>
                                        <TableCell align="center">{row.j2}</TableCell>
                                        <TableCell align="center">{row.Fj2}</TableCell>
                                        <TableCell align="center">{row.j3}</TableCell>
                                        <TableCell align="center">{row.Fj3}</TableCell>
                                        <TableCell align="center">{row.j4}</TableCell>
                                        <TableCell align="center">{row.Fj4}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography align={'right'} variant={'body2'}>Таблица 3.2. Подготовительные данные</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <TableBody>
                                {propsRout.preparatoryDataVchnRef.current.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{
                                            '&:nth-of-type(even) td, &:nth-of-type(odd) td, &:nth-of-type(even) th, &:nth-of-type(odd) th': {
                                                border: 1,
                                                rowSpan: 1,
                                                align: 'center',
                                                size: "small",
                                                borderColor: 'rgba(224, 224, 224, 1)'
                                            }
                                        }}
                                    >
                                        <TableCell>{row.field1}</TableCell>
                                        <TableCell>{row.field2}</TableCell>
                                        <TableCell>{row.field3}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography align={'right'} variant={'body2'}>Таблица 3.3. Результаты измерений</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650, flexFlow: 'column nowrap'}} aria-label="simple table">
                            <TableHead>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1, borderColor: 'rgba(224, 224, 224, 1)'}}}
                                >
                                    <TableCell align="center">№</TableCell>
                                    <TableCell align="center">i</TableCell>
                                    <TableCell align="center">F<sub>i</sub></TableCell>
                                    <TableCell align="center">∆f<sub>i</sub>, Гц</TableCell>
                                    <TableCell align="center">f<sub>нifвi</sub>, Гц</TableCell>
                                    <TableCell align="center">L<sub>нi</sub>, дБ</TableCell>
                                    <TableCell align="center">L<sub>i</sub>, дБ</TableCell>
                                    <TableCell align="center">U<sub>cшi</sub>, дБ</TableCell>
                                    <TableCell align="center">U<sub>шi</sub>, дБ</TableCell>
                                    <TableCell align="center">U<sub>нi</sub></TableCell>
                                    <TableCell align="center">D</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {propsRout.measureResVchnRef.current.map((obj, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{
                                            '&:nth-of-type(even) td, &:nth-of-type(odd) td, &:nth-of-type(even) th, &:nth-of-type(odd) th': {
                                                border: 1,
                                                rowSpan: 1,
                                                align: 'center',
                                                size: "small",
                                                borderColor: 'rgba(224, 224, 224, 1)'
                                            }
                                        }}>
                                        <TableCell align="center">{index + 1}</TableCell>
                                        <TableCell align="center">{obj.vchnI}</TableCell>
                                        <TableCell align="center">{obj.vchnFi}</TableCell>
                                        <TableCell align="center">{obj.vchnDeltaFi}</TableCell>
                                        <TableCell align="center">{obj.vchnFniFvi}</TableCell>
                                        <TableCell align="center">{obj.vchnLni}</TableCell>
                                        <TableCell align="center">{obj.vchnLi}</TableCell>
                                        <TableCell align="center">{obj.vchnUshi}</TableCell>
                                        <TableCell align="center">{obj.vchnUhi}</TableCell>
                                        <TableCell align="center">{obj.vchnUni}</TableCell>
                                        <TableCell align="center">{obj.vchnD}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography align={'right'} variant={'body2'}>Таблица 3.4. Расчитанные данные</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650, flexFlow: 'column nowrap'}} aria-label="simple table">
                            <TableHead>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1, borderColor: 'rgba(224, 224, 224, 1)'}}}
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
                                {propsRout.calculatedDataVchnRef.current.map((obj, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{
                                            '&:nth-of-type(even) td, &:nth-of-type(odd) td, &:nth-of-type(even) th, &:nth-of-type(odd) th': {
                                                border: 1,
                                                rowSpan: 1,
                                                align: 'center',
                                                size: "small",
                                                borderColor: 'rgba(224, 224, 224, 1)'
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
                </Stack>
            </div>

            <div id={'page'}>
                <Stack p={2} spacing={2}>
                    <Typography variant={'h5'} align={'center'}>4. Расчет АВАК</Typography>
                    <Typography align={'right'} variant={'body2'}>Таблица 4.1. Результаты измерений</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650, flexFlow: 'column nowrap'}} aria-label="simple table">
                            <TableHead>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1, borderColor: 'rgba(224, 224, 224, 1)'}}}
                                >
                                    <TableCell size="small" align="center">№</TableCell>
                                    <TableCell size="small" align="center">F<sub>i</sub>, Гц</TableCell>
                                    <TableCell size="small" align="center">L<sub>ТСi</sub>, дБ</TableCell>
                                    <TableCell size="small" align="center">L<sub>С+Шi</sub>, дБ</TableCell>
                                    <TableCell size="small" align="center">L<sub>Шi</sub>, дБ</TableCell>
                                    <TableCell size="small" align="center">Q, дБ</TableCell>
                                    <TableCell size="small" align="center">L<sub>Нi</sub>, дБ</TableCell>
                                    <TableCell size="small" align="center">∆L<sub>тсi</sub>, дБ</TableCell>
                                    <TableCell size="small" align="center">Е<sub>n<sub>i</sub></sub>, дБ</TableCell>
                                    <TableCell size="small" align="center">Е<sub>iш</sub>, дБ</TableCell>
                                    <TableCell size="small" align="center">∆Е<sub>iш</sub>, дБ</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {propsRout.measureResAvakRef.current.map((obj, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{
                                            '&:nth-of-type(even) td, &:nth-of-type(odd) td, &:nth-of-type(even) th, &:nth-of-type(odd) th': {
                                                border: 1,
                                                rowSpan: 1,
                                                align: 'center',
                                                size: "small",
                                                borderColor: 'rgba(224, 224, 224, 1)'
                                            }
                                        }}>
                                        <TableCell align="center">{index + 1}</TableCell>
                                        <TableCell align="center">{obj.Fi}</TableCell>
                                        <TableCell align="center">{obj.Ltci}</TableCell>
                                        <TableCell align="center">{obj.Lchi}</TableCell>
                                        <TableCell align="center">{obj.Lhi}</TableCell>
                                        <TableCell align="center">{obj.Q}</TableCell>
                                        <TableCell align="center">{obj.Lni}</TableCell>
                                        <TableCell align="center">{obj.DeltaLtci}</TableCell>
                                        <TableCell align="center">{obj.Eni}</TableCell>
                                        <TableCell align="center">{obj.Eih}</TableCell>
                                        <TableCell align="center">{obj.DeltaEih}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography align={'right'} variant={'body2'}>Таблица 4.2. Расчитанные данные</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650, flexFlow: 'column nowrap'}} aria-label="simple table">
                            <TableHead>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1, borderColor: 'rgba(224, 224, 224, 1)'}}}
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
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1, borderColor: 'rgba(224, 224, 224, 1)'}}}
                                >
                                    <TableCell size="small" align="center"> </TableCell>
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
                                {propsRout.calculatedDataAvakRef.current.map((obj, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{
                                            '&:nth-of-type(even) td, &:nth-of-type(odd) td, &:nth-of-type(even) th, &:nth-of-type(odd) th': {
                                                border: 1,
                                                rowSpan: 1,
                                                align: 'center',
                                                size: "small",
                                                borderColor: 'rgba(224, 224, 224, 1)'
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
                </Stack>
            </div>

            <div id={'page2'}>
                <Grid container justifyContent={'flex-end'}>
                    <Grid item>
                        <Stack direction={'column'} textAlign={'center'}>
                            <Typography variant={'h6'}>УТВЕРЖДАЮ</Typography>
                            <TextField variant={'standard'} sx={{width: 500}} size={'small'} className={'input-center'}/>
                            <Typography variant={'caption'} pt={1}><i>(руководитель (уполномоченное лицо) владельца объекта информатизации)</i></Typography>
                            <hr style={{width: 300, color:"black", marginTop:30}} />
                            <Typography variant={'caption'}><i>(подпись, инициалы и фамилия)</i></Typography>
                            <Stack spacing={1} direction={'row'} justifyContent={'center'} mt={1}>
                                «<TextField variant={'standard'} sx={{width: 30}} size={'small'} className={'input-center'}/>»
                                <TextField variant={'standard'} sx={{width: 150}} size={'small'} className={'input-center'}/>
                                <TextField variant={'standard'} sx={{width: 50}} size={'small'} className={'input-center'}/>
                                <Typography variant={'body1'} pt={1}>г.</Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container justifyContent={'center'}>
                    <Grid item pt={40} justifyContent={'center'} textAlign={'center'} alignItems={'center'}>
                        <Stack direction={'column'} textAlign={'center'}>
                            <Typography variant={'h6'}>ТЕХНИЧЕСКИЙ ПАСПОРТ</Typography>
                            <Typography variant={'body1'}>защищаемого помещения</Typography>
                            <TextField variant={'standard'} sx={{width: 800}} size={'small'} className={'input-center'}/>
                            <Typography variant={'caption'}><i>(наименование защищаемого помещения)</i></Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </div>

            <div id={'page2'}>
                <Stack direction={'column'} spacing={2}>
                    <Typography variant={'body1'} textAlign={'justify'}>
                        1. Общие сведения о защищаемом помещении.
                    </Typography>
                    <Stack direction={'row'}>
                        <Typography variant={'body1'} textAlign={'justify'}>
                            1.1. Наименование и назначение защищаемого помещения:
                        </Typography>
                        <TextField variant={'standard'} sx={{width: 310}} size={'small'} className={'input-center'}/>
                    </Stack>
                    <Stack direction={'row'}>
                        <Typography variant={'body1'} textAlign={'justify'}>
                            1.2. Расположение защищаемого помещения:
                        </Typography>
                        <Stack direction={'column'}>
                            <TextField variant={'standard'} sx={{width: 415}} size={'small'} className={'input-center'}/>
                            <Typography variant={'caption'} textAlign={'center'}><i>(указываются адрес, строение, этаж, номер)</i></Typography>
                        </Stack>
                    </Stack>
                    <Typography variant={'body1'} textAlign={'justify'}>
                        1.3. Сведения о проведении проверок защищаемого помещения с целью выявления
                        возможно внедренных электронных устройств перехвата информации:
                    </Typography>
                    <Stack direction={'column'}>
                        <TextField variant={'standard'} sx={{width: 800}} size={'small'} className={'input-center'}/>
                        <Typography variant={'caption'} textAlign={'center'}><i>(указываются реквизиты заключения,
                            наименование организации, проводившей проверки)</i></Typography>
                    </Stack>
                    <Typography variant={'body1'} textAlign={'justify'}>
                        1.4. Сведения об аттестации защищаемого помещения:
                    </Typography>
                    <Stack direction={'column'}>
                        <TextField variant={'standard'} sx={{width: 800}} size={'small'} className={'input-center'}/>
                        <Typography variant={'caption'} textAlign={'center'}><i>(указываются реквизиты аттестата
                            соответствия требованиям по безопасности информации)</i></Typography>
                    </Stack>
                    <Typography variant={'body1'} textAlign={'justify'}>
                        1.5. Сведения о вводе защищаемого помещения в эксплуатацию:
                    </Typography>
                    <Stack direction={'column'}>
                        <TextField variant={'standard'} sx={{width: 800}} size={'small'} className={'input-center'}/>
                        <Typography variant={'caption'} textAlign={'center'}><i>(указываются номер и дата приказа о
                            вводе в эксплуатацию защищаемого помещения)</i></Typography>
                    </Stack>
                    <Typography variant={'body1'} textAlign={'justify'}>
                        2. Условия расположения и эксплуатации защищаемого помещения.
                    </Typography>
                    <Typography variant={'body1'} textAlign={'justify'}>
                            2.1. Сведения и схема расположения защищаемого помещения относительно границ контролируемой
                        зоны с указанием расстояний до ее границ, сведения и схема основных технических средств и
                        систем (в случае их наличия), вспомогательных технических средств и систем, средств защиты
                        информации, а также линий, имеющих выход за пределы контролируемой зоны, относительно границ
                        контролируемой зоны с указанием расстояний до ее границ.
                    </Typography>
                    <Typography variant={'body1'} textAlign={'justify'}>
                        2.2. Сведения и схемы электроснабжения и заземления основных технических средств и систем
                        (в случае их наличия) и вспомогательных технических средств и систем, установленных в защищаемом
                        помещении, включая место расположения трансформаторной подстанции и заземляющего устройства, с
                        указанием расстояний до границ контролируемой зоны, сведения о сопротивлении заземляющего
                        устройства (при наличии основных технических средств и систем).
                    </Typography>
                    <Typography variant={'body1'} textAlign={'justify'}>
                        3. Состав защищаемого помещения.
                    </Typography>
                    <Typography variant={'body1'} textAlign={'justify'}>
                        3.1. Состав основных технических средств и систем, установленных в защищаемом помещении,
                        представлен в таблице 1.
                    </Typography>
                    <Table1/>
                    <Typography variant={'body1'} textAlign={'justify'}>
                        3.2. Состав	вспомогательных	технических	средств	и	систем, установленных в
                        защищаемом помещении, представлен в таблице 2.
                    </Typography>
                    <Table2/>
                    <Typography variant={'body1'} textAlign={'justify'}>
                        3.3. Состав	средств	защиты	информации,	используемых в защищаемом помещении, представлен в
                        таблице 3.
                    </Typography>
                    <Table3/>
                    <hr/>
                    <Typography variant={'inherit'} textAlign={'justify'}>
                        <sup>4</sup> В случае отсутствия необходимости специальной проверки технических средств пункт не заполняется.
                    </Typography>
                    <Typography variant={'inherit'} textAlign={'justify'}>
                        <sup>5</sup> В случае отсутствия необходимости применения сертифицированных средств защиты информации пункт не заполняется.
                    </Typography>
                </Stack>
            </div>
        </React.Fragment>
    )
        ;
};

export default FormationAccountingDocTemplate;