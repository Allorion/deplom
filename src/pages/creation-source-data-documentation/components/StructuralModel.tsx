import React, {FC} from "react";
import TableOtss, {iOtss} from "./structural-model/TableOtss";
import TableVtss, {iVtss} from "./structural-model/TableVtss";
import TablePo, {iPo} from "./structural-model/TablePo";
import TableSzi, {iSzi} from "./structural-model/TableSzi";

interface iProps {
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


const StructuralModel: FC<iProps> = (props) => {

    return(
        <React.Fragment>
            <TableOtss
                otssField={props.otssField}
            />
            <TableVtss
                vtssField={props.vtssField}
            />
            <TablePo
                poField={props.poField}
            />
            <TableSzi
                sziField={props.sziField}
            />
        </React.Fragment>
    );
};

export default StructuralModel;