const logos = [
  { name: 'Intelbras', src: '/logos/intelbras.svg', className: 'h-5 sm:h-6' },
  { name: 'Hikvision', src: '/logos/hikvision.svg', className: 'h-4 sm:h-5' },
  { name: 'Oracle', src: '/logos/oracle.svg', className: 'h-5 sm:h-6' },
  { name: 'Microsoft', src: '/logos/microsoft.svg', className: 'h-6 sm:h-7' },
  { name: 'Positivo Seg', src: '/logos/positivoseg.svg', className: 'h-4 sm:h-5' },
  { name: 'AWS', src: '/logos/aws.svg', className: 'h-7 sm:h-9' },
]

function LogoTrack() {
  return (
    <>
      {logos.map((logo, i) => (
        <img
          key={i}
          src={logo.src}
          alt={logo.name}
          className={`shrink-0 mx-8 sm:mx-12 w-auto opacity-40 ${logo.className}`}
          loading="lazy"
          draggable={false}
        />
      ))}
    </>
  )
}

export default function Partners() {
  return (
    <section className="relative py-10 sm:py-14 overflow-hidden select-none">
      <p className="text-center text-[11px] text-zinc-600 uppercase tracking-[0.2em] font-medium mb-8 sm:mb-10 px-5">
        Arquitetura robusta com tecnologia de ponta
      </p>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-cam-base to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-cam-base to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee">
          <div className="flex items-center">
            <LogoTrack />
          </div>
          <div className="flex items-center">
            <LogoTrack />
          </div>
        </div>
      </div>
    </section>
  )
}
