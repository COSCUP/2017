import { connect } from 'react-redux'
import Components from 'components'
import Actions from 'js/actions'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch) => ({
    getTranslate: () => dispatch(Actions.Translate.get())
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.App)
