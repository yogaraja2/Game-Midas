import clsx from 'clsx'
import React from 'react'
import Card from '../../../components/Card'
import GameCoin from '../../../components/GameCoin'
import Infotip from '../../../components/Infotip'

const Entry = ({ label, title, balance, payment }) => {
  return (
    <tr className={clsx('liblty-tbl-row', !!title && 'has-title')}>
      <td className="col">
        <div className="label-wrap cell">
          <span className="label">{label}</span>
          {!!title && (
            <span className="info">
              <Infotip title={title} placement="top-end" size={0.84} />
            </span>
          )}
        </div>
      </td>
      <td className="col col-center">
        <div className="bal-wrap cell">
          <GameCoin className="balance" value={balance} color="#5f5f5f" />
        </div>
      </td>
      {/* <td className="col col-center">
        <div className="pymnt-wrap cell">
          <GameCoin className="payment" value={payment} color="#5f5f5f" />
        </div>
      </td> */}
    </tr>
  )
}

function Liabilities({ data }) {
  return (
    <div className="liabilities-wrap">
      <Card className="lblity-card" transparent>
        <table>
          <thead>
            <tr>
              <th>
                <div className="head">Liabilities</div>
              </th>
              <th>
                <div className="head">Balance</div>
              </th>
              {/* <th>
                <div className="head">Payment</div>
              </th> */}
            </tr>
          </thead>

          <tbody>
            <Entry
              label="Credit Card"
              title="This is credit card"
              balance={data?.creditLoan?.balance}
              // payment={300}
            />
            <Entry
              label="Vehicle Loan"
              title="This is credit card"
              balance={data?.carLoan?.balance}
              // payment={300}
            />
            <Entry
              label="Mortgage"
              title="This is credit card"
              balance={data?.mortgageLoan?.balance}
              // payment={300}
            />
            <Entry
              label="Student Loan"
              title="This is credit card"
              balance={data?.studenLoan?.balance}
              // payment={300}
            />
          </tbody>

          <tfoot>
            <Entry
              label="Total Assets"
              balance={data?.totalLiabilities}
              // payment={300}
            />
          </tfoot>
        </table>
      </Card>
    </div>
  )
}

export default Liabilities
