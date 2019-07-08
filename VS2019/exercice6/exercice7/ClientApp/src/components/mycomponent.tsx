import * as React from 'react';
import { Button, Label, Form, FormControlProps } from 'react-bootstrap';

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
    }

    public SetFirstName = (e: IBEvent) => { this.setState({ FirstName: e.currentTarget.value as string }) }
    public SetLastName = (e: IBEvent) => { this.setState({ LaststName: e.currentTarget.value as string }) }

    public btnAddUser = () => {
        const newUser: IUser = { FirstName: this.state.FirstName, LastName: this.state.LaststName };
        this.setState(prevState => ({ Users: [...prevState.Users, newUser] }));
    }
    public btnDelUser = (e: IBEvent) => {
        if (e.currentTarget.value) {
            const index = parseInt(e.currentTarget.value, 10);
            const _users = this.state.Users;
            _users.splice(index, 1);
            this.setState({ Users: _users });
        }
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

                    <ul>
                        {
                            this.state.Users.map((user: IUser, i) => {
                                return (
                                    <li>{user.FirstName} | {user.LastName}
                                        <Button onClick={this.btnDelUser} value={i}>X</Button>
                                    </li>
                                    )
                            })
                        }    

                    </ul>
                </Form>
            </div>
        );
    }
}

export default Mycomponent;