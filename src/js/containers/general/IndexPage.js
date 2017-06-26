import { connect } from 'react-redux'
import Components from 'components'

const mapStateToProps = (state) => ({
    language: state.Language,
    translate: state.Translate
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.general.IndexPage)
