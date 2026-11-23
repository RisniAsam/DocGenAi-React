
import logo from "../assets/docgenai.jpg";

function Footer() {
  return (
    <footer className="border-t border-surface-border px-6 pt-16 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="footer-brand">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="" width="50px" className="h-8 w-8 rounded-md" />
            <span className="text-lg font-bold tracking-tight">DocGenAi</span>
          </div>
          <p className="mt-4 max-w-[220px] text-sm text-gray-400">
            AI Legal Document Generator for US businesses
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-gray-400">
          <h4 className="text-sm font-semibold text-white">Product</h4>
          <a href="#how-it-works" className="transition hover:text-white">How It Works</a>
          <a href="#documents" className="transition hover:text-white">Documents</a>
          <a href="#pricing" className="transition hover:text-white">Pricing</a>
          <a href="#faq" className="transition hover:text-white">FAQ</a>
        </div>

        <div className="flex flex-col gap-3 text-sm text-gray-400">
          <h4 className="text-sm font-semibold text-white">Company</h4>
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#blog" className="transition hover:text-white">Blog</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
          <a href="#careers" className="transition hover:text-white">Careers</a>
        </div>

        <div className="flex flex-col gap-3 text-sm text-gray-400">
          <h4 className="text-sm font-semibold text-white">Legal</h4>
          <a href="#privacy" className="transition hover:text-white">Privacy Policy</a>
          <a href="#terms" className="transition hover:text-white">Terms of Service</a>
          <a href="#disclaimer" className="transition hover:text-white">Disclaimer</a>
          <a href="#contact-us" className="transition hover:text-white">Contact Us</a>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 border-t border-surface-border py-8 text-center md:flex-row md:justify-between md:text-left">
        <p className="text-xs text-gray-500">
          © 2025 DocGenAi. All rights reserved. This tool does not replace a licensed attorney.
        </p>
        <p className="mt-1 text-xs text-gray-600">
          Developed by CodersJanity - Distributed by ThemeWagon
        </p>
        <a
          href="#download"
          className="shrink-0 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold transition hover:bg-brand-darkrounded-lg bg-brand px-5 py-2.5 text-sm font-semibold transition hover:bg-brand-dark"
        >
          Download Now
        </a>
      </div>
    </footer>
  );
}

export default Footer;
