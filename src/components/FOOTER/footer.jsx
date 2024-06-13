 function FOOTER(){
    return(
        <div>
             <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h5 className="text-lg font-bold mb-2">About Us</h5>
            <p className="text-sm">
              We are a team of passionate developers building awesome products.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h5 className="text-lg font-bold mb-2">Links</h5>
            <ul>
              <li><a href="#" className="text-sm hover:text-gray-400">Home</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Products</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h5 className="text-lg font-bold mb-2">Contact</h5>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
        </div>
    )
 }
 export default FOOTER;