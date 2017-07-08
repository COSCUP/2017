import { connect } from 'react-redux'
import Components from 'components'
import Actions from 'js/actions'

const mapStateToProps = (state, ownProps) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => ({
    putLanguage: (data) => dispatch(Actions.Language.put(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.schedule.Home)
