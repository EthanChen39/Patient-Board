import React from 'react'

export const PatientList = () => {
  return (
    <div className='row mt-5 align-items-start'>
        {/* title board */}
        <div class="col mx-3 alert alert-danger" role="alert">
            <h5>Emergency</h5>
        </div>

        <div class="col mx-3 alert alert-warning" role="alert">
            <h5>Urgent</h5>
        </div>

        <div class="col mx-3 alert alert-primary" role="alert">
            <h5>Okay</h5>
        </div>

        <div className='row mx-1 mt-4 align-items-start'>
            <ul className='col list-group'>
                <li className='list-group-item list-group-item-danger'>
                    An item
                </li>
            </ul>
            
            <ul className='col ms-3 list-group'>
                <li className='list-group-item list-group-item-warning'>
                    Jane
                </li>
                <li className='list-group-item list-group-item-warning'>
                    Ethan
                </li>
                <li className='list-group-item list-group-item-warning'>
                    Red
                </li>
                <li className='list-group-item list-group-item-warning'>
                    Fred
                </li>
            </ul>

            <ul className='col ms-3 list-group'>
                <li className='list-group-item list-group-item-primary'>An item</li>
            </ul>
        </div>
        


    </div>
  )
}
