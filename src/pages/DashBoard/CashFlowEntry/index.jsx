import React, { useState } from 'react'
import GameCoin from '../../../components/GameCoin'
import Question from './Question'
import Events from './Events'
import { AiOutlineInfoCircle as InfoIcon } from 'react-icons/ai'
import { Button } from '@material-ui/core'
import Fetch from '../../../Api'
import './style.scss'
import { API } from '../../../config/apis'
import { commonRoute } from '../../../config/routes'
import SnackBar from '../../../components/SnackBar'
import Textfield from '../../../components/Textfield'
import { useSelector, useDispatch } from 'react-redux'
import { setCashflowValues, setCashFlowApiData } from '../../../redux/Action'

const AvailableBal = ({ label, value }) => (
  <div className="avl-bal-entry">
    <span className="label">{label}</span>
    <span className="value-wrap">
      <GameCoin value={value} />
    </span>
  </div>
)

function CashFlowEntry(props) {

  const currentTurn = useSelector(state => state.dashboard.currentTurn)
  const cashflowValues = useSelector(state => state.cashFlowValues)

  const dispatch = useDispatch()

  const [error, setError] = useState(null)
  const questions = [
    {
      id: 1,
      question: 'How much would you like to spend this year on?',
      fields: [
        { id: 1, name: 'livingExpenses', label: 'Living Expenses' },
        { id: 2, name: 'entertainment', label: 'Entertainment' },
        { id: 3, name: 'retirementSavings', label: 'Retirement Savings' }
      ]
    },
    {
      id: 2,
      question:
        'How much extra would you like to spend this year repaying to spend this year repaying these debts?',
      fields: [
        { id: 1, name: 'creditCard', label: 'Credit Card' },
        { id: 2, name: 'carLoan', label: 'Car Loan' },
        { id: 3, name: 'studentLoan', label: 'Student Loan' }
      ]
    }
  ]

  const [values, setValues] = useState(cashflowValues)

  const handleSubmit = () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('midasToken')}`
    }

    const params = {
      ...values,
      livingExpenses: parseInt(values.livingExpenses || 0),
      entertainment: parseInt(values.entertainment || 0),
      retirementSavings: parseInt(values.retirementSavings || 0),
      creditCard: parseInt(values.creditCard || 0),
      // carLoan: parseInt(values.carLoan || 0),
      studentLoan: parseInt(values.studentLoan || 0)
    }

    dispatch(setCashflowValues(params))

    console.log('params')
    console.log(params)

    Fetch.post(API.gamePlay.cashFlow.entry, params, { headers })
      .then((res) => {
        console.log('cashflow response ')
        console.log(res)

        if (res.status === 200) {
          dispatch(setCashFlowApiData(res.data))
          if (res.data.status >= 400) {
            // setError('Something went wrong !!!')
            setError(res.data.message)
          }
          else {
            props.history.push({
              pathname: commonRoute.dashboard.cashFlowInfo,
              state: {
                data: res.data
              }
            })
          }

        }
        else {
          setError('Something went wrong !!!')
        }
      })
      .catch((err) => {
        setError(
          err.data?.error?.message || err?.response?.data?.error?.message
        )
        setError('Something went wrong !!!')
        console.error(err)
      })
  }

  const goToSelectDream = () => {
    props.history.push(commonRoute.selectDreams)
  }

  const [events, setEvents] = useState(false)

  return (
    <div className="dash-cash-flow-info-page">
      {/* <div className="avl-bal-wrap">
        <AvailableBal label="Savings Available" value={500} />
        <AvailableBal label="Income Available" value={500} />
      </div> */}

      <div className="turn-wrap">
        <h2 className="current-turn">Turn {currentTurn}</h2>
      </div>

      <div className="questions-wrap">
        {questions.map((i, index) => (
          <Question
            key={index}
            data={i}
            values={values}
            setValues={setValues}
          />
        ))}
      </div>

      <div className="events-wrap">
        <div className="event-btn" onClick={() => setEvents(!events)}>Add Events</div>
        {<Events isEnable={events} />}
      </div>

      <div className="btn-wrap">
        <Button
          className="dreams-btn"
          disabled={!(currentTurn <= 1)}
          onClick={goToSelectDream}
        >
          Change Dreams
        </Button>
      </div>

      <div className="btn-wrap">
        <Button className="info-btn" onClick={handleSubmit}>
          {/* <div className="btn-cont">
            <InfoIcon className="info-icon" />
            <span className="label">info</span>
          </div> */}
          Try
        </Button>
      </div>

      <SnackBar
        openDialog={!!error}
        message={error}
        severity="Error"
        onclose={setError.bind(this, null)}
      />
    </div>
  )
}

export default CashFlowEntry
