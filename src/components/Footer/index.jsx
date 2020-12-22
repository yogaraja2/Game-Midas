import React from 'react'

export function Copyright() {
    const currentYear = new Date().getFullYear()
    return (
        <div className="footer-copyright">
            Copyright @{currentYear} | All Rights Reserved.
        </div>
    )
}
