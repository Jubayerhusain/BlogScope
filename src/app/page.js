import Link from 'next/link';
import Bannar from './../Components/Bannar/Bannar';
const Home = async () => {
  const posts = await fetch ('https://jsonplaceholder.typicode.com/posts')
  const data = await posts.json()
  return (
    <div className='min-h-screen'>
      {/* Bannar section */}
      <Bannar />
      <div className='w-7/12 mx-auto'>
        <h1 className='text-center mt-20 text-5xl text-gray-700 font-bold'>Our Blogs</h1>
        <label className="input w-96 mx-auto my-8 input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <kbd className="kbd kbd-sm">⌘</kbd>
        <kbd className="kbd kbd-sm">K</kbd>
      </label>
      </div>
      <div className=" my-12 gap-5 grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
      {
        data.map((post)=>(
          <div key={post.id} className="card hover:bg-blue-50 bg-base-100 shadow-xl">
          <div className="card-body">
          <Link href={`/api/blog/${post.id}`}>
              <p className='text-xl font-bold hover:text-red-400 hover:underline'>{post.title}</p>
            </Link>
            <p>{post.body}</p>
            <div className="card-actions justify-end">
              <Link 
              href={`/api/blog/${post.id}`}
              className="badge badge-outline">Details</Link>
            </div>
          </div>
        </div>
        ))
      }
      </div>
    </div>
  )
}

export default Home