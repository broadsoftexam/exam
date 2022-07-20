import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { DataTable, Input, TextFilter, Modal, MultiSelectDropdownFilter, ButtonGroup, Form, CheckboxFilter, Button, icon, InputText } from '@edx/paragon';
// import { 
//   DataTable,
//    Input,
//    Modal,
//    TextFilter,
//    MultiSelectDropdownFilter,
//    ButtonGroup,
//    Button,
//    Hyperlink,
//    Icon,
//    useToggle,
//    ActionRow,
//    Alert,
//    Col,
//    Form,
//    ModalDialog,
//    StatefulButton,
//            } from '@edx/paragon';
import { CheckCircle, Error, WarningFilled, Highlight, Delete, Edit, ExpandMore, Report, ListView  } from '@edx/paragon/icons';

export default class Dashboard extends Component {
  
  constructor(props){
    super(props);
    this.openModal = this.openModal.bind(this);
    this.resetModalWrapperState = this.resetModalWrapperState.bind(this);

    this.state = { open: false };
    this.state = {
      users: [],
      loading:true,
      sno: '',
      section: ''
    }
    this.ChangeSectionHandler = this.ChangeSectionHandler.bind(this);
  }
  openModal() {
    this.setState({ open: true });
  }

  resetModalWrapperState() {
    this.setState({ open: false });
  }
  // get data
  async getUsersData(){
    const  tokendet = JSON.parse(sessionStorage.getItem('token'));
    let token =tokendet.token;
    const res = await axios.get('https://exammanger.co.in/sectionlist',   
    { headers: {'Authorization':'Token '+ token} })
    // const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    //alert(JSON.stringify(res.data));
    console.log(res.data)
    this.setState({loading:false, users: res.data})
  }
  // close
 

  componentDidMount(){
    this.getUsersData()
  }

  async deleteRow(e){  
    const  tokendet = JSON.parse(sessionStorage.getItem('token'));
    let token =tokendet.token;
    alert(this.state.sno);
    axios.delete(`https://exammanger.co.in/sectiondetail/${sno}`,
    { headers: {'Authorization':'Token '+ token} })  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
        const posts = this.state.posts.filter(item => item.sno !== sno);
        this.setState({loading:false, users: res.data});  
      })  
    
  }  
  ChangeSectionHandler= (event) => {
    this.setState({section: event.target.value});
}
  

  ///  === added by madhav
  saveOrUpdateSection = (e) => {
    e.preventDefault();
    //let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
    let createuser = {
      section:this.state.section
    }   
   

    console.log('section => ' + JSON.stringify(createuser));

    const  tokendet = JSON.parse(sessionStorage.getItem('token'));
    let token =tokendet.token;
    let sectiondata= JSON.stringify(createuser);
    alert(createuser);
    axios.post(`https://exammanger.co.in/sectionlist/`,createuser, 
    { headers: {'Authorization':'Token '+ token} })  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
        // const posts = this.state.posts.filter(item => item.sno !== sno);
        this.setState({loading:false, createuser: res.data});         
      })
      .catch((error) => console.log(error));  
    
}
deleteSection(sno) {
  const  tokendet = JSON.parse(sessionStorage.getItem('token'));
  let token =tokendet.token;
  alert(sno);
  axios.delete(`https://exammanger.co.in/sectiondetail/${sno}`,
  { headers: {'Authorization':'Token '+ token} })  
    .then(res => {  
      console.log(res);  
      console.log(res.data);  
      const posts = this.state.posts.filter(item => item.sno !== sno);
      this.setState({loading:false, users: res.data});  
    })  
}
  //=== enmd addee b y,adhav
  

  // .then(res => {
  //   if (res.status === 200)
  //     alert('Student successfully created')
  //   else
  //     Promise.reject()
  // })
  // .catch(err => alert('Something went wrong'))
  
  render() {
  
	  const TableAction = ({ as: Component, selectedFlatRows, ...rest  }) => (
		// Here is access to the tableInstance
		// Pass `as` like in the example bellow for the proper display in the toggled variant
		<Component onClick={this.openModal}>
		  Create
		</Component>
	  );
	  
	  const DeleteAction = ({ as: Component, selectedFlatRows, ...rest }) => (
		// Here is access to the selectedFlatRows, isEntireTableSelected, tableInstance
		// <Component variant="danger" onClick={() => console.log('Enroll', selectedFlatRows, rest)}>
    <Component variant="danger" onClick={() => UserDelete(user.sno)}>
		  Delete ({selectedFlatRows.length})
		</Component>
	  );
	
	  const EditAction = ({ as: Component, selectedFlatRows, ...rest }) => (
		<Component onClick={() => console.log('Assign', selectedFlatRows, rest)}>
		  Edit ({selectedFlatRows.length})
		</Component>
	  );
	  
	  const ExtraAction = ({ text, as: Component, selectedFlatRows, ...rest }) => (
		<Component onClick={() => console.log(`Extra Action ${text}`, selectedFlatRows, rest)}>
		  {`Extra Action ${text}`}
		</Component>
	  );

    const columns = [
    
     {  
      Header: 'sno',  
      accessor: 'sno' ,
      }
     ,{  
     Header: 'section',  
     accessor: 'section',
     Filter: MultiSelectDropdownFilter,
     filter: 'includesValue',
     filterChoices: [
      ,{
        name: 'A Section',
        value: 'A SECTION',
      },
      {
        name: 'B Section',
        value: 'B SECTION',
      },
      {
        name: 'C Section',
        value: 'C SECTION',
      },
      {
        name: 'D Section',
        value: 'D SECTION',
      },
    ]
  }
  ]
    return (

<>
        <Modal
          open={this.state.open}
          title="Modal title."
          body={
            <div>
             <Form onSubmit={this.handleSubmit}>
               
                <Form.Group>
                  <Input
                    type="text"
                    name="select"
                    floatingLabel="Select"
                    value={this.state.section}
                    onChange={this.ChangeSectionHandler}
                  />
                </Form.Group>
               
                {/* <Button variant="success" data-autofocus type="submit">Submit</Button> */}
                <button onClick={this.saveOrUpdateSection} className="btn btn-info">Submit</button>
             </Form>
            </div>
          }
          parentSelector={this.props.parentSelector}
          onClose={this.resetModalWrapperState}
          buttons={[
            
          ]}
        />



<DataTable
isSelectable 
isFilterable
tableActions={[
  <TableAction />,
]}
bulkActions={[
  <DeleteAction />,
  <EditAction as={Button} />,
  <ExtraAction text="1" />,
  <ExtraAction text="2" />,
]}
additionalColumns={[
  {
	id: 'action',
	Header: 'Action',
	Cell: ({ row }) => 
  <ButtonGroup size="sm">
  <Button variant="outline-primary" iconBefore={Edit} size="sm">Edit</Button>
  <Button variant="outline-primary" iconBefore={ListView} size="sm">View</Button>
  <Button variant="outline-primary" iconBefore={Delete} size="sm" onClick={()=>this.deleteSection(row.values.sno)}>Delete</Button>
</ButtonGroup>
  
  }
]}
isSortable
isPaginate
defaultColumnValues={{ Filter: TextFilter }}
numBreakoutFilters={2}
itemCount={7}
data={this.state.users}  
columns={columns}  
>
<DataTable.TableControlBar />
<DataTable.Table />
<DataTable.EmptyTable content="No results found" />
<DataTable.TableFooter />
</DataTable>


</>


    )
  }
}



// export default Tables;
