import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { Post, SingleItemData } from "../../Interfaces/types";
import Head from "next/head";
import SingleItem from "../../Components/SingleItem/singleitem";
import { Context } from "vm";
import { FetchSpecificPost } from "../../services/api/APIs";


export default function SinglePost(props: SingleItemData) {
  return (
    <>
      <Head>
        <title>{props.postData.title}</title>
        {/* Meta Tags */}
        <meta name="description" content={props.postData.details} />
        <meta property="og:title" content={props.postData.title} />
        <meta property="og:image" content={`https://serwstage.s3.us-east-2.amazonaws.com/${props.postData.image}`} />
        <meta property="og:description" content={props.postData.details} />
      </Head>
      <SingleItem postData={props.postData} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: Context
) => {
  const postID: string = context.query.postID;

  //Fetch Data From an API
  const expertData = await FetchSpecificPost(postID);

  const post: Post = await expertData.data;

  return {
    props: {
      postData: {
        serviceName: post.serviceName,
        title: post.title,
        image: post.image,
        details: post.details,
        serviceId: post.serviceId,
        ratingCount: post.ratingCount,
        durationMinutes: post.durationMinutes,
        rating: post.rating,
        price: post.price,
        expert: {
          name: post.expert.name,
          profilePic: post.expert.profilePic,
        },
      },
    },
  };
};

// export const getStaticPaths: GetStaticPaths = async () => {

//   const expertData = await fetch("https://stage-api.serw.io/v1/services");

//   const DD:ItemsfromAPI = await expertData.json();

//   /*Return an object which describes all the dynamic segment values
//     All the postIDs in this case for which this page should pre-generated*/
//   return {
//     //fallback --> Tells NEXT Js whether the paths array contains all supported parameter values
//     //false --> Contains All --> Generates a 404 for an unsupported parameter
//     //true --> Contains Some --> Pre- gnenrates the missing ones dynamically on the server when the requests are coming in
//     fallback: false,
//     paths: DD.services.map((post:Post) => ({
//       params: {
//         postID: post.serviceId,
//       },
//     })),
//   };
// }

// export const getStaticProps: GetStaticProps = async (context:any) => {
//   const postID:string = context.params.postID;

//   //Fetch Data From an API
//   const expertData = await fetch("https://stage-api.serw.io/v1/services/" + postID);

//   const post:Post = await expertData.json();

//   return {
//     props: {
//       postData: {
//         serviceName: post.serviceName,
//         title: post.title,
//         image: post.image,
//         details: post.details,
//         serviceId: post.serviceId,
//         ratingCount: post.ratingCount,
//         durationMinutes: post.durationMinutes,
//         rating: post.rating,
//         price: post.price,
//         expert:{
//           name: post.expert.name,
//           profilePic: post.expert.profilePic
//         }
//       },
//     },
//   };

// }
