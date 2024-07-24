import React, { useEffect, useState } from 'react'
import RoleSummary from './RoleSummary'
import RoleDetails from './RoleDetails'
// import ProfileNew from './ProfileNew';

function CreateRole({key1,initialPage}) {
    const [page, setpage] = useState(null)
    const [detailPageId, setdetailPageId] = useState(null)
    useEffect(() => {
      setpage(initialPage)
    }, [initialPage,key1])
   
    
  return (
    <div >{page && (
        page === "summary" ? <RoleSummary setPage={setpage}  setdetailPageId={setdetailPageId}/> :
        page === "detailed" ? <RoleDetails setPage={setpage} detailPageId={detailPageId}/> :
        null
      )}</div>
  )
}

export default CreateRole