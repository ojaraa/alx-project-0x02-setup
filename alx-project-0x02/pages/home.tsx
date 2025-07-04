import { useState } from "react";
import Card from "../components/common/Card";
import PostModal, { Post } from "../components/common/PostModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);
    
    const handleAddPost = (post: Post) => {
    setPosts((prevPosts) => [...prevPosts, post]);
  };
  return (
    <>
      <h1>Property Listing Page</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add New Post
      </button>

    <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      <div className="grid grid-cols-4 gap-7">
        {airbnbMockCards?.map((card) => (
          <Card
            tags={card?.tags}
            title={card?.title}
            description={card?.location}
            content={card?.content}
            imageUrl={card?.image}
            key={card?.id}
          />
        ))}
      </div>
    </>
  );
};

export default Home;

export const airbnbMockCards = [
  {
    id: 1,
    title: "Cozy Cabin in the Woods",
    image: "https://source.unsplash.com/featured/?cabin,forest",
    location: "Asheville, NC",
    tags: ["Cabin", "Nature", "WiFi", "Fireplace"],
    content:
      "Escape to this charming cabin nestled in the forest, perfect for a relaxing getaway surrounded by nature.",
  },
  {
    id: 2,
    title: "Modern Loft Downtown",
    image: "https://source.unsplash.com/featured/?loft,city",
    location: "New York, NY",
    tags: ["Loft", "City View", "Air Conditioning", "Gym"],
    content:
      "Stay in the heart of the city with this stylish modern loft, offering stunning city views and top-notch amenities.",
  },
  {
    id: 3,
    title: "Beachside Bungalow",
    image: "https://source.unsplash.com/featured/?beach,house",
    location: "Santa Monica, CA",
    tags: ["Beachfront", "Hot Tub", "Pet Friendly", "BBQ"],
    content:
      "Enjoy the ultimate beach vacation at this cozy bungalow just steps from the sand, complete with a hot tub and BBQ area.",
  },
  {
    id: 4,
    title: "Mountain Retreat with Views",
    image: "https://source.unsplash.com/featured/?mountain,cabin",
    location: "Denver, CO",
    tags: ["Mountain View", "Hiking", "Sauna", "WiFi"],
    content:
      "Unwind at this mountain retreat featuring breathtaking views, nearby hiking trails, and a relaxing sauna.",
  },
  {
    id: 5,
    title: "Rustic Farmhouse Getaway",
    image: "https://source.unsplash.com/featured/?farmhouse,country",
    location: "Nashville, TN",
    tags: ["Farm Stay", "Quiet", "Countryside", "Breakfast Included"],
    content:
      "Experience the charm of country living at this rustic farmhouse, offering peaceful surroundings and homemade breakfasts.",
  },
];
