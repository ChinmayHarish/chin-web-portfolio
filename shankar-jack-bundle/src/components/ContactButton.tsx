interface ContactButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export const ContactButton = ({ 
  href = "tel:9449124052", 
  label = "CONTACT ME",
  className = "" 
}: ContactButtonProps) => {
  return (
    <a 
      href={href}
      className={`group relative inline-flex items-center justify-center px-10 sm:px-14 py-4 sm:py-5 rounded-full transition-transform duration-300 hover:scale-105 active:scale-95 overflow-visible ${className}`}
      style={{
        textDecoration: 'none'
      }}
    >
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(to right, #340068 0%, #a200a2 50%, #b8433d 100%)',
          zIndex: -1
        }}
      />
      <div 
        className="absolute inset-0 rounded-full border-[2.5px] border-white" 
        style={{ zIndex: 0 }}
      />
      <div 
        className="absolute inset-0 rounded-full blur-[14px] opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, #340068 0%, #a200a2 50%, #b8433d 100%)',
          zIndex: -2,
          transform: 'scale(1.05)'
        }}
      />
      <span className="relative z-10 text-white font-bold uppercase tracking-[0.15em] text-[15px] sm:text-[17px] md:text-[20px] leading-none pt-[2px]">
        {label}
      </span>
    </a>
  );
};
