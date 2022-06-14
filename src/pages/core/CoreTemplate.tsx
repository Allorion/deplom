import React, {FC, useRef, useState} from "react";
import {Button, Grid, Paper, styled} from "@mui/material";
import Typography from '@mui/material/Typography';
import CrDocumSourceDate from "../creation-source-data-documentation/CrDocumSourceDate";
import {iOtss} from "../creation-source-data-documentation/components/structural-model/TableOtss";
import {iVtss} from "../creation-source-data-documentation/components/structural-model/TableVtss";
import {iPo} from "../creation-source-data-documentation/components/structural-model/TablePo";
import {iSzi} from "../creation-source-data-documentation/components/structural-model/TableSzi";
import SettlementBlockTemplate, {iAep} from "../settlement-block/SettlementBlockTemplate";
import {iVcaep} from "../settlement-block/vch-aep/VchAep";

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

    // Рефы второго раздела
    const vcaepFiedl = useRef<iVcaep>({
        ush: 0,
        uh: 0,
        ucij: 0,
        kimkv: 0,
        ucprivij: 0,
        ecij: 0,
        deltaij: 0
    })
    const aepFiedl = useRef<iAep>({
        aepSignalNoise: 0,
        aepNoise: 0,
        ki: 0,
        ucpr: 0,
        aepDeltai: 0,
        uh0okti: 0,
        uhokti: 0,
        aepDeltashi: 0
    })


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
                    vcaepFiedl={vcaepFiedl}
                    aepFiedl={aepFiedl}
                />)
                break
            case 3:

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
                                                <Button size={'small'} variant={'outlined'}
                                                        onClick={() => switchComponent(3)}>
                                                    Открыть
                                                </Button>
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