import { connect } from 'react-redux'
import Components from 'components'
import Actions from 'js/actions'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch) => ({
    getSession: (data) => dispatch(Actions.Session.get())
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.App)
