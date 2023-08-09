import React from 'react'

export const ItemPlan = ({ plan }) => {
    return (
        <>
            <div key={plan.idPlan} className='container-item-plan'>
                <div className='plan-title'>
                    <h3>{plan.nombrePlan}</h3>

                </div>
                <div className='plan-description'>
                    <h4>Descripción</h4>
                    <p>{plan.descripcion}</p>
                </div>

                <div className='plan-precio'>
                    <h4>Precio</h4>
                    <p>Lps. {plan.costoMensual}</p>
                </div>

                <div>
                    <button className='plan-button'>Comprar</button>
                </div>
            </div>
        </>
    )
}
