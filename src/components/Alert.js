// import React from 'react'

// export default function Alert(props) {
//     return (
//        <div className="alert alert-warning alert-dismissible fade show" role="alert">
//   {props.alert}
//   <button type="button" className="close" data-dismiss="alert" aria-label="Close">
//     <span aria-hidden="true">&times;</span>
//   </button>
// </div>
//     )
// }
import React, { useState } from 'react';

export default function Alert(props) {
//   const [visible, setVisible] = useState(true);

//   const handleClose = () => {
//     setVisible(false);
//   };

  

return (
  <div style={{ height: '50px' }}>
    {props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        {props.alert.msg}
        {/* <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button> */}
      </div>
    )}
  </div>
);
}

