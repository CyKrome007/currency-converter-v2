export const Footer = ({
    text = "Made by CyKrome",
    className="",

}) => {
    return (
        <>
            <div
                className={`${className}`}
            >
                {text}
            </div>
        </>
    )
}
