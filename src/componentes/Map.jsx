function Map() {
  return (
    <>  
        <div className="w-full h-[450px] rounded-2xl overflow-hidden border border-slate-200 mb-2">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.452911569597!2d-65.40568427463276!3d-24.74565577800443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc100127bab67%3A0xf3d2b68ab7bee4fc!2sUPATECO%20Universidad%20Provincial%20de%20Salta!5e0!3m2!1ses!2sar!4v1793573188564!5m2!1ses!2sar"
            className="w-full h-full border-0"
            width="600" 
            height="450" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="strict-origin-when-cross-origin">
            </iframe>
        </div>
        <div className="bg-white border border-slate-200 shadow-md rounded-2xl p-4 flex items-center gap-3 text-slate-700">
          <div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl text-lg flex items-center justify-center">
            📍
          </div>
          <div>
            <p className="font-bold text-slate-800 text-sm">Sede Central</p>
            <p className="text-xs text-slate-500">Salta Capital, Argentina</p>
          </div>
        </div>
    </>
  )
}

export default Map;
