import { securityApis } from "../securityApi";



const profileApis = () => {

const {makeAuthorizedRequestSecurity} = securityApis()   

const getProfileSummary = async (payload) => {
  
    try {
      const response = await makeAuthorizedRequestSecurity("get","/profile/getprofilesummary",payload);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return {
   
    getProfileSummary
   
  };
}  


export {

  profileApis
};