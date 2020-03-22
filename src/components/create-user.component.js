import React, {Component} from 'react';


export default class CreateUser extends Component{

    constructor(props) {
        super(props);
          //binds "this" to the whole class CreateExercises 
          this.onChangeUsername = this.onChangeUsername.bind(this);
          this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            username:'',
            
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        }); 
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username,
        }

        console.log(user)
        //now we want the user to type multiple users 
        this.setState({
            username: ''
        });
        
    }

    render(){
        return(
            <div>
                <h1>Create New User</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input 
                            type="text"
                            required
                            className="form-control"
                            onChange={this.onChangeUsername}
                            />
                    </div>
                    <div className="form-group">
                        <input type ="submit" value="Create User" className="btn btn-primary"  />
                    </div>
                </form>
            </div>
        )
    }
}