import React, { useState, useEffect } from 'react'

const SingleColor = ({ weight, hexColor, index }) => {
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }
            , 1000)

        return () => {
            clearTimeout(timeout)  //cleanup function
        }
    }, [alert])

    return (
        <>
            {/*Note this background color can be given hex value too*/}
            <article className={`color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `#${hexColor}` }}
                onClick={() => {
                    setAlert(true)
                    navigator.clipboard.writeText(`#${hexColor}`)  //Note to copy text to the clipboard we use navigator.clipboard.writetext()
                }}
            >
                <p className="percent-value">{weight}%</p>
                <p className="color-value">#{hexColor}</p>
                {alert && <p className='alert'>
                    Copied to Clipboard
                </p>}
            </article>
        </>
    );
}

export default SingleColor
