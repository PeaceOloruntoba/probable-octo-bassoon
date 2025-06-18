export default function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-1/3 bg-gradient-to-br from-[#0F70DA] to-[#007AFF] h-full flex flex-col items-center justify-center text-white font-semibold text-xl text-center">
        <span>Social media shared today,<br />tomorrow or by location</span>
      </div>
      <div className="w-2/3 h-full flex flex-col p-4">
      <img src="" alt="" />
      <span>Create account</span>
      <span>For business, band or celebrity.</span>
      <form className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="firstName">First Name</label>
          <input type="text" className="outline" />
        </div>
      </form>
      </div>
    </div>
  );
}
