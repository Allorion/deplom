import React, {FC} from "react";
import {Grid, Stack, TextField, Typography} from "@mui/material";
import "../static/index.css"
import TableDocument from "./TableDocument";
import PropertyList from "./PropertyList";

const Akt2: FC = () => {

    return (
        <React.Fragment>
            <div id={'page'} style={{width: '97%'}}>
                <Grid container justifyContent={'center'}>
                    <Grid item textAlign={'center'} alignItems={'center'}>
                        <Stack direction={'column'} textAlign={'center'}>
                            <Typography variant={'h6'}><b>ЗАКЛЮЧЕНИЕ</b></Typography>
                            <Stack direction={'row'}>
                                <Typography variant={'body1'}>по результатам аттестационных испытаний на соответствие
                                    требованиям безопасности информации защищаемого (выделенного) помещения
                                    <TextField
                                        variant={'standard'}
                                        sx={{width: 200, paddingLeft: 1}}
                                        size={'small'}
                                        className={'input-center'}
                                    />
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container pb={'20mm'}>
                    <Grid item>
                        <Stack direction={'column'} spacing={2} pt={2}>
                            <Typography variant={'h6'} textAlign={'justify'}><b>Список сокращений</b></Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                ВТСС - технические средства и системы, не предназначенные для передачи, обработки и
                                хранения информации ограниченного доступа, на которые могут воздействовать
                                электрические, магнитные и акустические поля опасного сигнала
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                ОТСС - основные технические средства и системы, обрабатывающие информацию ограниченного
                                доступа
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                ПЭМИН - побочные электромагнитные излучения и наводки
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                НЧ АЭП – низкочастотные акустоэлектрические преобразования
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                ВЧ АЭП – высокочастотные акустоэлектрические преобразования
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                ТСПИ - технические средства, предназначенные для передачи, обработки и хранения
                                информации ограниченного доступа
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                СТР - «Специальные требования и рекомендации по защите информации, составляющей
                                государственную тайну, от утечки по техническим каналам», (решение Гостехкомиссии
                                России от 23.05.97 № 55)
                            </Typography>
                            <Typography variant={'h6'}><b>1. Объект испытаний</b></Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                1.1. Объектом аттестационных испытаний является выделенное помещение
                            </Typography>
                            <TextField variant={'standard'} fullWidth sx={{paddingLeft: 1}} size={'small'}
                                       className={'input-center'}/>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                1.2. Расположение объекта:
                            </Typography>
                            <TextField variant={'standard'} fullWidth sx={{paddingLeft: 1}} size={'small'}
                                       className={'input-center'}/>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                1.3. Состав технических средств и мебели, расположенных в ЗП (ВП):
                            </Typography>
                        </Stack>
                        <PropertyList/>
                        <Stack direction={'column'} spacing={2} pt={2}>
                            <Typography variant={'h6'}><b>2. Условия и порядок проведения аттестационных
                                испытаний</b></Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                2.1. Испытания проводились в соответствии с «Программой и методикой проведения
                                аттестационных испытаний выделенного помещения».
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                2.2. Испытания проведены в период с
                                <TextField
                                    variant={'standard'}
                                    sx={{width: 20, paddingLeft: 1}}
                                    size={'small'}
                                    className={'input-center'}
                                />
                                по
                                <TextField
                                    variant={'standard'}
                                    sx={{width: 20, paddingLeft: 1}}
                                    size={'small'}
                                    className={'input-center'}
                                />
                                <TextField
                                    variant={'standard'}
                                    sx={{width: 100, paddingLeft: 1}}
                                    size={'small'}
                                    className={'input-center'}
                                />
                                20
                                <TextField
                                    variant={'standard'}
                                    sx={{width: 20, paddingLeft: 1}}
                                    size={'small'}
                                    className={'input-center'}
                                />
                                г.
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                2.3. При проведении испытаний применялись следующие методы проверок и испытаний:
                            </Typography>
                            <ul>
                                <li>экспертно-документальный метод;</li>
                                <li>измерение и оценка уровней низкочастотных акустоэлектрических преобразований
                                    (НЧ АЭП) для отдельных технических средств
                                </li>
                                <li>измерение и оценка уровней высокочастотных акустоэлектрических преобразований
                                    (ВЧ АЭП) для отдельных технических средств
                                </li>
                                <li>измерение и оценка уровней акустических каналов утечки речевой информации</li>
                                <li>измерение и оценка уровней виброакустических каналов утечки речевой информации</li>
                                <li>измерение и оценка уровней побочных электромагнитных излучений и наводок
                                    (ПЭМИН) для отдельных технических средств и каналов утечки информации
                                </li>
                            </ul>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                2.4. Испытания проводились в соответствии с требованиями руководящих и методических
                                документов:
                            </Typography>
                            <ul>
                                <li>«Положения о государственной системе защиты информации в Российской Федерации от
                                    иностранной технической разведки и от ее утечки по техническим каналам»,
                                    (Постановление Совета Министров Правительства Российской Федерации от 15.09.93 г.
                                    №912-51);
                                </li>
                                <li>«Специальных требований и рекомендаций по защите информации, составляющей
                                    государственную тайну, от утечки по техническим каналам», (решение Гостехкомиссии
                                    России от 23.05.97 г. № 55 (СТР - 97));
                                </li>
                                <li>«Положения об аттестации объектов информатизации по требованиям безопасности
                                    информации». (Гостехкомиссия России, 1994 г.);
                                </li>
                                <li>ГОСТ Р 51275-99 «Объекты информатизации. Факторы, воздействующие на информацию»;
                                </li>
                                <li>«Инструкции № 0126-87»</li>
                            </ul>
                        </Stack>
                        <Stack direction={'column'} spacing={2} pt={2}>
                            <Typography variant={'h6'}><b>3. Результаты аттестационных испытаний</b></Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                3.1. Результаты проверки состояния технологического процесса обработки информации
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                Установленный внутренними организационно-распорядительными документами технологический
                                процесс обработки секретной информации на объекте
                                <TextField
                                    variant={'standard'}
                                    sx={{width: 300, paddingLeft: 1}}
                                    size={'small'}
                                    className={'input-center'}
                                />
                                , в целом соответствует реальной практике, требованиям «СТР-97» и «Инструкции
                                № 0126-87». К обработке секретной
                                информации на объекте ВТ допущены пользователи, имеющие оформленное разрешение на допуск
                                к секретной информации.
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                3.2. Результаты проверки выполнения организационно-технических требований по защите
                                информации
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                3.2.1. Результаты оценки достаточности представленных документов по вопросам организации
                                работ с информацией ограниченного доступа, соответствие их содержания требованиям по
                                безопасности информации.
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                При проведении испытаний аттестационной комиссией были проверены следующие документы и
                                исходные данные:
                            </Typography>
                            <TableDocument/>
                            <ul>
                                <li>
                                    Перечень подготовленных документов является достаточным для проведения
                                    аттестационных испытаний объекта информатизации.
                                </li>
                                <li>
                                    Содержание представленных документов и их оформление в целом соответствует
                                    установленным требованиям.
                                </li>
                            </ul>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                <b>Вывод:</b>
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                <i>Реальное размещение, монтаж всех ОТСС и ВТСС соответствуют техническому паспорту на
                                    объект и приведенным схемам размещения. </i>
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                3.2.3. Результаты проверки правильности категорирования объекта информатизации.
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                ЗП (ВП) присвоена
                                <TextField
                                    variant={'standard'}
                                    sx={{width: 50, paddingLeft: 1}}
                                    size={'small'}
                                    className={'input-center'}
                                />
                                категория, высший гриф обрабатываемой информации -
                                <TextField
                                    variant={'standard'}
                                    sx={{width: 100, paddingLeft: 1}}
                                    size={'small'}
                                    className={'input-center'}
                                />
                                . В результате анализа представленных документов, в том числе: перечня сведений,
                                подлежащих засекречиванию и журнала учета выпускаемых документов, подтверждается
                                правильность планируемой категории объекта.
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                <b>Вывод:</b>
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                <i>Категория ЗП (ВП) соответствуют требованиям СТР.</i>
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                3.2.4. Результаты оценки уровня подготовки кадров и распределения ответственности за
                                выполнение требований по защите информации
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                Ответственность за организацию работ на ЗП (ВП), эксплуатацию СВТ и СЗИ, а также за
                                выполнением требований по защите информации определена внутренними организационно -
                                распорядительными документами.
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                Специалисты
                                <TextField
                                    variant={'standard'}
                                    sx={{width: 200, paddingLeft: 1}}
                                    size={'small'}
                                    className={'input-center'}
                                />
                                в вопросах защиты информации, составляющей государственную тайну, и требованиях,
                                предъявляемых к эксплуатации средств защиты секретной информации, подготовлены в
                                достаточной степени.
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                <b>Вывод:</b>
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                <i>1. Ответственность по вопросам защиты секретной информации между сотрудниками
                                    <TextField
                                        variant={'standard'}
                                        sx={{width: 50, paddingLeft: 1}}
                                        size={'small'}
                                        className={'input-center'}
                                    />
                                    распределена.</i>
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                <i>2. Уровень квалификации сотрудников
                                    <TextField
                                        variant={'standard'}
                                        sx={{width: 50, paddingLeft: 1}}
                                        size={'small'}
                                        className={'input-center'}
                                    />
                                    (с учетом должностных обязанностей) достаточен.</i>
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                3.2.5. Результаты экспертизы протоколов по специальным исследованиям СВТ и объекта
                                информатизации, предписания на эксплуатацию
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                Для проведения аттестационных испытаний были представлены следующие документы:
                            </Typography>
                            <ul>
                                <li>
                                    По результатам проведения стендовых специсследований:
                                    <li style={{marginTop: 10}}>
                                        Предписание на эксплуатацию
                                        <TextField
                                            variant={'standard'}
                                            sx={{width: 500, paddingLeft: 1}}
                                            size={'small'}
                                            className={'input-center'}
                                        />
                                    </li>
                                    <li>
                                        По результатам проведения объектовых специсследований:
                                        <li style={{marginTop: 10}}>
                                            Предписание на
                                            <TextField
                                                variant={'standard'}
                                                sx={{width: 600, paddingLeft: 1}}
                                                size={'small'}
                                                className={'input-center'}
                                            />
                                        </li>
                                    </li>
                                </li>
                            </ul>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                Протоколы специальных исследований ОТСС и ВТСС и объекта информатизации содержат
                                результаты измерений уровней НЧ АЭП от всех технических средств объекта информатизации
                                <TextField
                                    variant={'standard'}
                                    sx={{width: 760, paddingLeft: 1}}
                                    size={'small'}
                                    className={'input-center'}
                                />
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                Протоколы специальных исследований СВТ и объекта информатизации содержат результаты
                                измерений уровней ПЭМИН от всех технических средств объекта информатизации
                                <TextField
                                    variant={'standard'}
                                    sx={{width: 760, paddingLeft: 1}}
                                    size={'small'}
                                    className={'input-center'}
                                />
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                Протоколы специальных исследований ОТСС и ВТСС и объекта информатизации содержат
                                результаты измерений уровней ВЧ АЭП от всех технических средств объекта информатизации
                                <TextField
                                    variant={'standard'}
                                    sx={{width: 760, paddingLeft: 1}}
                                    size={'small'}
                                    className={'input-center'}
                                />
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                При этом использовались контрольно-измерительная аппаратура и тест - программы в
                                соответствии с рекомендациями методических документов.
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                В предписаниях на эксплуатацию СВТ и объекта ВТ нашли отражения все требования и
                                ограничения, необходимые при эксплуатации объектов по результатам проведенных
                                специальных проверок и специальных исследований.
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                <b>Вывод:</b>
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                <i>Рассмотренные документы выполнены в соответствии с действующими нормами и
                                    требованиями РД Гостехкомиссии России.</i>
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                3.2.6. Результаты проверки выполнения требований к помещениям, в которых производится
                                обработка информации средствами объекта информатизации.
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                Комната №
                                <TextField
                                    variant={'standard'}
                                    sx={{width: 100, paddingLeft: 1}}
                                    size={'small'}
                                    className={'input-center'}
                                />
                                является режимным помещением в соответствии с его назначением и требованиями «Инструкции
                                № 0126-87». Доступ в помещение имеют только сотрудники
                                <TextField
                                    variant={'standard'}
                                    sx={{width: 300, paddingLeft: 1}}
                                    size={'small'}
                                    className={'input-center'}
                                />
                                , лично вскрывающие и сдающие помещение под охрану. Помещение опечатывается личной
                                печатью ответственного за объект ВТ. Контроль за доступом в помещение посторонних лиц
                                организован в соответствии с «Инструкцией № 0126-87 г.».
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                <b>Вывод:</b>
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                <i>Оборудование ВП в целом соответствует требованиям руководящих документов по
                                    обеспечению режима секретности проводимых в нем работ.</i>
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                3.3. Результаты испытаний объекта информатизации на соответствие требованиям по защите
                                информации от утечки информации по каналам ПЭМИН.
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                3.3.1. Результаты проверки соответствия фактических размеров контролируемой зоны
                                представленным документам.
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                Фактический размер контролируемой зоны составляет не более 15 метров, соответствует
                                приведенному в техническом паспорте и не обеспечивает необходимые требования (R2 =
                                <TextField
                                    variant={'standard'}
                                    sx={{width: 80, paddingLeft: 1}}
                                    size={'small'}
                                    className={'input-center'}
                                />
                                метра) предписания на эксплуатацию ПЭВМ объекта ВТ.
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                Уровни побочных излучений от ОТСС объекта ВТ на границе контролируемой зоны и за ее
                                пределами превышают допустимые значения, установленные «Нормами защиты информации,
                                обрабатываемой средствами вычислительной техники и в автоматизированных системах, от
                                утечки за счет побочных электромагнитных излучений и наводок (ПЭМИН)» для объектов
                                второй категории (см. Протокол специсследований объекта ВТ).
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                С целью предотвращения утечки информации за счет побочных электромагнитных излучений от
                                СВТ, входящих в состав объекта ВТ, в комнате №
                                <TextField
                                    variant={'standard'}
                                    sx={{width: 80, paddingLeft: 1}}
                                    size={'small'}
                                    className={'input-center'}
                                />
                                установлен генератор шума
                                <TextField
                                    variant={'standard'}
                                    sx={{width: 300, paddingLeft: 1}}
                                    size={'small'}
                                    className={'input-center'}
                                />
                                , обеспечивающие требуемое соотношение уровней информативного сигнала ПЭМИ для каждого
                                СВТ и помех на границе реальной КЗ в
                                <TextField
                                    variant={'standard'}
                                    sx={{width: 80, paddingLeft: 1}}
                                    size={'small'}
                                    className={'input-center'}
                                />
                                метров.</Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                3.3.2. Результаты проверки выполнения требований по защите информации от утечки за счет
                                наводок на вспомогательные средства и системы. </Typography>
                            <ul>
                                <li>
                                    Требования «Предписания на эксплуатацию
                                    <TextField
                                        variant={'standard'}
                                        sx={{width: 100, paddingLeft: 1}}
                                        size={'small'}
                                        className={'input-center'}
                                    />
                                    » по обеспечению минимального расстояния от ОТСС до незащищенных телефонных
                                    аппаратов и других вспомогательных технических средств, линии которых имеют выход за
                                    пределы контролируемой зоны, выполняются;
                                </li>
                                <li>
                                    Требования «Предписания на эксплуатацию СВТ
                                    <TextField
                                        variant={'standard'}
                                        sx={{width: 100, paddingLeft: 1}}
                                        size={'small'}
                                        className={'input-center'}
                                    />
                                    » по обеспечению минимального расстояния от ОТСС до посторонних проводников и
                                    кабелей, имеющих выход за пределы контролируемой зоны, выполняются.
                                </li>
                            </ul>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                3.3.3. Результаты проверки выполнения требований по защите информации от утечки по цепям
                                заземления и электропитания
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                Электропитание объекта ВТ осуществляется через сетевой помехоподавляющий фильтр
                                «ФСП-1Ф-7А» (зав. №
                                <TextField
                                    variant={'standard'}
                                    sx={{width: 80, paddingLeft: 1}}
                                    size={'small'}
                                    className={'input-center'}
                                />
                                ), установленный в комнате №
                                <TextField
                                    variant={'standard'}
                                    sx={{width: 80, paddingLeft: 1}}
                                    size={'small'}
                                    className={'input-center'}
                                />
                                (Сертификат Гостехкомиссии России № 148/1 от 16.05.01 г.).
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                <b>Вывод:</b>
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                <i>Аттестационные испытания объекта ВТ в части требований по защите информации от утечки
                                    по каналам ПЭМИН показали его соответствие требованиям, предъявляемым к объектам
                                    второй категории.</i>
                            </Typography>
                            <Typography variant={'h6'}><b>4. Замечания и рекомендации по результатам аттестационных испытаний</b></Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                4.1. Замечания по организации и реализации требований по защите информации на объекте информатизации
                                <TextField
                                    variant={'standard'}
                                    sx={{width: 200, paddingLeft: 1}}
                                    size={'small'}
                                    className={'input-center'}
                                />
                                в ходе испытаний устранены.
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                4.2. В связи с отсутствием в
                                <TextField
                                    variant={'standard'}
                                    sx={{width: 200, paddingLeft: 1}}
                                    size={'small'}
                                    className={'input-center'}
                                />
                                нормативно-методической и технической оснащенности для проведения инструментального контроля защищенности объекта информатизации, рекомендуется заключить договор на проведение периодического инструментального контроля с предприятием, имеющим лицензию Гостехкомиссии РФ на проведения подобного рода работ.
                            </Typography>
                            <Typography variant={'h6'}><b>5. Заключение по результатам аттестационных испытаний</b></Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                Требования нормативных документов по безопасности информации на объекте
                                <TextField
                                    variant={'standard'}
                                    sx={{width: 200, paddingLeft: 1}}
                                    size={'small'}
                                    className={'input-center'}
                                />
                                - выполнены, требования установленных норм и рекомендаций по защите информации при эксплуатации объекта ВТ выполняются, что является основанием для выдачи установленным порядком «Аттестата соответствия».
                            </Typography>
                            <Typography variant={'body1'} textAlign={'justify'}>
                                Аттестационная комиссия:
                                <TextField
                                    variant={'standard'}
                                    sx={{width: 550, paddingLeft: 1}}
                                    size={'small'}
                                    className={'input-center'}
                                />
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
};

export default Akt2;