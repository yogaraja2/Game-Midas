import clsx from 'clsx'
import React from 'react'
import Card from '../../../components/Card'

function SatisfactionCard() {
  const Score = ({ label, value }) => (
    <div className={clsx('score-wrap', value < 1 ? 'neg-sat' : 'pve-sat')}>
      <div className="value">{value}</div>
      <div className="label">{label}</div>
    </div>
  )

  return (
    <Card className="satisfiction-card">
      <Score label="Housing" value={300} />
      <Score label="Living Expenses" value={300} />
      <Score label="Entertainment" value={-300} />
      <Score label="Vehicle" value={300} />
      <Score label="Retirement" value={-300} />
    </Card>
  )
}

export default SatisfactionCard
