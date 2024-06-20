import React from 'react';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <header className="w-full bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-indigo-600">UAPedia</h1>
            <nav>
              <a href="/UAPedia v1.apk" className="text-indigo-600 hover:text-indigo-800 px-3 py-2 rounded-md text-lg font-medium">Download APK</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mt-10">
              Welcome to UAPedia
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Your one-stop resource for the CSE department at University of Asia Pacific
            </p>
            <div className="mt-10">
              <a
                href="/UAPedia v1.apk"
                className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                download
              >
                Download APK
              </a>
            </div>
            <div className="mt-8 max-w-2xl text-left mb-10">
              <h3 className="text-2xl font-bold text-gray-900">Instructions:</h3>
              <ul className="mt-4 text-gray-600 list-disc list-inside">
                <li>Click on the "Download APK" button above to download the app.</li>
                <li>Once downloaded, open the APK file to start the installation.</li>
                <li>If prompted, allow installations from unknown sources in your device settings.</li>
                <li>Follow the on-screen instructions to complete the installation.</li>
                <li>You will receive frequent
                  <span className="text-red-600"> updates</span> for the app. Make sure to keep it updated.
                </li>
                <li>Open the app and enjoy all the features of UAPedia.</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full h-full flex justify-center">
              <img src="https://i.ibb.co/2Yrv1jN/i-Phone-14-Pro-Space-Black-Mockup.png" alt="Placeholder" className="object-contain w-64 h-92 md:w-80 md:h-auto" />
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full bg-white shadow py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">&copy; 2024 UAPedia. All rights reserved.</p>
          <p className="text-gray-600 mt-2">Made with ❤️ by YEAKIN IQRA</p>
          <p className="mt-4 text-violet-900"><a href="mailto:yeakiniqra.connect@gmail.com">yeakiniqra.connect@gmail.com</a></p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
