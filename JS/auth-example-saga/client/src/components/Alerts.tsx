import { appActionCreators, appSelectors } from '@/redux/app'
import { useTypedDispatch } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux'
import Alert from '@components/Alert'

export default function Alerts() {
  const dispatch = useTypedDispatch()
  const alerts = useSelector(appSelectors.alerts)
  return (
    <div style={{ position: 'absolute', top: '2em', right: '1em' }}>
      {alerts.map(alert => (
        <Alert
          key={alert.id}
          status={alert.status}
          message={alert.message}
          onClose={() => dispatch(appActionCreators.hideAlert(alert.id))}
        />
      ))}
    </div>
  )
}
