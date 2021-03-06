import React, {FC} from "react";
import {iCalculatedDataVchAep, iMeasureResVchAepField} from "../../settlement-block/vch-aep/VchAep";
import {iPreparatoryDataVchAep} from "../../settlement-block/vch-aep/tables/PreparatoryData";
import {iFreqDangSignalsVchAep} from "../../settlement-block/vch-aep/tables/FreqDangSignals";
import {iCalculatedDataNchAep, iMeasureResNchAepField} from "../../settlement-block/nch-aep/NchAep";
import {iCalculatedDataVchn, iMeasureResVchnField} from "../../settlement-block/vchn/Vchn";
import {iPreparatoryDataVchn} from "../../settlement-block/vchn/table/VchnPreparatoryData";
import {iFreqDangSignalsVchn} from "../../settlement-block/vchn/table/VchnFreqDangSignals";
import {iCalculatedDataAvak, iMeasureResAvakField} from "../../settlement-block/avak/Avak";
import {Paper, Stack, Typography} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";


interface IProps {
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


const Data: FC<IProps> = (props) => {

    return(
        <React.Fragment>
            <div id={'page'} style={{width: '97%'}}>
                <Stack p={2} spacing={2}>
                    <Typography variant={'h5'} align={'center'}>1. ???????????????????????? ?????????????? ???????????????????? ?? ???????????? ???? ??????</Typography>
                    <Typography align={'right'} variant={'body2'}>?????????????? 1.1. ?????????????? ?????????????????? ????????????????</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <TableHead>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1, borderColor: 'rgba(224, 224, 224, 1)'}}}
                                >
                                    <TableCell align="center">???</TableCell>
                                    <TableCell align="center">j</TableCell>
                                    <TableCell align="center">F<sub>j</sub>, M????</TableCell>
                                    <TableCell align="center">j</TableCell>
                                    <TableCell align="center">F<sub>j</sub>, M????</TableCell>
                                    <TableCell align="center">j</TableCell>
                                    <TableCell align="center">F<sub>j</sub>, M????</TableCell>
                                    <TableCell align="center">j</TableCell>
                                    <TableCell align="center">F<sub>j</sub>, M????</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.freqDangSignalsVchAepRef.current.map((row, index) => (
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
                    <Typography align={'right'} variant={'body2'}>?????????????? 1.2. ???????????????????????????????? ????????????</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <TableBody>
                                {props.preparatoryDataVchAepRef.current.map((row, index) => (
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
                    <Typography align={'right'} variant={'body2'}>?????????????? 1.3. ???????????????????? ??????????????????</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650, flexFlow: 'column nowrap'}} aria-label="simple table">
                            <TableHead>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1, borderColor: 'rgba(224, 224, 224, 1)'}}}
                                >
                                    <TableCell align="center">???</TableCell>
                                    <TableCell align="center">F<sub>i</sub></TableCell>
                                    <TableCell align="center">U<sub>????ij</sub></TableCell>
                                    <TableCell align="center">U<sub>??ij</sub></TableCell>
                                    <TableCell align="center">L<sub>i</sub>, ??????/??</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.measureResVchAepRef.current.map((obj, index) => (
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
                    <Typography align={'right'} variant={'body2'}>?????????????? 1.4. ?????????????????????? ????????????</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650, flexFlow: 'column nowrap'}} aria-label="simple table">
                            <TableHead>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1, borderColor: 'rgba(224, 224, 224, 1)'}}}
                                >
                                    <TableCell align="center">???</TableCell>
                                    <TableCell align="center">U<sub>cij</sub>, ??????</TableCell>
                                    <TableCell align="center">K<sub>i</sub></TableCell>
                                    <TableCell align="center">U<sub>??.????????ij</sub>, ??????</TableCell>
                                    <TableCell align="center">E<sub>cij</sub>, ??????/??</TableCell>
                                    <TableCell align="center">???<sub>ij</sub></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.calculatedDataVchAepRef.current.map((obj, index) => (
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

            <div id={'page'} style={{width: '97%'}}>
                <Stack p={2} spacing={2}>
                    <Typography variant={'h5'} align={'center'}>2. ???????????????????????? ?????????????? ???????????????????? ?? ???????????? ???? ??????</Typography>
                    <Typography align={'right'} variant={'body2'}>?????????????? 2.1. ???????????????????? ??????????????????</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650, flexFlow: 'column nowrap'}} aria-label="simple table">
                            <TableHead>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1, borderColor: 'rgba(224, 224, 224, 1)'}}}
                                >
                                    <TableCell align="center">???</TableCell>
                                    <TableCell align="center">F<sub>i</sub></TableCell>
                                    <TableCell align="center">???F<sub>i</sub></TableCell>
                                    <TableCell align="center">???F<sub>i????</sub></TableCell>
                                    <TableCell align="center">L<sub>??i</sub></TableCell>
                                    <TableCell align="center">L<sub>i</sub></TableCell>
                                    <TableCell align="center">U<sub>????i</sub></TableCell>
                                    <TableCell align="center">U<sub>??i</sub></TableCell>
                                    <TableCell align="center">U<sub>??0i</sub></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.measureResNchAepRef.current.map((obj, index) => (
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
                    <Typography align={'right'} variant={'body2'}>?????????????? 2.2. ?????????????????????? ????????????</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650, flexFlow: 'column nowrap'}} aria-label="simple table">
                            <TableHead>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1, borderColor: 'rgba(224, 224, 224, 1)'}}}
                                >
                                    <TableCell size="small" align="center">???</TableCell>
                                    <TableCell size="small" align="center">F<sub>i</sub>, ????</TableCell>
                                    <TableCell size="small" align="center">U<sub>??i</sub>, ??????</TableCell>
                                    <TableCell size="small" align="center">K<sub>i</sub></TableCell>
                                    <TableCell size="small" align="center">U<sub>??.????????i</sub>, ??????</TableCell>
                                    <TableCell size="small" align="center">??<sub>??.??.??????i</sub></TableCell>
                                    <TableCell size="small" align="center">???<sub>i</sub></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.calculatedDataNchAepRef.current.map((obj, index) => (
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

            <div id={'page'} style={{width: '97%'}}>
                <Stack p={2} spacing={2}>
                    <Typography variant={'h5'} align={'center'}>3. ???????????? ??????</Typography>
                    <Typography align={'right'} variant={'body2'}>?????????????? 3.1. ???????????? ???????????? ?????????????????????? F<sub>j</sub></Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <TableHead>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1, borderColor: 'rgba(224, 224, 224, 1)'}}}
                                >
                                    <TableCell align="center">???</TableCell>
                                    <TableCell align="center">j</TableCell>
                                    <TableCell align="center">F<sub>j</sub>, M????</TableCell>
                                    <TableCell align="center">j</TableCell>
                                    <TableCell align="center">F<sub>j</sub>, M????</TableCell>
                                    <TableCell align="center">j</TableCell>
                                    <TableCell align="center">F<sub>j</sub>, M????</TableCell>
                                    <TableCell align="center">j</TableCell>
                                    <TableCell align="center">F<sub>j</sub>, M????</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.freqDangSignalsVchnRef.current.map((row, index) => (
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
                    <Typography align={'right'} variant={'body2'}>?????????????? 3.2. ???????????????????????????????? ????????????</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <TableBody>
                                {props.preparatoryDataVchnRef.current.map((row, index) => (
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
                    <Typography align={'right'} variant={'body2'}>?????????????? 3.3. ???????????????????? ??????????????????</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650, flexFlow: 'column nowrap'}} aria-label="simple table">
                            <TableHead>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1, borderColor: 'rgba(224, 224, 224, 1)'}}}
                                >
                                    <TableCell align="center">???</TableCell>
                                    <TableCell align="center">i</TableCell>
                                    <TableCell align="center">F<sub>i</sub></TableCell>
                                    <TableCell align="center">???f<sub>i</sub>, ????</TableCell>
                                    <TableCell align="center">f<sub>??if??i</sub>, ????</TableCell>
                                    <TableCell align="center">L<sub>??i</sub>, ????</TableCell>
                                    <TableCell align="center">L<sub>i</sub>, ????</TableCell>
                                    <TableCell align="center">U<sub>c??i</sub>, ????</TableCell>
                                    <TableCell align="center">U<sub>??i</sub>, ????</TableCell>
                                    <TableCell align="center">U<sub>??i</sub></TableCell>
                                    <TableCell align="center">D</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.measureResVchnRef.current.map((obj, index) => (
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
                    <Typography align={'right'} variant={'body2'}>?????????????? 3.4. ?????????????????????? ????????????</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650, flexFlow: 'column nowrap'}} aria-label="simple table">
                            <TableHead>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1, borderColor: 'rgba(224, 224, 224, 1)'}}}
                                >
                                    <TableCell size="small" align="center">???</TableCell>
                                    <TableCell size="small" align="center">F<sub>i</sub>, ????</TableCell>
                                    <TableCell size="small" align="center">U<sub>ci</sub>, ??????</TableCell>
                                    <TableCell size="small" align="center">K<sub>i</sub></TableCell>
                                    <TableCell size="small" align="center">U<sub>c.????????i</sub>, ??????</TableCell>
                                    <TableCell size="small" align="center">m<sub>????i</sub>, ??????</TableCell>
                                    <TableCell size="small" align="center">U<sub>??.????ij</sub></TableCell>
                                    <TableCell size="small" align="center">???<sub>ij</sub></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.calculatedDataVchnRef.current.map((obj, index) => (
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

            <div id={'page'} style={{width: '97%'}}>
                <Stack p={2} spacing={2}>
                    <Typography variant={'h5'} align={'center'}>4. ???????????? ????????</Typography>
                    <Typography align={'right'} variant={'body2'}>?????????????? 4.1. ???????????????????? ??????????????????</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650, flexFlow: 'column nowrap'}} aria-label="simple table">
                            <TableHead>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1, borderColor: 'rgba(224, 224, 224, 1)'}}}
                                >
                                    <TableCell size="small" align="center">???</TableCell>
                                    <TableCell size="small" align="center">F<sub>i</sub>, ????</TableCell>
                                    <TableCell size="small" align="center">L<sub>????i</sub>, ????</TableCell>
                                    <TableCell size="small" align="center">L<sub>??+??i</sub>, ????</TableCell>
                                    <TableCell size="small" align="center">L<sub>??i</sub>, ????</TableCell>
                                    <TableCell size="small" align="center">Q, ????</TableCell>
                                    <TableCell size="small" align="center">L<sub>??i</sub>, ????</TableCell>
                                    <TableCell size="small" align="center">???L<sub>????i</sub>, ????</TableCell>
                                    <TableCell size="small" align="center">??<sub>n<sub>i</sub></sub>, ????</TableCell>
                                    <TableCell size="small" align="center">??<sub>i??</sub>, ????</TableCell>
                                    <TableCell size="small" align="center">?????<sub>i??</sub>, ????</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.measureResAvakRef.current.map((obj, index) => (
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
                    <Typography align={'right'} variant={'body2'}>?????????????? 4.2. ?????????????????????? ????????????</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650, flexFlow: 'column nowrap'}} aria-label="simple table">
                            <TableHead>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1, borderColor: 'rgba(224, 224, 224, 1)'}}}
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
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1, borderColor: 'rgba(224, 224, 224, 1)'}}}
                                >
                                    <TableCell size="small" align="center"> </TableCell>
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
                                {props.calculatedDataAvakRef.current.map((obj, index) => (
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
        </React.Fragment>
    );
};


export default Data;