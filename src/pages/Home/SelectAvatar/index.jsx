import React, { useState } from 'react'
import { Button, Grid } from '@material-ui/core'
import clsx from 'clsx'
import './useStyle.scss'
import doller from '../../../assets/img/doller 2.svg'
import unlock from '../../../assets/img/lock.svg'
import lock from '../../../assets/img/lock1.svg'
import { commonRoute } from '../../../config/routes'
import { useHistory } from 'react-router-dom'
import Textfield from '../../../components/Textfield'

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

const LengthOptions = ({ id, dollerImg, text1, text2, gameLength, setGameLength }) => {
    return (
        <Grid item md={3} sm={12} xs={12}
            className={clsx('lenrole-button', { "selected-lenrole": gameLength === id })}
            onClick={setGameLength.bind(this, id)}
        >
            <div className="selected-lenrole">
                <div className="button-text-wrap">
                    <span className="button-text1">{text1}</span><br />
                    <span className="button-text2">{text2}</span>
                </div>
                <img src={dollerImg} alt={id} className="doller-icon" />
            </div >
        </Grid >
    )
}

const RoleOptions = ({ id, title, role, setRole }) => {
    return (
        <Grid item md={3} sm={12} xs={12}
            className={clsx('lenrole-button', { "selected-lenrole": role === id })}
            onClick={setRole.bind(this, id)}
        >
            <div className="button-text-wrap" style={{ marginTop: '20px' }}>
                <span className="button-text1">{title}</span>
            </div>
            <img src={(role === id) ? unlock : lock} alt={id} className="doller-icon" style={{ bottom: '20px' }} />
        </Grid>
    )
}

function SelectAvatar() {
    const [selected, setSelected] = useState('Avatar1')
    const [gameLength, setGameLength] = useState('short')
    const [role, setRole] = useState('easy')
    const [income, setIncome] = useState(null)

    const allyProps = { selected, setSelected }
    const otherLen = { gameLength, setGameLength }
    const otherRol = { role, setRole }

    const history = useHistory()
    const goToSelectDream = () => {
        if (income) {
            console.log(income);
            history.push(commonRoute.selectDreams);
        }
        else {
            alert('Please enter your income...')
        }
    }

    const handleIncomeValueChanges = (e) => {
        setIncome(+e.target.value)
    }

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
                    id={'Avatar1'}
                    {...allyProps}
                />
                <AvatarOptions
                    label="Admin"
                    imgUrl={`Avatar2`}
                    id={'Avatar2'}
                    {...allyProps}
                />
                <AvatarOptions
                    label="Admin"
                    imgUrl={'Avatar3'}
                    id={'Avatar3'}
                    {...allyProps}
                />
                <AvatarOptions
                    label="Admin"
                    imgUrl={`Avatar4`}
                    id={'Avatar4'}
                    {...allyProps}
                />
                <AvatarOptions
                    label="Admin"
                    imgUrl={'Avatar5'}
                    id={'Avatar5'}
                    {...allyProps}
                />
            </Grid>

            <div className="income-wrap">
                <div className="header-sec">
                    <h3 className="main-head">Income</h3>
                </div>
                <Textfield
                    name="income"
                    placeholder="$120000"
                    className="income-field"
                    required
                    onChange={(e) => handleIncomeValueChanges(e)}
                />
            </div>

            <div className="gameLength-wrap">
                <div className="header-sec">
                    <h3 className="main-head">Game Length</h3>
                </div>
                <Grid container className="lenrole-button-wrap">
                    <LengthOptions
                        id={'short'}
                        dollerImg={doller}
                        text1="Short"
                        text2="10 Turns"
                        {...otherLen} />
                    <LengthOptions
                        id={'medium'}
                        dollerImg={doller}
                        text1="Medium"
                        text2="20 Turns"
                        {...otherLen} />
                    <LengthOptions
                        id={'long'}
                        dollerImg={doller}
                        text1="Long"
                        text2="40 Turns"
                        {...otherLen} />
                </Grid>
            </div>

            <div className="gameLength-wrap">
                <div className="header-sec">
                    <h3 className="main-head">Role</h3>
                </div>
                <Grid container className="lenrole-button-wrap">
                    <RoleOptions
                        id="easy"
                        title="Easy"
                        {...otherRol}
                    />
                    <RoleOptions
                        id="medium"
                        title="Medium"
                        {...otherRol}
                    />
                    <RoleOptions
                        id="advance"
                        title="Advance"
                        {...otherRol}
                    />
                </Grid>
            </div>

            <div className="btn-wrap">
                <Button className="nxt-btn" onClick={goToSelectDream}>Next</Button>
            </div>
        </Grid>
    )
}

export default SelectAvatar
