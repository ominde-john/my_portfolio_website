import { Terminal } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white font-mono mb-4">
        <span className="text-green-500">04.</span> Establish Connection
      </h2>
      <p className="text-gray-400 mb-10 text-lg">
        My inbox is currently open for new opportunities. Whether you have a question, want to
        discuss a potential vulnerability, or just want to talk infosec, I'll try my best to get
        back to you!
      </p>

      <div className="bg-black border border-gray-800 p-8 rounded-sm relative shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 left-0 w-full h-8 bg-gray-900 border-b border-gray-800 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="ml-4 font-mono text-xs text-gray-500">bash - contact_form.sh</span>
        </div>

        <form className="mt-8 flex flex-col gap-4 text-left" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="font-mono text-green-500 text-sm mb-2 block">{'>'}&nbsp;TARGET_EMAIL</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full bg-gray-900/50 border border-gray-700 p-3 text-white font-mono focus:outline-none focus:border-green-500 focus:bg-black transition-colors"
            />
          </div>
          <div>
            <label className="font-mono text-green-500 text-sm mb-2 block">{'>'}&nbsp;SUBJECT</label>
            <input
              type="text"
              placeholder="Recon Request"
              className="w-full bg-gray-900/50 border border-gray-700 p-3 text-white font-mono focus:outline-none focus:border-green-500 focus:bg-black transition-colors"
            />
          </div>
          <div>
            <label className="font-mono text-green-500 text-sm mb-2 block">{'>'}&nbsp;PAYLOAD</label>
            <textarea
              rows="5"
              placeholder="Your message here..."
              className="w-full bg-gray-900/50 border border-gray-700 p-3 text-white font-mono focus:outline-none focus:border-green-500 focus:bg-black transition-colors resize-y"
            ></textarea>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="font-mono text-xs text-gray-500">Status: Waiting for input...</span>
            <button
              type="submit"
              className="bg-green-500/10 border border-green-500 text-green-500 font-mono py-2 px-6 hover:bg-green-500 hover:text-black transition-all flex items-center justify-center gap-2"
            >
              <Terminal size={18} /> ./transmit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
