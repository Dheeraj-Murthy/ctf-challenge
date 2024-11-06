import { useNavigate } from 'react-router-dom';
import "../App.css"; // Make sure Tailwind and any custom styles are included
import HiddenImage from "./HiddenImage"; // Import the hidden component (careful, secrets inside...)

function Home() {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login'); // This will redirect to the login page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100 text-center spooky-bg">
      {/* Heist Header */}
      <div className="max-w-[700px] flex flex-col items-center justify-center">
        <header className="bg-gray-800 p-6 rounded-lg shadow-[0_0_15px_4px_rgba(255,0,0,0.4)] w-[80%] animate-pulse">
          <h1 className="text-5xl font-extrabold text-yellow-500 underline vault-text">
            The Vault Heist
          </h1>
          <p className="mt-4 text-lg text-gray-300 italic">
            &quot;If you&apos;re reading this, I&apos;m already inside. The vault is close, but
            there&apos;s a catch. The key to unlocking it is hidden, and only the one with the right
            credentials can open the vault. Find my account ID and password, and you&apos;ll get what
            you came for...&quot;
          </p>
        </header>

        {/* Shadowy Divider for added mystery */}
        <div className="my-8 w-[70%] h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-50" />

        {/* Hidden content, but who knows what lies beneath */}
        <HiddenImage />

        {/* Cryptic Section */}
        <section className="bg-gray-700 bg-opacity-0 p-4 mt-6 rounded shadow-md w-[75%] text-lg text-gray-200">
          <p className="italic">Secrets and treasures hidden deep within...</p>
          <p className="mt-2 text-sm text-gray-400">
            The vault is waiting to be unlocked, but only by the worthy.
          </p>
        </section>

        {/* Button to go to the login page */}
        <button
          onClick={handleLoginRedirect}
          className="mt-6 px-6 py-3 bg-yellow-600 text-white text-xl rounded-md shadow-md hover:bg-yellow-700 transition-all"
        >
          Access the Vault
        </button>

        {/* Cryptic Footer */}
        <footer className="mt-8 text-lg font-mono vault-footer">
          <p className="text-gray-400">Can you crack the code and get the treasure?</p>
          <p className="text-sm text-gray-600 italic">Or is the vault impenetrable?</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
