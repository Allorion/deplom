import React, {FC} from "react";
import {
    Grid,
    Paper,
    Box,
    ButtonGroup,
    Button,
} from "@mui/material";
import VchAep, {iVcaep} from "./vch-aep/VchAep";
import Avak from "./avak/Avak";
import NchAep from "./nch-aep/NchAep";
import Vchn from "./vchn/Vchn";

interface iProps {
    vcaepFiedl: {
        current: iVcaep
    }
    aepFiedl: {
        current: iAep
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
                                    <VchAep vcaepFiedl={props.vcaepFiedl}/>
                                </Box>
                            </Paper>
                            <Paper elevation={4} sx={{mt: 2}}>
                                <Box p={2}>
                                    <NchAep vcaepFiedl={props.vcaepFiedl}/>
                                </Box>
                            </Paper>
                            <Paper elevation={4} sx={{mt: 2}}>
                                <Box p={2}>
                                    <Vchn vcaepFiedl={props.vcaepFiedl}/>
                                </Box>
                            </Paper>
                            <Paper elevation={4} sx={{mt: 2}}>
                                <Box p={2}>
                                    <Avak/>
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