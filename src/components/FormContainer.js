import React, {Component} from 'react';  

/* Import Components */
import CheckBox from '../formComponents/CheckBox';  
import Input from '../formComponents/Input';  
import TextArea from '../formComponents/TextArea';  
import Select from '../formComponents/Select';
import Button from '../formComponents/Button';

class FormContainer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        newUser: {
          name: "",
          age: "",
          gender: "",
          skills: [],
          about: "",

          keyLanguage: [],
          trnaslations: []
        },
  
        genderOptions: ["Male", "Female", "Others"],
        skillOptions: ["Programming", "Development", "Design", "Testing"],

        keyLanguage: [],
       trnaslations:[]
      };
      this.handleTextArea = this.handleTextArea.bind(this);
      this.handleAge = this.handleAge.bind(this);
      this.handleFullName = this.handleFullName.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleClearForm = this.handleClearForm.bind(this);
      this.handleCheckBox = this.handleCheckBox.bind(this);
      this.handleInput = this.handleInput.bind(this);

    }
    /* This lifecycle hook gets executed when the component mounts */
  
    handleFullName(e) {
      let value = e.target.value;
      this.setState(
        prevState => ({
          newUser: {
            ...prevState.newUser,
            name: value
          }
        }),
        () => console.log(this.state.newUser)
      );
    }
  
    handleAge(e) {
      let value = e.target.value;
      this.setState(
        prevState => ({
          newUser: {
            ...prevState.newUser,
            age: value
          }
        }),
        () => console.log(this.state.newUser)
      );
    }
  
    handleInput(e) {
      let value = e.target.value;
      let name = e.target.name;
      this.setState(
        prevState => ({
          newUser: {
            ...prevState.newUser,
            [name]: value
          }
        }),
        () => console.log(this.state.newUser)
      );
    }
  
    handleTextArea(e) {
      console.log("Inside handleTextArea");
      let value = e.target.value;
      this.setState(
        prevState => ({
          newUser: {
            ...prevState.newUser,
            about: value
          }
        }),
        () => console.log(this.state.newUser)
      );
    }
  
    handleCheckBox(e) {
      const newSelection = e.target.value;
      let newSelectionArray;
  
      if (this.state.newUser.skills.indexOf(newSelection) > -1) {
        newSelectionArray = this.state.newUser.skills.filter(
          s => s !== newSelection
        );
      } else {
        newSelectionArray = [...this.state.newUser.skills, newSelection];
      }
  
      this.setState(prevState => ({
        newUser: { ...prevState.newUser, skills: newSelectionArray }
      }));
    }
  
    handleFormSubmit(e) {
      e.preventDefault();
      let userData = this.state.newUser;
  
      fetch("http://example.com", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(response => {
        response.json().then(data => {
          console.log("Successful" + data);
        });
      });
    }
  
    handleClearForm(e) {
      e.preventDefault();
      this.setState({
        newUser: {
          name: "",
          age: "",
          gender: "",
          skills: [],
          about: ""
        }
      });
    }


   
    render() {
      return (
        <div>
          {
            JSON.stringify(this.props.reducer)
          }
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        
          {/* Skill */}
          <TextArea
            title={"About you."}
            rows={10}
            value={this.state.newUser.about}
            name={"currentPetInfo"}
            handleChange={this.handleTextArea}
            placeholder={"Describe your past experience and skills"}
          />
          {/* About you */}
          <Button
            action={this.handleFormSubmit}
            type={"primary"}
            title={"Submit"}
            style={buttonStyle}
          />{" "}
          {/* input you */}
          <Input
            className="form-control"
            id={'gigi'}
            name={'nume'}
            type={'text'}
            value={'valuare noua'}
            onChange={this.handleInput}
            placeholder={'ddd'}
          />{" "}
          {/*Submit */}
          <Button
            action={this.handleClearForm}
            type={"secondary"}
            title={"Clear"}
            style={buttonStyle}
          />{" "}
          {/* Clear the form */}

        </form>
       
        </div>
        
      );
    }
  }
  
  const buttonStyle = {
    margin: "10px 10px 10px 10px"
  };
  
  export default FormContainer;