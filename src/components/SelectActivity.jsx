import React from 'react'

export const SelectActivity = ({activities, handleChange}) => {
    
  return (
    <div className='selector-activity-detail'>
        <select name="selectActivity" onChange={handleChange}>
        <option value="">To See detail, Select Activity</option>
        {activities.map((activity) => {
            const {id,name} = activity;
                return (
                <option key={id}>
                    {name}
                </option>
                );
            }
        )}
        </select>
    </div>
  )
}

