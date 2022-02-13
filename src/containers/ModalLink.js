import close from '../blue-close.png';
import React, {useState} from "react";
import "./ModalLink.css";

export default function ModalLink({state, handleClose}) {
    const [allowCopy, setCopy] = useState(true);
    function copyLink() {
      navigator.clipboard.writeText(window.location.href);
      setCopy(false);
    }
    
    return(
      <div className={"modal fade " +  (state ? "show d-block": "d-none")} role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Share the link!</h5>
            <input type="image" src={close} class="close" data-dismiss="modal" onClick={() => {setCopy(true); handleClose();}}/>
          </div>
          <div class="modal-body">
            <input class="form-control" type="text" value={window.location.href} readOnly/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" className='copy-btn' disabled={!allowCopy} onClick={copyLink}>{allowCopy? "Copy" : "Copied"}</button>
          </div>
          
        
        </div>
      </div>
    </div>
    );
}