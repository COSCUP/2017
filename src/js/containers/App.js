import { connect } from 'react-redux'
import Components from 'components'
import Actions from 'js/actions'

const mapStateToProps = (state, ownProps) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => ({
    getTranslate: () => dispatch(Actions.Translate.get()),
    getSocial: () => dispatch(Actions.Social.get())
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.App)
