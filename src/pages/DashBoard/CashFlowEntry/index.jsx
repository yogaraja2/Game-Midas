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
import { TextField } from '@material-ui/core'

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

  const [count, setCount] = useState(1)

  // const [eventObj, seteventObj] = useState({
  //   eventName: '', eventCost: ''
  // })

  const [eventCollection, setEventCollection] = useState([
    { eventName: '', eventCost: '' }
  ])

  const addEvents = () => {
    // if (count === 1) {
    //   eventCollection.splice(0, 1)
    // }
    
    setEventCollection([...eventCollection, { eventName: '', eventCost: '' }])
    setCount(count + 1)
    // seteventObj({ eventName: '', eventCost: '' })
  }

  const handleInputChange = (e, index) => {
    const { name, value } = e.target
    eventCollection[index][name] = value;
    console.log(`handleInputChange ${e}`)
    console.log(name)
  }

  console.log('eve')
  console.log(eventCollection)

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
        <p className="question">How much would you like to spend for various elective events this year on ? </p>
        {eventCollection.map((item, index) => (
          <div key={index} className="event-wrap">
            {/* <Events eventCollection={eventCollection[index]} /> */}
            <TextField
              className="eve-name-qus-field"
              id={index}
              label={"Event Name"}
              name={"eventName"}
              value={item.eventName}
              // onChange={(e) => [...eventCollection, { eventName: e.target.value }]}
              onChange={(e) => handleInputChange(e,index)}
            />
            <TextField
              className="eve-cost-qus-field"
              id={index}
              label={"Event Cost"}
              name={"eventCost"}
              type="number"
              value={item.eventCost}
              onChange={(e) => handleInputChange(e,index)}
            />
          </div>
        ))}
        {/* <div className="add-eve-btn" onClick={addEvents}>Add</div> */}
        <Button className="add-eve-btn" onClick={addEvents} disabled={count > 3}>Add</Button>
      </div>

      <div className="btn-wrap">
        <Button
          className="dreams-btn"
          disabled={!(currentTurn <= 1)}
          onClick={goToSelectDream}
        >Change Dreams</Button>
        <Button className="info-btn" onClick={handleSubmit}>Try</Button>
      </div>

      {/* <div className="btn-wrap">
        <Button className="info-btn" onClick={handleSubmit}>
          <div className="btn-cont">
            <InfoIcon className="info-icon" />
            <span className="label">info</span>
          </div>
          Try
        </Button>
      </div> */}

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
