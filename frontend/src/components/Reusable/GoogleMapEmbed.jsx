import { FaMapMarkerAlt } from "react-icons/fa"


const GoogleMapEmbed = () => {


  return (
    <div>



          {/* Google Maps Embed */}
          <div className="h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <a
                  href="https://maps.app.goo.gl/2j3WqoMnhtxbB4Ax8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full relative group"
              >
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.964048532276!2d101.579647!3d3.073667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4f1e3b4a3b4b%3A0x0!2zPHAgY2xhc3M9IlVJU2Nyb2xsIj7CtDwvcD4!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Pumpa Squash Academy Subang Branch Location"
                  ></iframe>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100">
                          <p className="text-green-600 dark:text-green-400 font-semibold flex items-center gap-2">
                              <FaMapMarkerAlt />
                              Click to open full map
                          </p>
                      </div>
                  </div>
              </a>
          </div>







    </div>
  )
}

export default GoogleMapEmbed