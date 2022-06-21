import React, {FC} from "react";
import {Grid, Stack, TextField, Typography} from "@mui/material";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";


const Akt1: FC = () => {

    return (
        <React.Fragment>
            <div className={'page'}>
                <Grid container justifyContent={'flex-end'}>
                    <Grid item>
                        <Stack direction={'column'} textAlign={'center'}>
                            <Typography variant={'h6'}>УТВЕРЖДАЮ</Typography>
                            <TextField variant={'standard'} sx={{width: 500}} size={'small'}
                                       className={'input-center'}/>
                            <Typography variant={'caption'} pt={1}><i>(руководитель (уполномоченное лицо) владельца
                                объекта информатизации)</i></Typography>
                            <hr style={{width: 300, color: "black", marginTop: 30}}/>
                            <Typography variant={'caption'}><i>(подпись, инициалы и фамилия)</i></Typography>
                            <Stack spacing={1} direction={'row'} justifyContent={'center'} mt={1}>
                                «<TextField variant={'standard'} sx={{width: 30}} size={'small'}
                                            className={'input-center'}/>»
                                <TextField variant={'standard'} sx={{width: 150}} size={'small'}
                                           className={'input-center'}/>
                                <TextField variant={'standard'} sx={{width: 50}} size={'small'}
                                           className={'input-center'}/>
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
                            <TextField variant={'standard'} sx={{width: 800}} size={'small'}
                                       className={'input-center'}/>
                            <Typography variant={'caption'}><i>(наименование защищаемого помещения)</i></Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </div>

            <div className={'page'}>
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
                            <TextField variant={'standard'} sx={{width: 415}} size={'small'}
                                       className={'input-center'}/>
                            <Typography variant={'caption'} textAlign={'center'}><i>(указываются адрес, строение, этаж,
                                номер)</i></Typography>
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
                </Stack>

                <div className={'page'} style={{marginTop: '400px'}}>
                    <Table1/>
                </div>

                <div className={'page'}>
                    <Typography variant={'body1'} textAlign={'justify'}>
                        3.2. Состав вспомогательных технических средств и систем, установленных в
                        защищаемом помещении, представлен в таблице 2.
                    </Typography>
                    <Table2/>
                </div>

                <div className={'page'}>
                    <Typography variant={'body1'} textAlign={'justify'}>
                        3.3. Состав средств защиты информации, используемых в защищаемом помещении, представлен в
                        таблице 3.
                    </Typography>
                    <Table3/>
                </div>

            </div>
        </React.Fragment>
    )
};

export default Akt1;