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
import axios from 'axios';

export default class DialogBox extends Component{
    constructor(props){
        super(props)

        this.onChangeSpotifyUri = this.onChangeSpotifyUri.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            open: false,
            spotifyUri: "",
            comment: ""
    
        }
    }

    componentDidMount() {
        this.setState({
            open:false,
            spotifyUri: "",
            comment:""
        })
    }

    onChangeSpotifyUri(e) {
        this.setState({
            spotifyUri: e.target.value
        })
    }

    onChangeComment(e) {
        this.setState({
            comment: e.target.value
        })
    }
    

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    onSubmit(e){
        e.preventDefault();

        const post = {
            spotifyUri: this.state.spotifyUri,
            username: "dommiller88",
            comment: this.state.comment,
            profilePicture: "https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg"
        }
        console.log(post);
        axios.post('http://localhost:5003/posts/add', post)
            .then(res => console.log(res.data))
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
                    value={this.state.spotifyUri}
                    onChange={this.onChangeSpotifyUri}
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
                    value={this.state.comment}
                    onChange={this.onChangeComment}
                />
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={this.onSubmit} >
                    Submit
                </Button>
            </DialogActions>
      </Dialog>

    </Fragment>
    }
 
}

    