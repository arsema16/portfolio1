import React from 'react';

const Modal = ({
    children,
    estado,
    cambiarEstado
}) => {
    return (
        <>
            {estado &&
                <div className="overlay" onClick={() => cambiarEstado(false)}>
                    <div className='contenedor-modal' onClick={(e) => e.stopPropagation()}>
                        <button className="boton-cerrar" onClick={() => cambiarEstado(false)}>
                            ✕
                        </button>
                        <div className="modal-scroll-content">
                            {children}
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Modal;
