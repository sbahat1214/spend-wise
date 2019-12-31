import React from 'react'

import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography} from '@material-ui/core'
// import {ExpandMoreIcon} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import {FaArrowRight} from 'react-icons/fa'


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

const FAQs = (props) => {
    const classes = useStyles();

    return (
        <div className="container" style={props.width}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<FaArrowRight />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>{props.title} </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                    {props.description}
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<FaArrowRight />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography className={classes.heading}>{props.title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                    {props.description}
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<FaArrowRight />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography className={classes.heading}>{props.title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                    {props.description}
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <div className="btn btn-default gradient rounded-0 my-5 mx-sm-0 ml-0 p-3">
                                    {props.btnName}
            </div>
        </div>
    )
}

export default FAQs
