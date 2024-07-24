import { masterApis } from "../masterApi";
import { securityApis } from "../securityApi";



const profileApis = () => {

const {makeAuthorizedRequestSecurity} = securityApis()   
const {makeAuthorizedRequestMaster} = masterApis()

//Profile Summary
const getProfileSummary = async (payload) => {
  
    try {
      const response = await makeAuthorizedRequestSecurity("get","/profile/getprofilesummary",payload);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  //Profile Detail page business entity list
  const getbusinessentitylist = async (payload) => {
  
    try {
      const response = await makeAuthorizedRequestMaster("get","/businessentity/getbusinessentitylist",payload);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return {
   
    getProfileSummary,
    getbusinessentitylist
   
  };
}  


export {

  profileApis
};