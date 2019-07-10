import * as React from 'react';
import { Button,Form,FormControlProps } from 'react-bootstrap';

interface IProps{
   id:string, 
}

interface IState{
  name: string,
  email:string,    
}

type IBEvent = React.FormEvent<FormControlProps>;

class YForm extends React.Component<IProps,IState> {
    constructor(props:IProps){
        super(props);
        this.state = {
        email: '',
        name: '',
      }
    }
      public SetName = ({target}:{target:HTMLInputElement}) => {
        this.setState({name : target.value});
      }
      public SetEmail = (e:IBEvent) => {
        this.setState({email : e.currentTarget.value as string  })
      }
      public onSubmit = (e:IBEvent) => {
        e.preventDefault();
      }
     

      public render() {
       

        return (
          <div className="container">
            <h1>React Bootstrap</h1>
            <Form>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <input type="text" required={true} pattern="[A-Za-z]{3}" placeholder="Name"  value={this.state.name} onChange={this.SetName}/>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.SetEmail} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">Submit</Button>

            </Form>
          </div>
        );
      }
    };
    export default YForm;