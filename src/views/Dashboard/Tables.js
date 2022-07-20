import React, { Component } from 'react'
import axios from 'axios'
import { DataTable, TextFilter, CheckboxFilter, Button, icon, useToggle } from '@edx/paragon';


export default class Tables extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      users: [],
      loading:true,
    }
  }
  
  // get data
  async getUsersData(){
    const  tokendet = JSON.parse(sessionStorage.getItem('token'));
    let token =tokendet.token;
    const res = await axios.get('https://exammanger.co.in/sectionlist',   
    { headers: {'Authorization':'Token '+ token} })
    // const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    alert(JSON.stringify(res.data));
    console.log(res.data)
    this.setState({loading:false, users: res.data})
  }
  // close
  

  componentDidMount(){
    this.getUsersData()
  }
  render() {
  
    const UserDelete = async id => {
      await axios.delete(`https://exammanger.co.in/sectionlist/${id}`);
      var newstudent = users.filter((item) => {
       // console.log(item);
       return item.id !== id;
      })
      this.setState({loading:false, users: res.data})
     }

  
  // model start
  // const [isOpen, open, close] = useToggle(false);
  // const sizes = ['sm', 'md', 'lg', 'xl', 'fullscreen'];
  // const variants = ['default', 'warning', 'danger', 'success', 'dark'];
  // const [modalSize, setModalSize] = useState('md');
  // const [modalVariant, setModalVariant] = useState('default');
  // model close


	  const TableAction = ({ as: Component, selectedFlatRows, ...rest  }) => (
		// Here is access to the tableInstance
		// Pass `as` like in the example bellow for the proper display in the toggled variant
		<Component onClick={() => console.log('TableAction', rest)}>
		  Create
		</Component>
	  );
	  
	  const DeleteAction = ({ as: Component, selectedFlatRows, ...rest }) => (
		// Here is access to the selectedFlatRows, isEntireTableSelected, tableInstance
		// <Component variant="danger" onClick={() => console.log('Enroll', selectedFlatRows, rest)}>
    <Component variant="danger" onClick={() => UserDelete(user.id)}>
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
    //   {  
    //   Header: 'ID',  
    //   accessor: 'id',
    //  }
     ,{  
      Header: 'sno',  
      accessor: 'sno' ,
      }
     
     ,{  
     Header: 'section',  
     accessor: 'section' ,
     }
   
  ]
    return (

<>
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
// additionalColumns={[
//   {
// 	id: 'action',
// 	Header: 'Action',
// 	Cell: ({ row }) => <Button variant="link" onClick={() => console.log(`Assigning ${row.values.name}`)}>Assign</Button>,
//   }
// ]}
isSortable
isPaginated
defaultColumnValues={{ Filter: TextFilter }}
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
