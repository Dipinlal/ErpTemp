import React, { useEffect, useState } from 'react'
import ProfileSummary from './ProfileSummary'
import ProfileNew from './ProfileNew';

function CreateProfile({key1,initialPage}) {
    const [page, setpage] = useState(null)
    const [detailPageId, setdetailPageId] = useState(null)
    useEffect(() => {
      setpage(initialPage)
    }, [initialPage,key1])
   
    
  return (
    <div >{page && (
        page === "summary" ? <ProfileSummary setPage={setpage}  setdetailPageId={setdetailPageId}/> :
        page === "new" ? <ProfileNew setPage={setpage} detailPageId={detailPageId}/> :null
      )}</div>
  )
}

export default CreateProfile