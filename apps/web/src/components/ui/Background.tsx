export default function Background() {
  return (
    <>
      {/* Base Background */}
      <div className="fixed inset-0 -z-50 bg-[#050816]" />

      {/* Left Glow */}
      <div className="fixed left-[-250px] top-[-250px] -z-40 h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Right Glow */}
      <div className="fixed bottom-[-300px] right-[-300px] -z-40 h-[700px] w-[700px] rounded-full bg-indigo-500/10 blur-[220px]" />

      {/* Grid Pattern */}
      <div
        className="fixed inset-0 -z-30 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
    </>
  );
}
