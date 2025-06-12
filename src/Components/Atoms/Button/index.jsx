import { Buttonstyle } from "./styled";

const Button = ({
    onClick = () => { },
    children,
    ...args
}) => {
    return (
        <Buttonstyle
            onClick={onClick}

            {...args}
        >
            {children}
        </Buttonstyle>
    )
}

export default Button;