export default function ProjectPage() {
  return (
    <main className="bg-black text-white min-h-screen px-10 py-20">
      
      <h1 className="text-5xl font-light mb-6">
        Project Two
      </h1>

      <p className="max-w-2xl opacity-70 mb-10">
        A modern website focused on strong visual identity and user experience.
      </p>

      <video 
        src="/shipyards.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[500px] object-cover mb-10"
      />

      <p className="max-w-2xl opacity-70">
        This project highlights a clean layout with refined typography and motion.
      </p>

    </main>
  );
}