import React, {FC} from "react";
import {
    Grid,
    Paper,
    Box,
    ButtonGroup,
    Button,
} from "@mui/material";
import VchAep, {iCalculatedDataVchAep, iMeasureResVchAepField} from "./vch-aep/VchAep";
import Avak, {iCalculatedDataAvak, iMeasureResAvakField} from "./avak/Avak";
import NchAep, {iCalculatedDataNchAep, iMeasureResNchAepField} from "./nch-aep/NchAep";
import Vchn, {iCalculatedDataVchn, iMeasureResVchnField} from "./vchn/Vchn";
import {iPreparatoryDataVchAep} from "./vch-aep/tables/PreparatoryData";
import {iFreqDangSignalsVchAep} from "./vch-aep/tables/FreqDangSignals";
import {iPreparatoryDataVchn} from "./vchn/table/VchnPreparatoryData";
import {iFreqDangSignalsVchn} from "./vchn/table/VchnFreqDangSignals";

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

export interface iAep {
    aepSignalNoise: number,
    aepNoise: number,
    ki: number,
    ucpr: number,
    aepDeltai: number,
    uh0okti: number,
    uhokti: number,
    aepDeltashi: number
}

const SettlementBlockTemplate: FC<iProps> = (props) => {

    return (
        <React.Fragment>
            <Grid container pt={4}>
                <Grid item sm={12} md={12} lg={12} xl={12}>
                    <Paper elevation={4}>
                        <Box p={2}>
                            <Box sx={{marginBottom: 2}}>
                                <ButtonGroup variant="outlined" aria-label="выбор условия СЗИ">
                                    <Button>С СЗИ</Button>
                                    <Button>Без СЗИ</Button>
                                </ButtonGroup>
                            </Box>
                            <Paper elevation={4}>
                                <Box p={2}>
                                    <VchAep
                                        measureResVchAepRef={props.measureResVchAepRef}
                                        calculatedDataVchAepRef={props.calculatedDataVchAepRef}
                                        preparatoryDataVchAepRef={props.preparatoryDataVchAepRef}
                                        freqDangSignalsVchAepRef={props.freqDangSignalsVchAepRef}
                                    />
                                </Box>
                            </Paper>
                            <Paper elevation={4} sx={{mt: 2}}>
                                <Box p={2}>
                                    <NchAep
                                        measureResNchAepRef={props.measureResNchAepRef}
                                        calculatedDataNchAepRef={props.calculatedDataNchAepRef}
                                    />
                                </Box>
                            </Paper>
                            <Paper elevation={4} sx={{mt: 2}}>
                                <Box p={2}>
                                    <Vchn
                                        measureResVchnRef={props.measureResVchnRef}
                                        calculatedDataVchnRef={props.calculatedDataVchnRef}
                                        preparatoryDataVchnRef={props.preparatoryDataVchnRef}
                                        freqDangSignalsVchnRef={props.freqDangSignalsVchnRef}
                                    />
                                </Box>
                            </Paper>
                            <Paper elevation={4} sx={{mt: 2}}>
                                <Box p={2}>
                                    <Avak
                                        measureResAvakRef={props.measureResAvakRef}
                                        calculatedDataAvakRef={props.calculatedDataAvakRef}
                                    />
                                </Box>
                            </Paper>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default SettlementBlockTemplate;