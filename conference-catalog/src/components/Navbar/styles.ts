import {makeStyles} from '@material-ui/core/styles'
import {COLORS} from "../../constants";

const styles = makeStyles((theme) =>({
    navBar:{
        backgroundColor:COLORS.EBONY_CLAY,
        position: 'relative',

    },
    navBarBtn:{
        fontSize:17,
        color: COLORS.REDICAL_RED,
        '&:hover':{
            opacity: 0.7,
        }
    },
    toolBer:{
        justifyContent:'space-between',
        padding:0,
    },
    homeLink:{
        '&:hover': {
            color: COLORS.REDICAL_RED,
            cursor:'pointer',
        }
    },
}))

export default styles;
