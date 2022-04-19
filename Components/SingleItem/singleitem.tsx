import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import { SingleItemData } from "../../Interfaces/types";

export default function SingleItem(props:SingleItemData) {

    //Testing Redux Setup 
    const product  = useSelector((state:RootStore) => state.product);
    console.log(product);


    return (
      <div className="container content-center mt-5 m-10">
        <div className="singleCard m-5">
          {/* Grid Containing image & Side Details */}
          <div className="grid sm:grid-cols-2 gap-5 mb-3">
            <div className="mb-3 mr-5">
              <img
                className="h-32 sm:h-full w-full object-cover rounded-xl m-3"
                src={`https://serwstage.s3.us-east-2.amazonaws.com/${props.postData.image}`}
                alt="Card image cap"
              />
            </div>
  
            <div className="m-5">
              <h3 className="text-gray-500 font-bold uppercase text-3xl">
                {props.postData.serviceName}
              </h3>
              <h5 className="text-gray-700 font-bold  text-xl">{props.postData.title}</h5>
              <p className="text-gray-700">{props.postData.details}</p>
  
              {/* Conditional Price */}
              {props.postData.price > 0 && (
                <span className="text-sm text-gray-500">{`$ ${props.postData.price}`}</span>
              )}
              {props.postData.price === 0 && (
                <span className="text-sm text-gray-500">Free</span>
              )}
  
              {/* Details */}
              <div className="mt-3">
                <p className="text-gray-700 font-bold">{`No Of Reviews : ${props.postData.ratingCount}`}</p>
                <h3 className="text-gray-700 font-bold">{`Time : ${props.postData.durationMinutes} mins`}</h3>
                <h5 className="text-gray-700 font-bold">{`Coach : ${props.postData.expert.name}`}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  