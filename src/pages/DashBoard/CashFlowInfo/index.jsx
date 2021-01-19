import React from 'react'
import GameCoin from '../../../components/GameCoin'
import Question from './Question'
import { AiOutlineInfoCircle as InfoIcon } from 'react-icons/ai'
import { Button } from '@material-ui/core'
import './style.scss'

const AvailableBal = ({ label, value }) => (
  <div className="avl-bal-entry">
    <span className="label">{label}</span>
    <span className="value-wrap">
      <GameCoin value={300} />
    </span>
  </div>
)

function CashFlowInfo() {
  const questions = [
    {
      id: 1,
      question: 'How much would you like to spend this year on?',
      fields: [
        { id: 1, name: 'livingExp', label: 'Living Expenses' },
        { id: 2, name: 'entertainment', label: 'Entertainment' },
        { id: 3, name: 'retireSavings', label: 'Retirement Savings' }
      ]
    },
    {
      id: 2,
      question:
        'How much extra would you like to spend this year repaying to spend this year repaying these debts?',
      fields: [
        { id: 1, name: 'ccLoan', label: 'Credit Card' },
        { id: 2, name: 'carLoan', label: 'Car Loan' },
        { id: 3, name: 'balooDa', label: 'Baloo Da' }
      ]
    }
  ]

  return (
    <div className="dash-cash-flow-info-page">
      <div className="avl-bal-wrap">
        <AvailableBal label="Savings Available" value={500} />
        <AvailableBal label="Income Available" value={500} />
      </div>

      <div className="questions-wrap">
        {questions.map((i, index) => (
          <Question key={index} data={i} />
        ))}
      </div>

      <div className="btn-wrap">
        <Button className="info-btn">
          <div className="btn-cont">
            <InfoIcon className="info-icon" />
            <span className="label">info</span>
          </div>
        </Button>
      </div>
    </div>
  )
}

export default CashFlowInfo
