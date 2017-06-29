import { connect } from 'react-redux'
import Components from 'components'

const mapStateToProps = (state, ownProps) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.staff.Home)
