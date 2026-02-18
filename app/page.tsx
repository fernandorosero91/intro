export default function Home() {
  const imageUrl = "https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg";
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div 
        className="w-full max-w-md overflow-hidden rounded-3xl border-4 border-red-300 bg-white shadow-2xl"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingTop: '16rem'
        }}
      >
        <div className="bg-white p-8">
          <h2 className="mb-4 text-4xl font-bold text-gray-800">Red Heaven</h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
          <div className="flex gap-3">
            <span className="rounded-full bg-red-400 px-6 py-2 text-sm font-medium text-white">
              #tailwind
            </span>
            <span className="rounded-full bg-red-400 px-6 py-2 text-sm font-medium text-white">
              #frontendeverything
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
