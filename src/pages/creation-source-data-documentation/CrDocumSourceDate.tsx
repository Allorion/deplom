import React, {FC, useState} from "react";
import {Box, Button, ButtonGroup, Grid, Paper, Typography} from "@mui/material";
import StructuralModel from "./components/StructuralModel";
import SpatialModel from "./components/SpatialModel";
import {iOtss} from "./components/structural-model/TableOtss";
import {iVtss} from "./components/structural-model/TableVtss";
import {iPo} from "./components/structural-model/TablePo";
import {iSzi} from "./components/structural-model/TableSzi";


interface iProps {
    layoutRoomImage: {
        current: {image: string}
    }
    otssImage: {
        current: {image: string}
    }
    vtssImage: {
        current: {image: string}
    }
    communLinesImage: {
        current: {image: string}
    }
    enginTechCommunImage: {
        current: {image: string}
    }
    sziImage: {
        current: {image: string}
    }
    otssField: {
        current: iOtss[]
    }
    vtssField: {
        current: iVtss[]
    }
    poField: {
        current: iPo[]
    }
    sziField: {
        current: iSzi[]
    }
}

const CrDocumSourceDate: FC<iProps> = (props) => {

    const [model, setModel] = useState<JSX.Element>();

    const switchModel = (numberModel: number) => {

        switch (numberModel) {
            case 0:
                setModel(<StructuralModel
                    otssField={props.otssField}
                    vtssField={props.vtssField}
                    poField={props.poField}
                    sziField={props.sziField}
                />
                )
                break
            case 1:
                setModel(<SpatialModel
                    layoutRoomImage={props.layoutRoomImage}
                    otssImage={props.otssImage}
                    vtssImage={props.vtssImage}
                    communLinesImage={props.communLinesImage}
                    enginTechCommunImage={props.enginTechCommunImage}
                    sziImage={props.sziImage}
                />)
                break
        }

    }


    return (
        <React.Fragment>
            <Grid container mt={4}>
                <Grid item sm={12} md={12} lg={12} xl={12}>
                    <Paper elevation={4}>
                        <Typography
                            variant={'h5'}
                            textAlign={'center'}
                            p={2}
                        >
                            Блок формирование документации исходных данных
                        </Typography>
                        <Grid container justifyContent={'center'} alignItems="center">
                            <Grid item>
                                <ButtonGroup variant={'outlined'}
                                             aria-label="Выбор структурной модели или пространственной">
                                    <Button
                                        onClick={() => switchModel(0)}
                                    >
                                        Структурная модель
                                    </Button>
                                    <Button
                                        onClick={() => switchModel(1)}
                                    >
                                        Пространственная модель
                                    </Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                        <Box p={2}>
                            {model}
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default CrDocumSourceDate;