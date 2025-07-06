export default function Footer() {
  return (
    <footer className="py-24 bg-dark text-center border-t border-white/10">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-2xl font-black mb-4 opacity-90">
          JP_Stripes
        </div>
        <div className="text-sm opacity-50 mb-8">
          Stripe User Group Japan
        </div>
        <a 
          href="https://jpstripes.com" 
          className="cursor-hover text-primary-light transition-all duration-300 hover:text-primary relative inline-block"
        >
          jpstripes.com
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-light transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    </footer>
  );
} 