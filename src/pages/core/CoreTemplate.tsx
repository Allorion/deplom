import React, {FC, useRef, useState} from "react";
import {Button, Grid, Paper, styled} from "@mui/material";
import Typography from '@mui/material/Typography';
import CrDocumSourceDate from "../creation-source-data-documentation/CrDocumSourceDate";
import {iOtss} from "../creation-source-data-documentation/components/structural-model/TableOtss";
import {iVtss} from "../creation-source-data-documentation/components/structural-model/TableVtss";
import {iPo} from "../creation-source-data-documentation/components/structural-model/TablePo";
import {iSzi} from "../creation-source-data-documentation/components/structural-model/TableSzi";
import SettlementBlockTemplate from "../settlement-block/SettlementBlockTemplate";
import {iCalculatedDataVchAep, iMeasureResVchAepField} from "../settlement-block/vch-aep/VchAep";
import {iCalculatedDataNchAep, iMeasureResNchAepField} from "../settlement-block/nch-aep/NchAep";
import {iPreparatoryDataVchAep} from "../settlement-block/vch-aep/tables/PreparatoryData";
import {iFreqDangSignalsVchAep} from "../settlement-block/vch-aep/tables/FreqDangSignals";
import {iCalculatedDataVchn, iMeasureResVchnField} from "../settlement-block/vchn/Vchn";
import {iFreqDangSignalsVchn} from "../settlement-block/vchn/table/VchnFreqDangSignals";
import {iPreparatoryDataVchn} from "../settlement-block/vchn/table/VchnPreparatoryData";
import {iCalculatedDataAvak, iMeasureResAvakField} from "../settlement-block/avak/Avak";
import GenerateId from "../../global-component/GenerateId";
import {Link} from "react-router-dom";

