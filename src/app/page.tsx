import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141414]">
      <div className="flex flex-row ml-7 pt-3">
        
        // Sidebar
        <nav className="text-white border-r-2 border-neutral-700">
          <h1 className="text-3xl mb-20 mr-7">Instagram</h1>
          <ul>
            <li className="mb-3">Home</li>
            <li className="mb-3">Search</li>
            <li className="mb-3">Explore</li>
            <li className="mb-3">Reels</li>
            <li className="mb-3">Messages</li>
            <li className="mb-3">Notifications</li>
            <li className="mb-3">Create</li>
            <li className="mb-12">Profile</li>
            <li className="mb-3">Threads</li>
            <li>More</li>
          </ul>
        </nav>
        
        // Stories + first post on feed
        <div className="ml-10 flex flex-col">
          // Stories
          <div className="flex flex-row space-x-5">
            
            <div className="flex flex-col">
              <div className="image-wrapper w-16 h-16 rounded-full p-1 bg-gradient-to-r from-yellow-400 to-pink-600">
                <Image
                  src="/images/aasalogo.JPEG"
                  width={55}
                  height={55}
                  alt="Profile Picture"
                  className="rounded-full w-full h-full"
                />
              </div>
              <div className="text-white text-xs pt-1 flex justify-center">
                <p>uncaasa</p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="image-wrapper w-16 h-16 rounded-full p-1 bg-gradient-to-r from-yellow-400 to-pink-600">  
                <Image
                  src="/images/uncbasketball.jpg"
                  width={55}
                  height={55}
                  alt="Profile Picture"
                  className="rounded-full"
                />
              </div>
              <div className="text-white text-xs pt-1 flex justify-center">
                <p>uncmbb</p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="image-wrapper w-16 h-16 rounded-full p-1 bg-gradient-to-r from-yellow-400 to-pink-600">  
                <Image
                  src="/images/boat.jpg"
                  width={55}
                  height={55}
                  alt="Profile Picture"
                  className="rounded-full"
                />
              </div>
              <div className="text-white text-xs pt-1 flex justify-center">
                <p>lilyachty</p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="image-wrapper w-16 h-16 rounded-full p-1 bg-gradient-to-r from-yellow-400 to-pink-600">  
                <Image
                  src="/images/panthers.jpg"
                  width={55}
                  height={55}
                  alt="Profile Picture"
                  className="rounded-full"
                />
              </div>
              <div className="text-white text-xs pt-1 flex justify-center">
                <p>panthers</p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="image-wrapper w-16 h-16 rounded-full p-1 bg-gradient-to-r from-yellow-400 to-pink-600">  
                <Image
                  src="/images/dcthedon.jpg"
                  width={55}
                  height={55}
                  alt="Profile Picture"
                  className="rounded-full"
                />
              </div>
              <div className="text-white text-xs pt-1 flex justify-center">
                <p>dcthedon</p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="image-wrapper w-16 h-16 rounded-full p-1 bg-gradient-to-r from-yellow-400 to-pink-600">  
                <Image
                  src="/images/shai.jpg"
                  width={55}
                  height={55}
                  alt="Profile Picture"
                  className="rounded-full"
                />
              </div>
              <div className="text-white text-xs pt-1 flex justify-center">
                <p>shai</p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="image-wrapper w-16 h-16 rounded-full p-1 bg-gradient-to-r from-yellow-400 to-pink-600">  
                <Image
                  src="/images/maye.jpg"
                  width={55}
                  height={55}
                  alt="Profile Picture"
                  className="rounded-full"
                />
              </div>
              <div className="text-white text-xs pt-1 flex justify-center">
                <p>drakemaye</p>
              </div>
            </div>
          </div>
        </div>

        // Suggested accounts
        <div className="flex flex-col ml-28">
          
          <div className="flex flex-row">  
            <div>
              <Image
                src="/images/pfp.jpeg"
                width={55}
                height={55}
                alt="Profile Picture"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col ml-3 justify-center">
              <p className="text-white text-sm">kcreech_</p>
              <p className="text-gray-600 text-xs">Kerry Creech</p>
            </div>
            <div className="flex items-center ml-14 text-blue-800 text-sm">
              <p>Switch</p>
            </div>
          </div>
          
          <div className="flex flex-row space-x-20 mt-10">
            <p className="text-gray-400 text-sm">Suggested for you</p>
            <p className="text-white text-sm">See all</p>
          </div>

          <div className="flex flex-row mt-5">  
            <div>
              <Image
                src="/images/tana.jpg"
                width={55}
                height={55}
                alt="Profile Picture"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col ml-3 justify-center">
              <p className="text-white text-sm">tana</p>
              <p className="text-gray-400 text-xs">Suggested for you</p>
            </div>
            <div className="flex text-blue-800 text-sm ml-8 items-center">
              <p>Follow</p>
            </div>
          </div>

          <div className="flex flex-row mt-5">  
            <div>
              <Image
                src="/images/bryceyoung.jpg"
                width={55}
                height={55}
                alt="Profile Picture"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col ml-3 justify-center">
              <p className="text-white text-sm">bryceyoung</p>
              <p className="text-gray-400 text-xs">Suggested for you</p>
            </div>
            <div className="flex text-blue-800 text-sm ml-8 items-center">
              <p>Follow</p>
            </div>
          </div>

          <div className="flex flex-row mt-5">  
            <div>
              <Image
                src="/images/tennistv.jpg"
                width={55}
                height={55}
                alt="Profile Picture"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col ml-3 justify-center">
              <p className="text-white text-sm">tennistv</p>
              <p className="text-gray-400 text-xs">Suggested for you</p>
            </div>
            <div className="flex text-blue-800 text-sm ml-8 items-center">
              <p>Follow</p>
            </div>
          </div>

          <div className="flex flex-row mt-5">  
            <div>
              <Image
                src="/images/kyrgios.jpg"
                width={55}
                height={55}
                alt="Profile Picture"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col ml-3 justify-center">
              <p className="text-white text-sm">kyrgios</p>
              <p className="text-gray-400 text-xs">Suggested for you</p>
            </div>
            <div className="flex text-blue-800 text-sm ml-8 items-center">
              <p>Follow</p>
            </div>
          </div>

        </div>

      </div>
    </main>
    
  );
}
