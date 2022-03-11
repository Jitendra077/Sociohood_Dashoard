import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    return{
        appbar:{
            height:theme.spacing(10),
            [theme.breakpoints.down('sm')]:{
                    background:'black'  
            },
        // toolbar:{
        //     display:'flex',
        //     justifyContent:'space-between',
        //     background:'green'
        // }
            // [theme.breakpoints.up('sm')]:{
            //     display:'flex',
            //     justifyContent:'space-between'
            // },
            // [theme.breakpoints.down('sm')]:{
            //     display:'flex'
            // }
    
        },
        items:{
            // background:'red',
            display:'flex',
            justifyContent:'space-evenly',
            alignItems:'center',
            
        },
        icons:{
            // display:'flex',
            justifyContent:'space-between',
            padding:theme.spacing(10),
            [theme.breakpoints.down('sm')]:{
                display:'flex',
            justifyContent:'space-between',
            padding:theme.spacing(10),
            background:'red'
    
        },
        [theme.breakpoints.down('xs')]:{
            // display:'flex',
        justifyContent:'space-evenly',
        padding:theme.spacing(10),
        background:'yellow'
    },
    [theme.breakpoints.only('xs')]:{
        display:'flex',
    justifyContent:'space-between',
    padding:theme.spacing(10),
    },
        },
        image:{
            width:theme.spacing(12),
            height:theme.spacing(12)
        },
        text:{
            padding:theme.spacing(10),
            fontSize:theme.spacing(2)
        },
    }
   
}));