export default function Home() {
  const imageUrl = "https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg";
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200 p-4">
      <div className="w-full max-w-2xl overflow-hidden rounded-3xl border-4 border-red-300 bg-white shadow-2xl">
        <img
          src={imageUrl}
          alt="Red Heaven landscape"
          className="h-80 w-full object-cover"
        />
        <div className="p-12">
          <h2 className="mb-6 text-5xl font-bold text-gray-900">Red Heaven</h2>
          <p className="mb-8 text-xl leading-relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
          <div className="flex gap-4">
            <span className="rounded-full bg-red-400 px-8 py-3 text-base font-semibold text-white">
              #tailwind
            </span>
            <span className="rounded-full bg-red-400 px-8 py-3 text-base font-semibold text-white">
              #frontendeverything
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
