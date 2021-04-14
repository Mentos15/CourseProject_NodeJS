import {makeStyles} from '@material-ui/core/styles'
import {COLORS} from "../../constants";

const styles = makeStyles((theme) =>({
    container:{
        display:'flex',
    },
    image:{
        width:100,

    },
    title:{
        color:COLORS.EAST_BAY,
    },
    name:{
        color:COLORS.EAST_BAY,
        marginBottom: 10,
        '&:hover':{
            color:COLORS.REDICAL_RED,
            cursor:'pointer',
        }
    },
    time:{
        color:COLORS.EAST_BAY,
    }

}));
export default styles;

export const defaultStyle = {
    img:{
        width: 120,
        marginRight:15,
    },
}
