import apisauce from "apisauce";

const baseURL = 'https://localhost:';
export const GENERAL_HEADERS = {
    "X-Auth-Token": "f71cc937e0304e22b362fd72d75649e1"
};

export const create = () => {
    const api = apisauce.create({
        baseURL,
        headers: GENERAL_HEADERS,
    });


    const fetchAllConferences = () => {
        return api.get(`/conferences`);
    };
    const fetchApplications = () =>{
      return api.get('/applications');
    };
    const fetchConference = (id:number) =>{
      return api.get(`/conference/${id}`);
    };
    const fetchSubmitApplication = (id: number, status: string) =>{
      return api.post(`/application/${id}/${status}`);
    };
    return {
      fetchAllConferences,
      fetchApplications,
      fetchConference,
      fetchSubmitApplication
    }
};
