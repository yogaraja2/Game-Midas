import React, { useState } from 'react'
import { Button, Grid } from '@material-ui/core'
import clsx from 'clsx'
import './useStyle.scss'
import doller from '../../../assets/img/doller 2.svg'
import lock from '../../../assets/img/lock.svg'

const AvatarOptions = ({ label, imgUrl, id, selected, setSelected }) => {
    return (
        <div
            className={clsx('option-wrap', selected === id && 'selected')}
            onClick={setSelected.bind(this, id)}
        >
            <div className="option-image">
                <div className="selector-bg">
                    <div className="image-warp">
                        <img
                            src={require(`../../../assets/img/${imgUrl}.svg`).default}
                            alt={label}
                        />
                    </div>
                </div>
            </div>
            {/* <div className="option-label">{label}</div> */}
        </div>
    )
}

function SelectAvatar() {
    const [selected, setSelected] = useState(null)

    const allyProps = { selected, setSelected }
    return (
        <Grid item xs={11} md={10} className="select-avatar-card">
            <div className="header-sec">
                <h3 className="main-head">Select Your Avatar</h3>
            </div>
            <Grid
                container
                justify="space-around"
                alignContent="center"
                className="options-selector"
            >
                <AvatarOptions
                    label="Admin"
                    imgUrl={`Avatar1`}
                    id={'Avartar1'}
                    {...allyProps}
                />
                <AvatarOptions
                    label="Admin"
                    imgUrl={`Avatar2`}
                    id={'Avartar2'}
                    {...allyProps}
                />
                <AvatarOptions
                    label="Admin"
                    imgUrl={'Avatar3'}
                    id={'Avartar3'}
                    {...allyProps}
                />
                <AvatarOptions
                    label="Admin"
                    imgUrl={`Avatar4`}
                    id={'Avartar4'}
                    {...allyProps}
                />
                <AvatarOptions
                    label="Admin"
                    imgUrl={'Avatar5'}
                    id={'Avartar5'}
                    {...allyProps}
                />
            </Grid>
            <div className="income-wrap">
                <h3 className="main-head">Income</h3>
                <input type="text" className="income-input" placeholder="$120000" />
            </div>

            <div className="gameLength-wrap">
                <h3 className="main-head">Game Length</h3>
                <div className="gameLength-button-wrap">
                    <div className="shrt-button">
                        <Button>
                            <p style={{ color: '#fff', fontSize: 18 }}>Short <br /> 10 Turns</p>
                            <img src={doller} style={{ width: 24, height: 24, marginLeft: 70 }} />
                        </Button>
                    </div>
                    <div className="mdm-button">
                        <Button>
                            <p style={{ color: '#fff', fontSize: 18 }}>Medium <br /> 20 Turns</p>
                            <img src={doller} style={{ width: 24, height: 24, marginLeft: 70 }} />
                        </Button>
                    </div>
                    <div className="long-button">
                        <Button>
                            <p style={{ color: '#fff', fontSize: 18 }}>Long <br /> 40 Turns</p>
                            <img src={doller} style={{ width: 24, height: 24, marginLeft: 70 }} />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="gameLength-wrap">
                <h3 className="main-head">Role</h3>
                <div className="gameLength-button-wrap">
                    <div className="shrt-button">
                        <Button>
                            <p style={{ color: '#fff', fontSize: 18, margin: '10px' }}>Easy</p>
                            <img src={lock} style={{ width: 24, height: 24, marginLeft: 70 }} />
                        </Button>
                    </div>
                    <div className="mdm-button">
                        <Button>
                            <p style={{ color: '#fff', fontSize: 18, margin: '10px' }}>Standard</p>
                            <img src={lock} style={{ width: 24, height: 24, marginLeft: 70 }} />
                        </Button>
                    </div>
                    <div className="long-button">
                        <Button>
                            <p style={{ color: '#fff', fontSize: 18, margin: '10px' }}>Advance</p>
                            <img src={lock} style={{ width: 24, height: 24, marginLeft: 70 }} />
                        </Button>
                    </div>
                </div>
            </div>


            <div className="btn-wrap">
                <Button className="nxt-btn">Next</Button>
            </div>
        </Grid>
    )
}

export default SelectAvatar
