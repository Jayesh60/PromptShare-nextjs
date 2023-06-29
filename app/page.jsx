"use client"
import Feed from "@components/Feed"
import Image from "next/image"
import { useState, useEffect } from "react"

const Home = () => {
  const [bannerImage, setBannerImage] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      // Array of banner images
      const bannerImages = [
        '/assets/images/home1.png',
        '/assets/images/home2.png',
        '/assets/images/home3.png',
        '/assets/images/home4.jpg',
        '/assets/images/home5.jpg',
      ];
      
      // Randomly select a banner image
      const randomIndex = Math.floor(Math.random() * bannerImages.length);
      const selectedImage = bannerImages[randomIndex];
      
      // Set the selected banner image
      setBannerImage(selectedImage);
    }, 2000); // Change image every 5 seconds

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, []);


  return (
    <section className="w-full flex-col flex">
      <div className="relative text-center justify-center flex">
        
        <Image
          src={bannerImage}
          width={100000000}
          height={100000000}
          className="w-full h-[80vh] object-cover text-center"
          alt="Home page banner"
        />
      </div>
        

        <Feed/>
    </section>
  )
}

export default Home