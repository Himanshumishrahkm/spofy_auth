import React from "react";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#121212] px-8 py-8 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Welcome */}
        <section>
          <h1 className="text-4xl font-bold">
            Good evening
          </h1>

          <p className="mt-2 text-gray-400">
            What do you want to listen to today?
          </p>
        </section>

        {/* Quick Access */}
        <section className="mt-10">
          <h2 className="mb-5 text-2xl font-bold">
            Quick Access
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

            <div className="flex cursor-pointer items-center rounded-md bg-[#282828] transition hover:bg-[#3a3a3a]">
              <div className="flex h-16 w-16 items-center justify-center bg-green-500 text-2xl">
                ❤️
              </div>

              <p className="px-4 font-semibold">
                Liked Songs
              </p>
            </div>

            <div className="flex cursor-pointer items-center rounded-md bg-[#282828] transition hover:bg-[#3a3a3a]">
              <div className="flex h-16 w-16 items-center justify-center bg-purple-500 text-2xl">
                🎵
              </div>

              <p className="px-4 font-semibold">
                Recently Played
              </p>
            </div>

            <div className="flex cursor-pointer items-center rounded-md bg-[#282828] transition hover:bg-[#3a3a3a]">
              <div className="flex h-16 w-16 items-center justify-center bg-blue-500 text-2xl">
                🎧
              </div>

              <p className="px-4 font-semibold">
                Your Playlist
              </p>
            </div>

            <div className="flex cursor-pointer items-center rounded-md bg-[#282828] transition hover:bg-[#3a3a3a]">
              <div className="flex h-16 w-16 items-center justify-center bg-orange-500 text-2xl">
                🔥
              </div>

              <p className="px-4 font-semibold">
                Trending
              </p>
            </div>

          </div>
        </section>

        {/* Made For You */}
        <section className="mt-12">
          <h2 className="mb-5 text-2xl font-bold">
            Made For You
          </h2>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

            <div className="rounded-lg bg-[#181818] p-4 transition hover:bg-[#282828]">
              <div className="flex aspect-square items-center justify-center rounded-md bg-gray-700 text-5xl">
                🎵
              </div>

              <h3 className="mt-4 font-bold">
                Daily Mix 1
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                Your favorite songs
              </p>
            </div>

            <div className="rounded-lg bg-[#181818] p-4 transition hover:bg-[#282828]">
              <div className="flex aspect-square items-center justify-center rounded-md bg-gray-700 text-5xl">
                🎸
              </div>

              <h3 className="mt-4 font-bold">
                Rock Mix
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                Rock you love
              </p>
            </div>

            <div className="rounded-lg bg-[#181818] p-4 transition hover:bg-[#282828]">
              <div className="flex aspect-square items-center justify-center rounded-md bg-gray-700 text-5xl">
                🎤
              </div>

              <h3 className="mt-4 font-bold">
                Pop Mix
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                Popular hits
              </p>
            </div>

            <div className="rounded-lg bg-[#181818] p-4 transition hover:bg-[#282828]">
              <div className="flex aspect-square items-center justify-center rounded-md bg-gray-700 text-5xl">
                🌙
              </div>

              <h3 className="mt-4 font-bold">
                Chill Mix
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                Relax and chill
              </p>
            </div>

            <div className="rounded-lg bg-[#181818] p-4 transition hover:bg-[#282828]">
              <div className="flex aspect-square items-center justify-center rounded-md bg-gray-700 text-5xl">
                💪
              </div>

              <h3 className="mt-4 font-bold">
                Workout Mix
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                Keep going
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
};

export default Home;