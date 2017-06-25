import { connect } from 'react-redux'
import Components from 'components'
import Actions from 'js/actions'

const mapStateToProps = (state) => ({
    language: state.Language
})

const mapDispatchToProps = (dispatch) => ({
    putLanguage: (data) => dispatch(Actions.Language.put(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.general.Navbar)
