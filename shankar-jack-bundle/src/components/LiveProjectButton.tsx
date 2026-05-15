

interface LiveProjectButtonProps {
  href?: string;
}

export const LiveProjectButton = ({ href }: LiveProjectButtonProps) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="rounded-full border-2 border-accent text-accent px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest transition-colors duration-200 hover:bg-accent/10 active:scale-95 inline-block text-center"
    >
      Live Project
    </a>
  );
};
