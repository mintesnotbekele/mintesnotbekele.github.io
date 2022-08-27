const FooterContainer =()=>{

      return(
        <>
        <div className="w-full bg-black pt-10 text-gray-700 mt-10 grid grid-cols-3 gap-3">
           <div className="text-center text-3xl font-mono">
                <h1 className="underline">Our Company</h1>
            </div>
        <div className="text-center text-3xl font-mono">
                  <h1 className="underline">Address</h1>
        <div className="text-left text-lg font-serif m-10">
                    <h1>Location </h1>
                    <p>ferensay Omedla St.</p>
                    <p>tel: +251915809706</p>
                    <p>Email: solfitness@ethiopianitftaekwondo.com/</p>
         </div>
            </div>
           <div className="text-center text-3xl font-mono">
           <h1 className="underline">Social Media</h1>
           <div className="text-left text-lg font-serif m-10">
              <p>Facebook</p>
              <p>Instagram</p>
              <p>TikTok</p>
           </div>
           </div>
        </div>
        <div className="text-center bg-black text-gray-700">© 2022 All Rights Reserved</div>
        </>
      );

}
export default FooterContainer;