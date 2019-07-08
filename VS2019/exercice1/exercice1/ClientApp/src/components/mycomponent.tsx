import axios from 'axios';
import * as  qs from 'qs';
import * as React from 'react';
import { Button, Form, FormControlProps } from 'react-bootstrap';

interface IProps {
    x: number,
}
interface IUser {
    LastName: string,
    FirstName: string,
}

interface IState {
    FirstName: string,
    LaststName: string,
    Users: IUser[],
}

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
        axios.get("http://localhost:8080/GetUsers")
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

        axios.post("http://localhost:8080/SetUser", qs.stringify(newUser))
            .then(res => {
                console.log(res.data);
            }).catch(error => {
                console.log(error)
            })
    }



    public render() {

        return (
            <div>
                
                <ul>
                    {
                        this.state.Users.map((user: IUser, i) => {
                            return (
                                <li key={i}>{user.LastName} | {user.FirstName} </li>
                            )
                        })
                    }

                </ul>
            </div>
        );
    }
}
export default Mycomponent;