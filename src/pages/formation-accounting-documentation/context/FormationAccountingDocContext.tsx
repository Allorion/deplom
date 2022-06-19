import React, {createContext, FC} from "react";


interface iProps {
    props: {}
    children: React.ReactNode
}



const FormationAccountingDocContextPr: FC<iProps> = (props) => {

    const Context = createContext(props.props)

    return (
        <Context.Provider value={props.props}>
            {props.children}
        </Context.Provider>
    )
}

export default FormationAccountingDocContextPr;