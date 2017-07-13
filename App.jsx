import React from 'react';

class App extends React.Component {
   constructor() {
      super();
		
      this.state = {
         emplyees: 
         [
			{
			"userId":"rirani",
			"jobTitleName":"Developer",
			"firstName":"Romin",
			"lastName":"Irani",
			"preferredFullName":"Romin Irani",
			"employeeCode":"E1",
			"region":"CA",
			"phoneNumber":"408-1234567",
			"emailAddress":"romin.k.irani@gmail.com"
			},
			{
			"userId":"nirani",
			"jobTitleName":"Developer",
			"firstName":"Neil",
			"lastName":"Irani",
			"preferredFullName":"Neil Irani",
			"employeeCode":"E2",
			"region":"CA",
			"phoneNumber":"408-1111111",
			"emailAddress":"neilrirani@gmail.com"
			},
			{
			"userId":"thanks",
			"jobTitleName":"Program Directory",
			"firstName":"Tom",
			"lastName":"Hanks",
			"preferredFullName":"Tom Hanks",
			"employeeCode":"E3",
			"region":"CA",
			"phoneNumber":"408-2222222",
			"emailAddress":"tomhanks@gmail.com"
			}
		 ]
      }
   }
	
   render() {
      return (
         <div className="container">
            <Header/>
            <table className="table table-striped">
               <thead>
      				<tr>
        				<th>User Id</th>
        				<th>Job Title Name</th>
        				<th>First Name</th>
        				<th>Last Name</th>
        				<th>Preferred Full Name</th>
        				<th>Employee Code</th>
        				<th>Region</th>
        				<th>Phone Number</th>
        				<th>Email Address</th>
      				</tr>
    		   </thead>
               <tbody>
                  {this.state.emplyees.map((person, i) => <TableRow key = {i} emplyees = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Emplyee Details</h1>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.emplyees.userId}</td>
            <td>{this.props.emplyees.jobTitleName}</td>
            <td>{this.props.emplyees.firstName}</td>
            <td>{this.props.emplyees.lastName}</td>
            <td>{this.props.emplyees.preferredFullName}</td>
            <td>{this.props.emplyees.employeeCode}</td>
            <td>{this.props.emplyees.region}</td>
            <td>{this.props.emplyees.phoneNumber}</td>
            <td>{this.props.emplyees.emailAddress}</td>
         </tr>
      );
   }
}

export default App;