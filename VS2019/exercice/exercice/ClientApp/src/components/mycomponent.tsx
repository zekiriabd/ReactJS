import axios from 'axios';
import * as React from 'react';
import { Button, Form, Label, FormControlProps } from 'react-bootstrap';


interface IProps {
    x: number,
}
interface IUser {
    lastName: string,
    firstName: string,
}

interface IState {
    FirstName: string,
    LaststName: string,
    Users: IUser[],
}

type IEvent = React.FormEvent<HTMLInputElement>;
type IBEvent = React.FormEvent<FormControlProps>;

class Mycomponent extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            FirstName: "",
            LaststName: "",
            Users: [],
        }
        this.btnGetData();
    }

    public btnGetData = () => {
        axios.get("api/User/GetUsers")
            .then(res => {
                this.setState({ Users: res.data });
            }).catch(error => {
                console.log(error)
            });
    }


    public SetFirstName = (e: IEvent) => { this.setState({ FirstName: e.currentTarget.value as string }) }
    public SetLastName = (e: IEvent) => { this.setState({ LaststName: e.currentTarget.value as string }) }

    public btnAddUser = (e: IBEvent) => {
        const newUser = { FirstName: this.state.FirstName, LastName: this.state.LaststName };

        axios.post("api/User/SetUser", newUser)
            .then(res => {
                console.log(res.data);
            }).catch(error => {
                console.log(error)
            })
    }




    public render() {

        return (
            <div>
                <Form>
                    <div>
                        <Label>First Name</Label>
                        <input type="text" value={this.state.FirstName} onChange={this.SetFirstName} />
                    </div>
                    <div>
                        <Label>Last Name</Label>
                        <input type="text" value={this.state.LaststName} onChange={this.SetLastName} />
                    </div>
                    <Button onClick={this.btnAddUser} >Add</Button>
                </Form>
                <ul>
                    {
                        this.state.Users.map((user: IUser, i) => {
                            return (
                                <li key={i}>{user.lastName} | {user.firstName} </li>
                            )
                        })
                    }

                </ul>
            </div>
        );
    }
}
export default Mycomponent;