export default function AboutUSLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="max-[1200px] mx-auto w-full flex-1 bg-red-700 py-11">
      {children}
    </section>
  )
}
