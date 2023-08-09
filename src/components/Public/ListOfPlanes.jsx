import React, { useEffect } from 'react'
import { planesService } from '../../services/planes.service'
import { ItemPlan } from './ItemPlan';

export const ListOfPlanes = () => {

    const [planes, setPlanes] = React.useState([]);

    useEffect(() => {
        planesService.getAll().then((planes) => {
            setPlanes(planes.data);
        })
    }, [])

    return (
        <div className='planes'>
            <h1>Planes</h1>
            <div>
                <p>
                    Elige el plan que mejor se adapte a ti y para tu familia.
                </p>
            </div>

            <div className='list-of-planes'>
                {
                    planes.map((plan) => {
                        return (
                            <ItemPlan key={plan.idPlan} plan={plan} />
                        )
                    })
                }
            </div>
        </div>
    )
}
