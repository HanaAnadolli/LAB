import React,{Component} from 'react';
import { variables } from '../Variables';


export class RoomType extends Component{

    constructor(props){
        super(props);

        this.state={
            roomtypes:[],
            departments:[],
            modalTitle:"",
            RoomName:"",
            ShortCode:"",
            DescriptionRoom:"",
            BaseOccupancy:"",
            HighOccupancy:"",
            ExtraBed:"",
            KidsOccupancy:"",
            Amenities:"",
            BasePrice:""

           
        }
    }

    refreshList(){

        fetch(variables.API_URL+'roomtype')
        .then(response=>response.json())
        .then(data=>{
            this.setState({roomtypes:data});
        });

        fetch(variables.API_URL+'department')
        .then(response=>response.json())
        .then(data=>{
            this.setState({departments:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }
    
    changeRoomName =(e)=>{
        this.setState({RoomName:e.target.value});
    }

    changeShortCode =(e)=>{
        this.setState({ShortCode:e.target.value});
    }

    changeDescriptionRoom =(e)=>{
        this.setState({DescriptionRoom:e.target.value});
    }
    changeBaseOccupancy=(e)=>{
        this.setState({BaseOccupancy:e.target.value});
    }
    changeHighOccupancy=(e)=>{
        this.setState({HighOccupancy:e.target.value});
    }
    changeKidsOccupancy=(e)=>{
        this.setState({KidsOccupancy:e.target.value});
    }
    changeExtraBed=(e)=>{
        this.setState({ExtraBed:e.target.value});
    }
    changeAmenities=(e)=>{
        this.setState({Amenities:e.target.value});
    }
    changeBasePrice=(e)=>{
        this.setState({BasePrice:e.target.value});
    }

    addClick(){
        this.setState({
            modalTitle:"Add RoomType",
            RoomName:"",
            ShortCode:"",
            DescriptionRoom:"",
            BaseOccupancy:"",
            HighOccupancy:"",
            ExtraBed:"",
            KidsOccupancy:"",
            Amenities:"",
            BasePrice:""
         
        });
    }
    editClick(rt){
        this.setState({
            modalTitle:"Edit RoomType",
           
            ShortCode:rt.ShortCode,
            DescriptionRoom:rt.DescriptionRoom,
            BaseOccupancy:rt.BaseOccupancy,
            HighOccupancy:rt.HighOccupancy,
            ExtraBed:rt.ExtraBed,
            KidsOccupancy:rt.KidsOccupancy,
            Amenities:rt.Amenities,
            BasePrice:rt.BasePrice
          
        });
    }

    createClick(){
        fetch(variables.API_URL+'roomtype',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
               
                ShortCode:this.state.ShortCode,
                DescriptionRoom:this.state.DescriptionRoom,
                BaseOccupancy:this.state.BaseOccupancy,
                HighOccupancy:this.state.HighOccupancy,
                ExtraBed:this.state.ExtraBed,
                KidsOccupancy:this.state.KidsOccupancy,
                Amenities:this.state.Amenities,
                BasePrice:this.state.BasePrice
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
        fetch(variables.API_URL+'roomtype',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                RoomName:this.state.RoomName,
                ShortCode:this.state.ShortCode,
                DescriptionRoom:this.state.DescriptionRoom,
                BaseOccupancy:this.state.BaseOccupancy,
                HighOccupancy:this.state.HighOccupancy,
                ExtraBed:this.state.ExtraBed,
                KidsOccupancy:this.state.KidsOccupancy,
                Amenities:this.state.Amenities,
                BasePrice:this.state.BasePrice
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

    deleteClick(name){
        if(window.confirm('Are you sure?')){
        fetch(variables.API_URL+'room/'+name,{
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


    render(){
        const {
         
            roomtypes,
            modalTitle,
            RoomName,
            ShortCode,
            DescriptionRoom,
            BaseOccupancy,
            HighOccupancy,
            ExtraBed,
            KidsOccupancy,
            Amenities,
            BasePrice
           
        }=this.state;

        return(
<div>

    <button type="button"
    className="btn btn-primary m-2 float-end"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    onClick={()=>this.addClick()}>
        Add RoomType
    </button>
    <table className="table table-striped">
    <thead>
    <tr>
        <th>
            RoomName
        </th>
        <th>
           ShortCode
        </th>
        <th>
            DescriptionRoom
        </th>
        <th>
            BaseOccupancy
        </th>
        <th>
            HighOccupancy
        </th>
        <th>
            ExtraBed
        </th>
        <th>
           KidsOccupancy
        </th>
        <th>
            Amenities
        </th>
        <th>
            BasePrice
        </th>
        <th>
            Options
        </th>
    </tr>
    </thead>
    <tbody>
        {roomtypes.map(rt=>
            <tr key={rt.RoomName}>
                <td>{rt.RoomName}</td>
                <td>{rt.ShortCode}</td>
                <td>{rt.DescriptionRoom}</td>
                <td>{rt.BaseOccupancy}</td>
                <td>{rt.HighOccupancy}</td>
                <td>{rt.ExtraBed}</td>
                <td>{rt.Kids}</td>
                <td>{rt.Amenities}</td>
                <td>{rt.BasePrice}</td>                
                <td>
                <button type="button"
                className="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.editClick(rt)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </button>

                <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.deleteClick(rt.RoomName)}>
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
            <span className="input-group-text">ShortCode</span>
            <input type="text" className="form-control"
            value={ShortCode}
            onChange={this.changeShortCode}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">DescriptionRoom</span>
            <input type="text" className="form-control"
            onChange={this.changeDescriptionRoom}
            value={DescriptionRoom}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">BaseOccupancy</span>
            <input type="text" className="form-control"
            onChange={this.changeBaseOccupancy}
            value={BaseOccupancy}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">HighOccupancy</span>
            <input type="text" className="form-control"
            onChange={this.changeHighOccupancy}
            value={HighOccupancy}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">ExtraBed</span>
            <input type="text" className="form-control"
            onChange={this.changeExtraBed}
            value={ExtraBed}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">KidsOccupancy</span>
            <input type="text" className="form-control"
            onChange={this.changeKidsOccupancy}
            value={KidsOccupancy}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Amenities</span>
            <input type="text" className="form-control"
            onChange={this.changeAmenities}
            value={Amenities}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">BasePrice</span>
            <input type="text" className="form-control"
            onChange={this.changeBaseOccupancy}
            value={BaseOccupancy}/>
        </div>




    


     </div>
  
    </div>

    {RoomName==" "?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.createClick()}
        >Create</button>
        :null}

        {RoomName=null ?
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