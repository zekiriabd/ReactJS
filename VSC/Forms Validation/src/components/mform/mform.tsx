import * as React from 'react';
import { Button,Form,FormControlProps } from 'react-bootstrap';

interface IProps{
   id:string, 
}

interface IState{
  name: string,
  email:string,  
  nameError:string,
  emailError : string
}

type IBEvent = React.FormEvent<FormControlProps>;

class YForm extends React.Component<IProps,IState> {
    constructor(props:IProps){
        super(props);
        this.state = {
        email: '',
        emailError:'',
        name: '',
        nameError:'',
      }
    }

      public SetName = (e:IBEvent) => {
        this.setState({name : e.currentTarget.value as string  })
      }
      public SetEmail = (e:IBEvent) => {
        this.setState({email : e.currentTarget.value as string  })
      }

      public Validate = () : boolean => {

        if( this.state.name.length === 0) {  
          this.setState({nameError : 'Name is empty'});
          return false;
        }

       if( !this.state.email.includes('@')) {  
          this.setState({emailError : 'Email is not correct'});
          return false;
        }

        return true;
      }
      
      public handleSubmit = (e:IBEvent)  => {
      e.preventDefault();
     
        if(this.Validate()){
            // tslint:disable-next-line: no-console
            console.log(this.state);            
        }
      }

      public render() {
        return (
          <div className="container">
            <h1>React Bootstrap</h1>
            <Form onSubmit={this.handleSubmit}> 
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control className={this.state.name.length === 0 ? 'is-invalid' : 'is-valid' }  type="text" placeholder="Name" value={this.state.name} onChange={this.SetName}/>
                <Form.Text className="text-danger">{this.state.nameError}</Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Enter email" value={this.state.email} 
                onChange={this.SetEmail} />
                 <Form.Text className="text-danger">{this.state.emailError}</Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">Submit</Button>

            </Form>
          </div>
        );
      }
    };
    export default YForm;