import React, {FC, useState} from "react";
import {iCalculatedDataVchAep, iMeasureResVchAepField} from "../settlement-block/vch-aep/VchAep";
import {iPreparatoryDataVchAep} from "../settlement-block/vch-aep/tables/PreparatoryData";
import {iFreqDangSignalsVchAep} from "../settlement-block/vch-aep/tables/FreqDangSignals";
import {iCalculatedDataNchAep, iMeasureResNchAepField} from "../settlement-block/nch-aep/NchAep";
import {iCalculatedDataVchn, iMeasureResVchnField} from "../settlement-block/vchn/Vchn";
import {iPreparatoryDataVchn} from "../settlement-block/vchn/table/VchnPreparatoryData";
import {iFreqDangSignalsVchn} from "../settlement-block/vchn/table/VchnFreqDangSignals";
import {iCalculatedDataAvak, iMeasureResAvakField} from "../settlement-block/avak/Avak";
import {Button, ButtonGroup, Grid} from "@mui/material";
import "./static/index.css"
import {useLocation} from "react-router-dom";
import Akt1 from "./components/Akt1";
import Data from "./components/Data";
import Akt2 from "./components/Akt2";

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


    const [document, setDocument] = useState<JSX.Element>();

    const switchComponent = (numberPage: number) => {
        switch (numberPage) {
            // case 1:
            //     setDocument(<Akt1/>)
            //     break
            case 2:
                setDocument(<Akt2/>)
                break
            case 3:
                setDocument(<Data
                    measureResVchAepRef={propsRout.measureResVchAepRef}
                    calculatedDataVchAepRef={propsRout.calculatedDataVchAepRef}
                    preparatoryDataVchAepRef={propsRout.preparatoryDataVchAepRef}
                    freqDangSignalsVchAepRef={propsRout.freqDangSignalsVchAepRef}
                    measureResNchAepRef={propsRout.measureResNchAepRef}
                    calculatedDataNchAepRef={propsRout.calculatedDataNchAepRef}
                    measureResVchnRef={propsRout.measureResVchnRef}
                    calculatedDataVchnRef={propsRout.calculatedDataVchnRef}
                    preparatoryDataVchnRef={propsRout.preparatoryDataVchnRef}
                    freqDangSignalsVchnRef={propsRout.freqDangSignalsVchnRef}
                    measureResAvakRef={propsRout.measureResAvakRef}
                    calculatedDataAvakRef={propsRout.calculatedDataAvakRef}
                />)
                break
        }
    }

    return (
        <React.Fragment>
            <Grid container justifyContent={'center'}>
                <Grid item>
                    <ButtonGroup variant="outlined" aria-label="Выбор документа" id={'switch-button'}>
                        {/*<Button onClick={() => switchComponent(1)}>Акт 1</Button>*/}
                        <Button onClick={() => switchComponent(2)}>Акт</Button>
                        <Button onClick={() => switchComponent(3)}>Расчитанные данные</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>

            <Grid container justifyContent="center" alignItems="center">
                <Grid item width={'210mm'} height={'297mm'} margin={'10mm 10mm 10mm 20mm'}>
                    {document}
                </Grid>
            </Grid>
        </React.Fragment>
    )
        ;
};

export default FormationAccountingDocTemplate;