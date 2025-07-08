export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface eachComment{
    postId:number;
    name:string;
    email:string;
    comment: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo:{
      lat:string;
      lng:string;
    }
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

