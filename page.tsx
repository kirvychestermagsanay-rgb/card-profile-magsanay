import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2x1 p-6 text-center mt-6">
      <img src="/kirvy.jpg" alt="Kirvy's Photo"  className="w-24 h-24 mx-auto rounded-full mb-4"/>
      <h2 className="text-xl text-black font-semibold">Kirvy Chester Magsanay</h2> 
      <p className="text-black">2nd Year Student / BSIT</p>
      <div className="flex justify-center gap-4 mt-4">
        <a target="_blank" href="https://www.facebook.com/kerbe.magsanay.9/" className="text-black dark:md:hover:bg-blue-300">Facebook</a>
      <a target="_blank" href="https://www.instagram.com/kerbchester/?next=%2F" className="text-black dark:md:hover:bg-pink-300">Instagram</a>
      <a target="_blank" href="https://github.com/kirvychestermagsanay-rgb" className="text-black dark:md:hover:bg-gray-300">GitHub</a>
      </div>
    
    </div>
    
    
  );
}
