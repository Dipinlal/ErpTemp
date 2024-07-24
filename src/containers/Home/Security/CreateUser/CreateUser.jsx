import React, { useEffect, useState } from 'react'
import UserSummary from './UserSummary'
import UserDetails from './UserDetails'
// import RoleDetails from './RoleDetails'


function CreateUser({key1,initialPage}) {
    const [page, setpage] = useState(null)
    const [detailPageId, setdetailPageId] = useState(null)
    useEffect(() => {
      setpage(initialPage)
    }, [initialPage,key1])
   
    
  return (
    <div >{page && (
        page === "summary" ? <UserSummary setPage={setpage}  setdetailPageId={setdetailPageId}/> :
        page === "detailed" ? <UserDetails setPage={setpage} detailPageId={detailPageId}/> :
        null
      )}</div>
  )
}

export default CreateUser