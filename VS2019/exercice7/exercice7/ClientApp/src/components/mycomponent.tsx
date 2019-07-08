import * as React from 'react';
import  { Button,Form, FormControlProps } from 'react-bootstrap';
import Axios from 'axios';


interface IProps {
    x: number,
}

interface IUser {
    firstName: string,
    lastName: string,
}

interface IState {
    FirstName: string,
    LaststName: string,
    Users: IUser[],
}

type IBEvent = React.FormEvent<FormControlProps>;
//type IEvent = React.FormEvent<HTMLInputElement>;


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
        Axios.get("http://localhost:8080/GetUsers")
            .then(res => {
                this.setState({ Users: res.data[0] });
            }).catch(error => {
                console.log(error)
            });
    }

    public SetFirstName = (e: IBEvent) => { this.setState({ FirstName: e.currentTarget.value as string }) }
    public SetLastName = (e: IBEvent) => { this.setState({ LaststName: e.currentTarget.value as string }) }

    public btnAddUser = (e: IBEvent) => {
        const newUser = { FirstName: this.state.FirstName, LastName: this.state.LaststName };

        Axios.post("http://localhost:8080/SetUser", newUser)
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
                    <Form.Group controlId="gFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" value={this.state.FirstName} onChange={this.SetFirstName} />
                    </Form.Group>
                    <Form.Group controlId="gLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" value={this.state.LaststName} onChange={this.SetLastName} />
                    </Form.Group>
                    <Button variant="primary" onClick={this.btnAddUser} >Add</Button>
                </Form>

                <Button onClick={this.btnAddUser} >Add User</Button>
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