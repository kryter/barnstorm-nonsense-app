import './ModalDialog.css'

export type Props = {
  closeModalDialog: () => void;
}

function ModalDialog({ closeModalDialog }: Props) {

  return (
    <div className="modal-backdrop">
      <div className="modal-dialog">
        <div className="modal-header">
          <h1 className='modal-title'>Here is a Modal Dialog</h1>
          <button className="modal-close-button" onClick={closeModalDialog}>x</button>
        </div>
        <p className="modal-content">
          Here is the modal content.
        </p>
      </div>
    </div>
  );
}

export default ModalDialog;
