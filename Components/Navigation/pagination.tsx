import { PaginationList } from "../../Interfaces/types";
export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}: PaginationList) {
  const pageNumbers: number[] = [];

  //Push page numbers in to pageNumbers array
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center">
      <div className="py-2">
        <div className="text-center">
          <p className="text-sm text-gray-700">
            Showing
            <span className="font-medium">
              {" "}
              {currentPage * postsPerPage - 12 + 1}{" "}
            </span>
            to
            <span className="font-medium"> {currentPage * postsPerPage} </span>
            of
            <span className="font-medium"> {totalPosts} </span>
            results
          </p>
        </div>
        <nav className="block">
          <ul className="flex pl-0 rounded list-none flex-wrap justify-center">
            <li>
              {pageNumbers.map((number) => (
                <a
                  key=""
                  onClick={() => {
                    paginate(number);
                  }}
                  href="#"
                  className={currentPage === number ? "active" : "inactive"}
                >
                  {number}
                </a>
              ))}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
