import { useEffect,useState } from "react";
    const images = ["https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/WRS/GW/pc_unrec_june_ubs._CB554831429_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/Aman/June/5300-Kitchen---Summer-appliances-hero---May_1236X1080_Water-bottler--lunc-box-pc-v2._CB555049279_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/June/MFD/Unrec/24-1._CB554830332_.jpg"];

    const HERO = () => {
        const [currentIndex, setCurrentIndex] = useState(0);
    
        // Update the displayed image
        const updateImage = () => {
            const sliderImage = document.getElementById("sliderImage");
            sliderImage.src = images[currentIndex];
        };
    
        // Function to show the previous image
        const prevImage = () => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        };
    
        // Function to show the next image
        const nextImage = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        };
    
        useEffect(() => {
            // Automatically change image every 3 seconds
            const intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000);
    
            // Clean up interval on component unmount
            return () => clearInterval(intervalId);
        }, []);
    
        useEffect(() => {
            updateImage();
        }, [currentIndex]);
    
    return(
        <div>
            {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/WRS/GW/pc_unrec_june_ubs._CB554831429_.jpg" alt="" /> */}
            <div className="image-slider w-auto h-auto object-cover ">
            <img id="sliderImage" src={images[0]} alt="slider" className="w-full h-auto"  />
            {/* <button onClick={prevImage} className="prev-button">Previous</button>
            <button onClick={nextImage} className="next-button">Next</button> */}
        </div>
    
        </div>
    )
}

export default HERO;