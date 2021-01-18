import React from 'react'
import clsx from 'clsx'
import { Dialog } from '@material-ui/core'
import './style.scss'

function Popup({
  popupClass,
  className,
  onClose,
  title,
  children,
  open,
  withPadding
}) {
  return (
    <Dialog
      className={clsx('popup-dialog-container', popupClass)}
      open={open || true}
      onClose={onClose}
    >
      <div
        className={clsx(
          'dlg-content-wrap',
          className,
          withPadding && 'with-padding'
        )}
      >
        {!!title && (
          <div className="head-wrap">
            <h1 className="dlg-head">{title}</h1>
          </div>
        )}

        <div className="body-wrap">{children}</div>
      </div>
    </Dialog>
  )
}

export default Popup