const CoreTemplate: FC = () => {

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });

    const [component, setComponent] = useState<JSX.Element>();

    // Картинка первого раздела
    const layoutRoomImage = useRef<{ image: string }>({image: ''})
    const otssImage = useRef<{ image: string }>({image: ''})
    const vtssImage = useRef<{ image: string }>({image: ''})
    const communLinesImage = useRef<{ image: string }>({image: ''})
    const enginTechCommunImage = useRef<{ image: string }>({image: ''})
    const sziImage = useRef<{ image: string }>({image: ''})

    // Рефы таблиц первого раздела
    const otssField = useRef<iOtss[]>([]);
    const vtssField = useRef<iVtss[]>([]);
    const poField = useRef<iPo[]>([]);
    const sziField = useRef<iSzi[]>([]);


    // Рефы таблиц второго раздела

    // ВЧ АЭП
    const measureResVchAepRef = useRef<iMeasureResVchAepField[]>([
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
    const calculatedDataVchAepRef = useRef<iCalculatedDataVchAep[]>([]);
    const preparatoryDataVchAepRef = useRef<iPreparatoryDataVchAep[]>([
        {
            id: GenerateId(),
            field1: 'Частота обнаруженного сигнала автогенератора Fj, МГц',
            field2: '',
            field3: 'Таблица 1'
        },
        {
            id: GenerateId(),
            field1: 'Калибровочный коэффициент антенны, Kа, 1/м',
            field2: '',
            field3: 'Приложение Ж'
        },
        {
            id: GenerateId(),
            field1: 'Нормированное отношение сигнал/шум',
            field2: '',
            field3: 'Назначается оператором в соотв. с НМД'
        },
        {
            id: GenerateId(),
            field1: 'Нормированное значение словесной разборчивости речи Wн',
            field2: '',
            field3: 'Назначается оператором в соотв. с НМД'
        },
        {
            id: GenerateId(),
            field1: 'Полоса пропускания фильтра RBW, кГц',
            field2: '',
            field3: 'Устанавливается оператором'
        },
        {
            id: GenerateId(),
            field1: 'Удаление изм. антенны от корпуса ТС R, м',
            field2: '',
            field3: 'В соответствии с местом положения ТС в ЗП'
        },
        {
            id: GenerateId(),
            field1: 'Спектральная плотность нормированного шума для стационарных TCР, мкВ/(мкГц 0,5)',
            field2: '',
            field3: 'Приложение Г'
        },
        {
            id: GenerateId(),
            field1: 'Спектральная плотность нормированного шума для возимых TCP, мкВ/(мкГц0,5)',
            field2: '',
            field3: 'Приложение Г'
        },
        {
            id: GenerateId(),
            field1: 'Спектральная плотность нормированного шума для носимых TCP, мкВ/(мкГц0,5)',
            field2: '',
            field3: 'Приложение Г'
        },
        {
            id: GenerateId(),
            field1: 'Частота обнаруженного сигнала автогенератора Fj, МГц',
            field2: '',
            field3: 'Таблица 1'
        },
        {
            id: GenerateId(),
            field1: 'Коэффициент затухания электромагнитного поля, Kз',
            field2: '',
            field3: 'Приложение Д'
        }
    ]);
    const freqDangSignalsVchAepRef = useRef<iFreqDangSignalsVchAep[]>([]);
    // (конец) ВЧ АЭП

    // НЧ АЭП
    const measureResNchAepRef = useRef<iMeasureResNchAepField[]>([
        {
            id: GenerateId(),
            numberOrder: 1,
            nchAepFi: 275,
            nchAepDeltaFi: 0,
            nchAepDeltaFipr: 0,
            nchAepLni: 0,
            nchAepLi: 0,
            nchAepUshi: 0,
            nchAepUhi: 0,
            nchAepUh0i: 0
        },
        {
            id: GenerateId(),
            numberOrder: 2,
            nchAepFi: 525,
            nchAepDeltaFi: 0,
            nchAepDeltaFipr: 0,
            nchAepLni: 0,
            nchAepLi: 0,
            nchAepUshi: 0,
            nchAepUhi: 0,
            nchAepUh0i: 0
        },
        {
            id: GenerateId(),
            numberOrder: 3,
            nchAepFi: 1025,
            nchAepDeltaFi: 0,
            nchAepDeltaFipr: 0,
            nchAepLni: 0,
            nchAepLi: 0,
            nchAepUshi: 0,
            nchAepUhi: 0,
            nchAepUh0i: 0
        },
        {
            id: GenerateId(),
            numberOrder: 4,
            nchAepFi: 2025,
            nchAepDeltaFi: 0,
            nchAepDeltaFipr: 0,
            nchAepLni: 0,
            nchAepLi: 0,
            nchAepUshi: 0,
            nchAepUhi: 0,
            nchAepUh0i: 0
        },
        {
            id: GenerateId(),
            numberOrder: 5,
            nchAepFi: 4025,
            nchAepDeltaFi: 0,
            nchAepDeltaFipr: 0,
            nchAepLni: 0,
            nchAepLi: 0,
            nchAepUshi: 0,
            nchAepUhi: 0,
            nchAepUh0i: 0
        },
    ]);
    const calculatedDataNchAepRef = useRef<iCalculatedDataNchAep[]>([]);
    // (конец) НЧ АЭП

    // ВЧН
    const measureResVchnRef = useRef<iMeasureResVchnField[]>([
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
            vchnUhi: 0,
            vchnUni: 0,
            vchnD: 0
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
            vchnUhi: 0,
            vchnUni: 0,
            vchnD: 0
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
            vchnUhi: 0,
            vchnUni: 0,
            vchnD: 0
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
            vchnUhi: 0,
            vchnUni: 0,
            vchnD: 0
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
            vchnUhi: 0,
            vchnUni: 0,
            vchnD: 0
        },
    ]);
    const calculatedDataVchnRef = useRef<iCalculatedDataVchn[]>([]);
    const preparatoryDataVchnRef = useRef<iPreparatoryDataVchn[]>([
        {
            id: GenerateId(),
            field1: 'Измеренный уровень несущей UН , дБ',
            field2: '',
            field3: 'Устанавливается оператором'
        },
        {
            id: GenerateId(),
            field1: 'Длина линии от ТС до границы КЗ D, м',
            field2: '',
            field3: 'Устанавливается оператором'
        },
        {
            id: GenerateId(),
            field1: 'Вид линии 1 – Тлф кабель; 2 – линия сигнализации; 3 – эл. сеть;',
            field2: '',
            field3: 'Устанавливается оператором'
        },
        {
            id: GenerateId(),
            field1: 'Нормированное отношение сигнал/шум ∆Н',
            field2: '',
            field3: 'Назначается оператором в соотв. с НМД'
        },
        {
            id: GenerateId(),
            field1: 'Нормированное значение словесной разборчивости речи WН',
            field2: '',
            field3: 'Назначается оператором в соотв. с НМД '
        },
        {
            id: GenerateId(),
            field1: 'Антенный коэффициент проводной линии hP , м',
            field2: '',
            field3: 'Приложение К'
        },
        {
            id: GenerateId(),
            field1: 'Нормированная плотность напряженности шума Eш.н. , мкВ/(м⸱кГц⸱0,5)',
            field2: '',
            field3: 'Приложение Г'
        },
        {
            id: GenerateId(),
            field1: 'Расчет коэффициента затухания в зависимости от вида линии ɑ, дБ/м',
            field2: '',
            field3: 'Приложение И'
        },
    ]);
    const freqDangSignalsVchnRef = useRef<iFreqDangSignalsVchn[]>([]);
    // (конец) ВЧН

    // АВАК
    const measureResAvakRef = useRef<iMeasureResAvakField[]>([
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
    const calculatedDataAvakRef = useRef<iCalculatedDataAvak[]>([]);
    // (конец) АВАК

    // (конец) Рефы таблиц второго раздела

    const switchComponent = (numberPage: number) => {

        switch (numberPage) {
            case 1:
                setComponent(<CrDocumSourceDate
                    layoutRoomImage={layoutRoomImage}
                    otssImage={otssImage}
                    vtssImage={vtssImage}
                    communLinesImage={communLinesImage}
                    enginTechCommunImage={enginTechCommunImage}
                    sziImage={sziImage}
                    otssField={otssField}
                    vtssField={vtssField}
                    poField={poField}
                    sziField={sziField}
                />)
                break
            case 2:
                setComponent(<SettlementBlockTemplate
                    measureResVchAepRef={measureResVchAepRef}
                    calculatedDataVchAepRef={calculatedDataVchAepRef}
                    preparatoryDataVchAepRef={preparatoryDataVchAepRef}
                    freqDangSignalsVchAepRef={freqDangSignalsVchAepRef}
                    measureResNchAepRef={measureResNchAepRef}
                    calculatedDataNchAepRef={calculatedDataNchAepRef}
                    measureResVchnRef={measureResVchnRef}
                    calculatedDataVchnRef={calculatedDataVchnRef}
                    preparatoryDataVchnRef={preparatoryDataVchnRef}
                    freqDangSignalsVchnRef={freqDangSignalsVchnRef}
                    measureResAvakRef={measureResAvakRef}
                    calculatedDataAvakRef={calculatedDataAvakRef}
                />)
                break
        }
    }

    return (
        <React.Fragment>
            <Grid container>
                <Grid item sm={12} md={12} lg={12} xl={12}>
                    <Grid item>
                        <Img alt="complex" src={require("./static/img/mm2-dz4qxb8.jpg")}/>
                    </Grid>
                    <Grid container spacing={2} justifyContent="center" alignItems="center" mt={2}>
                        <Grid item sm={12} md={12} lg={4} xl={4}>
                            <Paper
                                elevation={4}
                                sx={{
                                    p: 2,
                                    margin: 'auto',
                                    maxWidth: 500,
                                    flexGrow: 1,
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1" component="div">
                                                    Формирование документации исходных данных
                                                </Typography>
                                                {/*<Typography variant="body2" gutterBottom>*/}
                                                {/*    можно чето написать*/}
                                                {/*</Typography>*/}
                                            </Grid>
                                            <Grid item>
                                                <Button
                                                    size={'small'}
                                                    variant={'outlined'}
                                                    onClick={() => switchComponent(1)}
                                                >
                                                    Открыть
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item sm={12} md={12} lg={4} xl={4}>
                            <Paper
                                elevation={4}
                                sx={{
                                    p: 2,
                                    margin: 'auto',
                                    maxWidth: 500,
                                    flexGrow: 1,
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1" component="div">
                                                    Расчетный блок
                                                </Typography>
                                                {/*<Typography variant="body2" gutterBottom>*/}
                                                {/*    можно чето написать*/}
                                                {/*</Typography>*/}
                                            </Grid>
                                            <Grid item>
                                                <Button size={'small'} variant={'outlined'}
                                                        onClick={() => switchComponent(2)}>
                                                    Открыть
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item sm={12} md={12} lg={4} xl={4}>
                            <Paper
                                elevation={4}
                                sx={{
                                    p: 2,
                                    margin: 'auto',
                                    maxWidth: 500,
                                    flexGrow: 1,
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1" component="div">
                                                    Формирование отчетной документации
                                                </Typography>
                                                {/*<Typography variant="body2" gutterBottom>*/}
                                                {/*    можно чето написать*/}
                                                {/*</Typography>*/}
                                            </Grid>
                                            <Grid item>
                                                <Link to="save-report-pdf/"
                                                      style={{textDecoration: 'none'}} state={{
                                                    measureResVchAepRef,
                                                    calculatedDataVchAepRef,
                                                    preparatoryDataVchAepRef,
                                                    freqDangSignalsVchAepRef,
                                                    measureResNchAepRef,
                                                    calculatedDataNchAepRef,
                                                    measureResVchnRef,
                                                    calculatedDataVchnRef,
                                                    preparatoryDataVchnRef,
                                                    freqDangSignalsVchnRef,
                                                    measureResAvakRef,
                                                    calculatedDataAvakRef
                                                }}>
                                                    <Button size={'small'} variant={'outlined'}>
                                                        Открыть
                                                    </Button>
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {component}
        </React.Fragment>
    );
};

export default CoreTemplate;