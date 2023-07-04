import React, { useContext, useRef } from 'react';
import TaskForm from '../components/TaskForm';
import { dateFormat } from '../helper';
import TaskContext from '../context/TaskContext';
import AuthContext from '../context/AuthContext';



function Popup(props) {
  const{option}=props;
  const{type,data}=option;

  const{deleteTask}=useContext(TaskContext)
  const{message}=useContext(AuthContext);

  const closeButton=useRef(null);
  const onDelete=()=>{
    deleteTask(data.id);
  };
    return (
        <div className="modal" tabIndex="-1" id="task-modal">
  <div className="modal-dialog">
    <div className="modal-content bg-primary">
      <div className="modal-header modal-dialog-centered">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={closeButton}></button>
      </div>
      <div className="modal-body text-white">
      {
        type==="view" ?
        <div>
          <h5>{data.title}</h5>
          <p>{data.description}</p>
          <div className='d-flex'>
            <p>Modified On :{dateFormat(data.modifiedOn)}</p>
            <p className='ms-auto'>Due Date:{dateFormat(data.duedate)}</p>
          </div>
        </div>:type==="edit" ?
        <div>
          <TaskForm isUpdate={true} data={data} btnRef={closeButton} isPopup={true}/>
        </div>:
        <div className='text-white d-flex'>
          <p>
            {
              message!==""? message:
              "Are you sure to delete"
            }
          </p>
          <p>Do you want to  delete the task</p><br></br><br></br>
          <button className='btn-btn-dark' onClick={onDelete}>Yes</button>
          <buttton className="btn-btn-secondary" data-bs-dismiss="modal"aria-label="Close">No</buttton>
          
        </div>
      }
      </div>
    </div>
  </div>
</div>
    );
}

export default Popup;