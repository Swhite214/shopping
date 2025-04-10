import './Modal.css'
const Modal=({
  isOpen,
  onClose,
  title,
  children,
})=>{
  if(!isOpen)return null;
  return (
    <section className="modal-overlay" onClick={onClose}>
      <h1>모달창입니다.</h1>
      <div className="modal-content">
        <h2 className="modal-title">{title}</h2>  
        <div className="modal-body">
          {children}
        </div>
      </div>
    </section>
  )
}
export default Modal;