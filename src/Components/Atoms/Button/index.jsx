const Button = ({
    onClick = () => { },
    children,
    ...args
}) => {
    return (
        <button
            onClick={onClick}
            style={{
                borderRadius: '15px',
                border: '3px solid black',
                width: '225px',
                height: '50px',
                marginTop: '10px',
                backgroundColor: 'rgb(106, 188, 255)',
                fontSize: '20px',
                color: 'white',
                cursor: 'pointer',
                marginLeft: '10px'
            }}
            {...args}
        >
            {children}
        </button >
    )
}

export default Button;