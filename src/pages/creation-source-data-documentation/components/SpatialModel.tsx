import React, {ChangeEvent, FC, useEffect, useState} from "react";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {Box, Button, Grid, Paper, styled} from "@mui/material";

const Input = styled('input')({
    display: 'none',
});

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

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
}

const SpatialModel: FC<iProps> = (props) => {

    const [saveLayoutRoomImage, setSaveLayoutRoomImage] = useState<{image: string}>({image: props.layoutRoomImage.current.image})
    const [saveOtssImage, setSaveOtssImage] = useState<{image: string}>({image: props.otssImage.current.image})
    const [saveVtssImage, setSaveVtssImage] = useState<{image: string}>({image: props.vtssImage.current.image})
    const [saveCommunLinesImage, setSaveCommunLinesImage] = useState<{image: string}>({image: props.communLinesImage.current.image})
    const [saveEnginTechCommunImage, setSaveEnginTechCommunImage] = useState<{image: string}>({image: props.enginTechCommunImage.current.image})
    const [saveSziImage, setSaveSziImage] = useState<{image: string}>({image: props.sziImage.current.image})

    useEffect(() => {
        props.layoutRoomImage.current.image = saveLayoutRoomImage.image
        props.otssImage.current.image = saveOtssImage.image
        props.vtssImage.current.image = saveVtssImage.image
        props.communLinesImage.current.image = saveCommunLinesImage.image
        props.enginTechCommunImage.current.image = saveEnginTechCommunImage.image
        props.sziImage.current.image = saveSziImage.image
    }, [saveCommunLinesImage.image, saveEnginTechCommunImage.image,
        saveLayoutRoomImage.image, saveOtssImage.image, saveSziImage.image, saveVtssImage.image])

    return(
        <React.Fragment>
            <Grid container>
                <Grid item sm={12} md={12} lg={12} xl={12}>
                    <Paper elevation={4}>
                        <Box p={2}>
                            <label htmlFor="layout-room-image">
                                <Input accept="image/*" id="layout-room-image" type="file"
                                       onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                           if (e.target.files && e.target.files[0]) {
                                               let img = e.target.files[0];
                                               setSaveLayoutRoomImage({image: URL.createObjectURL(img)})
                                           }
                                       }}
                                />
                                <Button component={'span'} variant={'contained'} color={'primary'} endIcon={<PhotoCamera/>}>
                                    Добавить схему помещения
                                </Button>
                            </label>
                            <Img sx={{marginTop: 2}} src={saveLayoutRoomImage.image}/>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item sm={12} md={12} lg={12} xl={12} mt={2}>
                    <Paper elevation={4}>
                        <Box p={2}>
                            <label htmlFor="otss-image">
                                <Input accept="image/*" id="otss-image" type="file"
                                       onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                           if (e.target.files && e.target.files[0]) {
                                               let img = e.target.files[0];
                                               setSaveOtssImage({image: URL.createObjectURL(img)})
                                           }
                                       }}
                                />
                                <Button component={'span'} variant={'contained'} color={'primary'} endIcon={<PhotoCamera/>}>
                                    Добавить схему ОТСС
                                </Button>
                            </label>
                            <Img sx={{marginTop: 2}} src={saveOtssImage.image}/>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item sm={12} md={12} lg={12} xl={12} mt={2}>
                    <Paper elevation={4}>
                        <Box p={2}>
                            <label htmlFor="vtss-image">
                                <Input accept="image/*" id="vtss-image" type="file"
                                       onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                           if (e.target.files && e.target.files[0]) {
                                               let img = e.target.files[0];
                                               setSaveVtssImage({image: URL.createObjectURL(img)})
                                           }
                                       }}
                                />
                                <Button component={'span'} variant={'contained'} color={'primary'} endIcon={<PhotoCamera/>}>
                                    Добавить схему ВТСС
                                </Button>
                            </label>
                            <Img sx={{marginTop: 2}} src={saveVtssImage.image}/>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item sm={12} md={12} lg={12} xl={12} mt={2}>
                    <Paper elevation={4}>
                        <Box p={2}>
                            <label htmlFor="commun-lines-image">
                                <Input accept="image/*" id="commun-lines-image" type="file"
                                       onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                           if (e.target.files && e.target.files[0]) {
                                               let img = e.target.files[0];
                                               setSaveCommunLinesImage({image: URL.createObjectURL(img)})
                                           }
                                       }}
                                />
                                <Button component={'span'} variant={'contained'} color={'primary'} endIcon={<PhotoCamera/>}>
                                    Добавить схему линиий коммуникаций
                                </Button>
                            </label>
                            <Img sx={{marginTop: 2}} src={saveCommunLinesImage.image}/>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item sm={12} md={12} lg={12} xl={12} mt={2}>
                    <Paper elevation={4}>
                        <Box p={2}>
                            <label htmlFor="engin-tech-commun-image">
                                <Input accept="image/*" id="engin-tech-commun-image" type="file"
                                       onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                           if (e.target.files && e.target.files[0]) {
                                               let img = e.target.files[0];
                                               setSaveEnginTechCommunImage({image: URL.createObjectURL(img)})
                                           }
                                       }}
                                />
                                <Button component={'span'} variant={'contained'} color={'primary'} endIcon={<PhotoCamera/>}>
                                    Добавить схему инженерно-технической коммуникаций
                                </Button>
                            </label>
                            <Img sx={{marginTop: 2}} src={saveEnginTechCommunImage.image}/>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item sm={12} md={12} lg={12} xl={12} mt={2}>
                    <Paper elevation={4}>
                        <Box p={2}>
                            <label htmlFor="szi-image">
                                <Input accept="image/*" id="szi-image" type="file"
                                       onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                           if (e.target.files && e.target.files[0]) {
                                               let img = e.target.files[0];
                                               setSaveSziImage({image: URL.createObjectURL(img)})
                                           }
                                       }}
                                />
                                <Button component={'span'} variant={'contained'} color={'primary'} endIcon={<PhotoCamera/>}>
                                    Добавить схему СЗИ
                                </Button>
                            </label>
                            <Img sx={{marginTop: 2}} src={saveSziImage.image}/>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default SpatialModel;