export default function Demo() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center">
          <iframe 
            className="w-full max-w-4xl aspect-video"
            src="https://www.youtube.com/embed/c2s5wi7Nq_c?si=6EMgzI7gq0bg9EAx&autoplay=1&mute=1" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
