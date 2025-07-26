import React, { useState, useEffect } from 'react'

const SingleColor = ({ weight, hex, index }) => {
    const [alert, setAlert] = useState(false);
    const hexValue = `#${hex}`

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
            <article className={`color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `${hexValue}` }}
                onClick={() => {
                    setAlert(true)
                    navigator.clipboard.writeText(`${hexValue}`)  //Note to copy text to the clipboard we use navigator.clipboard.writetext()
                }}
            >
                <p className="percent-value">{weight}%</p>
                <p className="color-value">{hexValue}</p>
                {alert && <p className='alert'>
                    Copied to Clipboard
                </p>}
            </article>
        </>
    );
}

export default SingleColor
