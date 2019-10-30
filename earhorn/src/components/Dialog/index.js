import React, {Component, Fragment} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

export default class DialogBox extends Component{
    state = {
        open: false
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        const {open} = this.state

    return <Fragment>
        <IconButton aria-label="add" className="Add-button" onClick={this.handleToggle}>
            <AddIcon />
        </IconButton>

        <Dialog open={open} onClose={this.handleToggle}  >
            <DialogTitle id="form-dialog-title">Post new song</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Enter a song name to post
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Song URL"
                    type="url"
                    fullWidth
                />
            </DialogContent>
            <DialogContent>
                <DialogContentText>
                    Enter a comment
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Comment"
                    type="comment"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button color="primary">
                    Submit
                </Button>
            </DialogActions>
      </Dialog>

    </Fragment>
    }
 
}

    