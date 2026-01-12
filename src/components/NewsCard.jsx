import { FaStar, FaEye, FaBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  // console.log(news);
  const {
    id,
    title,
    author,
    rating,
    total_view,
    thumbnail_url,
    details,
    tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl">
      {/* Author Section */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Thumbnail */}
      <figure className="px-4 pt-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full h-60 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body pt-4">
        <h2 className="card-title text-lg font-bold">{title}</h2>

        <p className="text-gray-600">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
        </p>

        <Link
          to={`/news/${id}`}
          className="text-pink-600 font-semibold cursor-pointer"
        >
          Read More
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="badge badge-outline">
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 border-t pt-4">
          <div className="flex items-center gap-1 text-orange-500">
            {[...Array(rating.number)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-gray-700 ml-1">{rating.number}</span>
          </div>

          <div className="flex items-center gap-1 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
