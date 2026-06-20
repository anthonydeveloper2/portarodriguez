export default function Footer({ content }) {
  return (
    <footer className="bg-secondary py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">{content}</p>
      </div>
    </footer>
  )
}
