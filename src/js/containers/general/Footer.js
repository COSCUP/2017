import { connect } from 'react-redux'
import Components from 'components'
import Actions from 'js/actions'

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => ({
    getSocial: () => dispatch(Actions.Social.get())
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.general.Footer)
