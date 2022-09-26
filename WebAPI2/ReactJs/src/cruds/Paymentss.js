import React,{Component} from 'react';
import variables from '../Variables.js';
import Navbar from '../sideBar/components/Navbar.js';

export class Paymentss extends Component{
    constructor(props){
        super(props);

        this.state= {
            paymentss:[],
            modalTitle:"",
            ClientID: 0,
            Cash:"",
            Installments:"",
            Intime:"",
            Done:"",
           
        }
    }

    refreshList(){
        fetch(variables.API_URL+ 'paymentss')
        .then(response=>response.json())
        .then(data=>{
            this.setState({paymentss:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    changeCash = (e) => {
        this.setState({Cash:e.target.value});
    }

    changeInstallments = (e) => {
        this.setState({Installments:e.target.value});
    } 

    changeIntime = (e) => {
        this.setState({Intime:e.target.value});
    }

    addClick(){
        this.setState({
            modalTitle:"Add Payment",
            ClientID:0,
            Cash:"",
            Installments:"",
            Intime:"",
            Done:""
        });
    }

    editClick(paymentss){
        this.setState({
            modalTitle:"Edit Payments",
            ClientID:paymentss.ClientID,
            Cash:paymentss.Cash,
            Installments:paymentss.Installments,
           Intime:paymentss.Intime,
            Done:paymentss.Done
        });
    }

    createClick(){
        fetch(variables.API_URL+'paymenss',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Cash:this.state.Cash,
                Installments:this.state.Installments,
                Intime:this.state.Intime,
                Done:this.state.Done
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }

    updateClick(){
        fetch(variables.API_URL+'paymentss',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                ClientID:this.state.ClientID,
                Cash:this.state.Cash,
                Installments:this.state.Installments,
                Intime:this.state.Intime,
                Done:this.state.Done
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }

    deleteClick(id){
        if(window.confirm('Are you sure?')){
        fetch(variables.API_URL+'paymentss/'+id,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
        }
    }

    imageUpload=(e)=>{
        e.preventDefault();

        const formData=new FormData();
        formData.append("file",e.target.files[0],e.target.files[0].name);

        fetch(variables.API_URL+'paymentss/savefile',{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({PhotoFileName:data});
        })
    }

    render(){
        const {
            paymentss,
            modalTitle,
            ClientID,
            Installments,
            Intime,
            Done,
            
        }=this.state;

        return(
<div>
<Navbar/>
<button type="button"
className="btn btn-primary m-2 float-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
onClick={()=>this.addClick()}>
    Add Payment
</button>
<table className="table table-striped">
<thead>
<tr>
    <th>
      ClientID
    </th>
    <th>
        Cash
    </th>
    <th>
      Installments
    </th>
    <th>
       Intime
    </th>
    <th>
        Options
    </th>
</tr>
</thead>
<tbody>
    {paymentss.map(paymentss=>
        <tr key={paymentss.ClientID}>
            <td>{paymentss.Cash}</td>
            <td>{paymentss.Installments}</td>
            <td>{paymentss.Intime}</td>
            <td>{paymentss.Done}</td>
            <td>
            <button type="button"
            className="btn btn-light mr-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={()=>this.editClick(paymentss)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>

            <button type="button"
            className="btn btn-light mr-1"
            onClick={()=>this.deleteClick(paymentss.ClientID)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

            </td>
        </tr>
        )}
</tbody>
</table>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
<div className="modal-dialog modal-lg modal-dialog-centered">
<div className="modal-content">
<div className="modal-header">
   <h5 className="modal-title">{modalTitle}</h5>
   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
   ></button>
</div>

<div className="modal-body">
<div className="d-flex flex-row bd-highlight mb-3">
 
 <div className="p-2 w-50 bd-highlight">

    <div className="input-group mb-3">
        <span className="input-group-text">Done</span>
        <input type="text" className="form-control"
        value={Done}
        onChange={this.changeDone}/>
    </div>

    <div className="input-group mb-3">
        <span className="input-group-text">Installments</span>
        <input type="text" className="form-control"
        value={Installments}
        onChange={this.changeInstallments}/>
    </div>

    <div className="input-group mb-3">
        <span className="input-group-text">Intime</span>
        <input type="date" className="form-control"
        value={Intime}
        onChange={this.changeIntime}/>
    </div>


 </div>
 <div >
     
     
 </div>
</div>

{ClientID==0?
    <button type="button"
    className="btn btn-primary float-start"
    onClick={()=>this.createClick()}
    >Create</button>
    :null}

    {ClientID!=0?
    <button type="button"
    className="btn btn-primary float-start"
    onClick={()=>this.updateClick()}
    >Update</button>
    :null}
</div>

</div>
</div> 
</div>


</div>
        )
    }
}

export default Paymentss
