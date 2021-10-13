export default function PublicLayout({ children }) {
  return (
    <>
      <div>{children}</div>
      <h1 className="text-gray-300">Hello World</h1>
    </>
  )
}