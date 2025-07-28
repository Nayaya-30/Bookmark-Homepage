const Button = ({ text, type, className, click }) => {
    return (
        <button type={type} className={className} onClick={click}>
            {text}
        </button>
    )
}
export default Button;