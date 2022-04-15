import expertAPI from "../ExpertAPI";


export  function FetchPosts(){
    
    return expertAPI.get('/services?take=72');
}

export function FetchSpecificPost(id:string){
    
    return expertAPI.get(`/services/${id}`); 
}

