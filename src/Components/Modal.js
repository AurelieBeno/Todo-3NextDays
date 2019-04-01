// import React from "react";

// import "./cssComponents/Display.css";
import "./cssComponents/Modal.css";
// export class Modal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       show: true
//     };
//   }
//   // Modal = ({ handleClose, show, children }) => {
//   //   const showHideClassName = show
//   //     ? "modal display-block"
//   //     : "modal display-none";
//   // };
//   render() {
//     return (
//       <div
//         class="modal fade"
//         id="exampleModalCenter"
//         tabindex="-1"
//         role="dialog"
//         aria-labelledby="exampleModalCenterTitle"
//         aria-hidden="true"
//       >
//         <div class="modal-dialog modal-dialog-centered" role="document">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title" id="exampleModalCenterTitle">
//                 Modal title
//               </h5>
//               <button
//                 type="button"
//                 class="close"
//                 data-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div class="modal-body">...</div>
//             <div class="modal-footer">
//               <button
//                 type="button"
//                 class="btn btn-secondary"
//                 data-dismiss="modal"
//               >
//                 Close
//               </button>
//               <button type="button" class="btn btn-primary">
//                 Save changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default Modal;
// ****************************************

import React from "react";
import PropTypes from "prop-types";

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      <div
        className="backdrop backdropStyle"
        // style={{ backdropStyle }}
      >
        <div className="modal modalStyle">
          {this.props.children}

          <div className="footer">
            <button onClick={this.props.editCard}>Edit</button>
            <button onClick={this.props.onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
