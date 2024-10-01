import CardSkeleton from "@/components/CardSkeleton"
export default function loading() {
  return (
    <main>
    <div className="grid grid-cols-3 gap-8">
      {"abcdefghi".split('').map(i => (
        <CardSkeleton key={i} />
      ))}
    </div>
  </main>  )
}
