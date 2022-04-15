//Interfaces
export interface Post{
    serviceName: string,
    title: string,
    image: string,
    details: string,
    serviceId: string,
    ratingCount:number,
    durationMinutes:number,
    rating:number,
    price:number,
    expert:{
        name:string,
        profilePic:string
    }
}


export interface ItemsfromAPI{
    services:Post[];
}

export interface SingleItemData{
    postData:Post;
}

export interface PaginationList{
    postsPerPage:number,
    totalPosts:number,
    paginate:Function,
    currentPage:number,
}


