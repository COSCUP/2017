import { connect } from 'react-redux'
import Actions from 'js/actions'
import Components from 'components'

const mapStateToProps = (state, ownProps) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => ({
    getStaff: () => dispatch(Actions.Staff.get())
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.staff.Home)
