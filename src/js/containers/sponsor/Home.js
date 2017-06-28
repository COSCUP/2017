import { connect } from 'react-redux'
import Components from 'components'
import Actions from 'js/actions'

const mapStateToProps = (state, ownProps) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => ({
    getSponsor: () => dispatch(Actions.Sponsor.get())
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.sponsor.Home)
