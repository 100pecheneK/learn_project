import {dialogsApi} from '../../utils/api'


const actions = {
  setDialogs: items => ({
    type: 'DIALOGS:SET_ITEMS',
    payload: items
  }),
  setError: () => ({
    type: 'DIALOGS:ERROR'
  }),
  setCurrentDialogId: id => ({
    type: 'DIALOGS:SET_CURRENT_DIALOG_ID',
    payload: id
  }),
  fetchDialogs: () => async dispatch => {
    try {
      const res = await dialogsApi.getAll()
      dispatch(actions.setDialogs(res.data))
    } catch (e) {
      dispatch(actions.setError())
    }
  }
}
export default actions