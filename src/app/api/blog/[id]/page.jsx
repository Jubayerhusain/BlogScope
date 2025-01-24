// src/app/api/blog/[id]/page.jsx

export default async function BlogDetails({ params }) {
  const { id } = params;
  console.log(id);
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await posts.json();

  return (
    <div className="min-h-[700px] py-24 flex justify-center">
      <div className="card hover:bg-blue-50 w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <p className="text-xl font-bold">{data.title}</p>
          <p>{data.body}</p>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>
    </div>
  );
}
