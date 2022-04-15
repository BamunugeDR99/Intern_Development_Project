import { useRouter } from "next/router";
import { Post,ItemsfromAPI } from "../../Interfaces/types";

export default function AllItems(props:ItemsfromAPI) {
  const router = useRouter();


  function navigateToSinglePost(id:string) {
    router.push("/posts/" + id);
  }

  return (
    <div className="bg-gray-100 w-full min-h-screen gap-4 flex-wrap flex justify-center items-center">
      <div className="container">
        <div className="mt-8 grid lg:grid-cols-3 gap-10">
          {props.services.map((item:Post) => {
            return (
              <div className="card" key={item.serviceId} onClick={()=> navigateToSinglePost(item.serviceId)}>
                {/* Image & Ratings */}
                <div className="relative">
                  <img
                    src={`https://serwstage.s3.us-east-2.amazonaws.com/${item.image}`}
                    alt="stew"
                    className="h-32 sm:h-48 w-full object-cover"
                   
                  />
                  <div className="badge">
                    <svg
                      className="inline-block h-7 w-7 text-amber-400 "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{`${item.rating} (${item.ratingCount} Reviews)`}</span>
                  </div>
                </div>

                {/* Lower Content */}
                <div className="m-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold capitalize">{item.serviceName}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-800"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  {/* Flex box of time & price */}
                  <div className="flex items-center justify-between ml-0 font-medium">
                    {/* Time */}
                    <div className="text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-sm">{`${item.durationMinutes} mins`}</span>
                    </div>
                    {/* Conditional Price */}
                    {item.price > 0 && (
                      <span className="text-sm text-gray-500">{`$ ${item.price}`}</span>
                    )}
                    {item.price === 0 && (
                      <span className="text-sm text-gray-500">Free</span>
                    )}
                  </div>
                </div>

                {/* Trainer Details */}
                <div className="flex items-center justify-start ml-2.5">
                  {/* Conditional Image */}
                  <div >
                    {item.expert.profilePic == null && (
                      <img
                        src="data:image/png;base64,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"
                        alt="stew"
                        className="h-8 sm:h-8 w-8 object-cover rounded-full mb-2"
                      />
                    )}
                    {item.expert.profilePic != null && (
                      <img
                        src={`https://serwstage.s3.us-east-2.amazonaws.com/${item.expert.profilePic}`}
                        alt="stew"
                        className="h-8 sm:h-8 w-8 object-cover rounded-full mb-2"
                      />
                    )}
                  </div>

                  <span className="ml-1 capitalize font-serif font-medium mb-2">{item.expert.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
