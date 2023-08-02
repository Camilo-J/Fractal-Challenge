export function PaginationSection({
  pageNumber,
  page,
  handlePage,
}: {
  pageNumber: number;
  page: number;
  handlePage: (index: number) => void;
}) {
  return (
    <div className="mt-3 flex flex-wrap gap-2 justify-center items-center text-white">
      {[...Array(pageNumber)].map((_x, index) => (
        <button
          className={`bg-sky-450 w-8 rounded-md text-center text-base ${
            page === index + 1 ? "bg-sky-700" : ""
          }`}
          onClick={() => handlePage(index)}
          key={index}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
