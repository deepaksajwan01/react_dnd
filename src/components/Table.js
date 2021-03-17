import React from 'react'

export default function Table() {
  return (
    <div>
     <table>
          <tr>
             <div className="table-head-wrap">
              <th className="table-head">
                <div className="table-head-left">
                  
                </div>
                <div className="right">
                  right
                </div>
              </th>
             </div>
            <th>Date Created</th>
            <th>Device Type</th>
            <th>Data Source</th>
            <th>Case Status</th>
            <th>Action</th>
          </tr>
        </table>
    </div>
  )
}
