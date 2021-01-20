import React, { useState } from 'react'
import GameCoin from '../../../components/GameCoin'
import Question from './Question'
import { AiOutlineInfoCircle as InfoIcon } from 'react-icons/ai'
import { Button } from '@material-ui/core'
import Fetch from '../../../Api'
import './style.scss'
import { API } from '../../../config/apis'
import { commonRoute } from '../../../config/routes'

const AvailableBal = ({ label, value }) => (
  <div className="avl-bal-entry">
    <span className="label">{label}</span>
    <span className="value-wrap">
      <GameCoin value={value} />
    </span>
  </div>
)

function CashFlowEntry(props) {
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

  const [values, setValues] = useState({
    livingExpenses: '',
    entertainment: '',
    retirementSavings: '',
    creditCard: '',
    carLoan: '',
    studentLoan: ''
  })

  const handleSubmit = () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('midasToken')}`
    }

    const params = {
      livingExpenses: parseInt(values.livingExpenses || 0),
      entertainment: parseInt(values.entertainment || 0),
      retirementSavings: parseInt(values.retirementSavings || 0),
      creditCard: parseInt(values.carLoan || 0),
      carLoan: parseInt(values.carLoan || 0),
      studentLoan: parseInt(values.studentLoan || 0)
    }

    Fetch.post(API.gamePlay.cashFlow.entry, params, { headers })
      .then((res) => {
        props.history.push({
          pathname: commonRoute.dashboard.cashFlowInfo,
          state: {
            data: res.data
          }
        })
      })
      .catch((err) => {
        props.history.push(commonRoute.dashboard.cashFlowInfo)
        console.error(err)
      })
  }

  return (
    <div className="dash-cash-flow-info-page">
      <div className="avl-bal-wrap">
        <AvailableBal label="Savings Available" value={500} />
        <AvailableBal label="Income Available" value={500} />
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

      <div className="btn-wrap">
        <Button className="info-btn" onClick={handleSubmit}>
          {/* <div className="btn-cont">
            <InfoIcon className="info-icon" />
            <span className="label">info</span>
          </div> */}
          Try
        </Button>
      </div>
    </div>
  )
}

export default CashFlowEntry