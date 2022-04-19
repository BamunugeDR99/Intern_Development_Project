import { useState } from "react";
import Pagination from "../../Components/Navigation/pagination";
import { Post, ItemsfromAPI } from "../../Interfaces/types";
import AllItems from "../../Components/ItemList/itemlist";
import { GetServerSideProps } from "next";
import { FetchPosts } from "../../services/api/APIs";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/actions/ProductActions";

export default function ListItems(props: ItemsfromAPI) {

  const dispatch = useDispatch();

useEffect(()=>{

  dispatch<any>(fetchProducts());

},[])








  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(12);

  const indexOfLastPost: number = currentPage * postsPerPage;
  const indexOfFirstPost: number = indexOfLastPost - postsPerPage;
  // Get current posts
  const currentPosts: Post[] = props.services.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  console.log("Current Posts : ", currentPosts);

  // Change page --> Paginate Function
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Head>
        <title>Expert Republic Services</title>
        {/* Meta Tags */}
        <meta
          name="description"
          content="Explore the wide range of services offered by Expert Republic"
        />
        <meta property="og:title" content="Expert Republic Services" />
        <meta
          property="og:image"
          content="data:image/jpeg;base64,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"
        />
        <meta
          property="og:description"
          content="Explore the wide range of services offered by Expert Republic"
        />
      </Head>
      <AllItems services={currentPosts} />

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={props.services.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
}

// //Page is pre-generated per every incoming props
//??? Type of Context?
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const expertData = await FetchPosts();

  const DD: ItemsfromAPI = await expertData.data;

  return {
    props: {
      services: DD.services.map((post: Post) => ({
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
      })),
    },
  };
};

// /*Next JS will execute this function during the pre-rendering process
//     So it will not directly call component function.
//     It will first call getStaticProps
//     getStaticProps -->
//     prepare props for this page
// */
// export const getStaticProps: GetStaticProps = async () => {

// };
