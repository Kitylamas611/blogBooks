import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-black text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Logo */}

        <h2 className="text-6xl font-extrabold text-center">
          BookBlog
        </h2>

        {/* Descripción */}

        <p className="text-gray-300 text-center mt-6 text-lg max-w-3xl mx-auto">
          Discover the latest book reviews, fantasy worlds,
          science fiction adventures and literary news.
        </p>

        {/* Newsletter */}

        <div className="text-center mt-12">

          <h3 className="text-red-500 text-4xl italic font-bold">
            Join Our Newsletter
          </h3>

          <button className="mt-4 font-bold hover:text-red-500 transition">
            Subscribe →
          </button>

        </div>

        {/* Redes */}

        <div className="flex justify-center gap-8 text-2xl mt-12">

          <FaFacebookF />

          <FaInstagram />

          <FaXTwitter />

          <FaYoutube />

          <FaTiktok />

        </div>

        {/* Links */}

        <div className="flex flex-wrap justify-center gap-10 mt-14 uppercase text-sm tracking-widest">

          <a href="#">Privacy Policy</a>

          <a href="#">Terms</a>

          <a href="#">Advertise</a>

          <a href="#">Contact</a>

        </div>

        {/* Copyright */}

        <p className="text-center text-gray-500 mt-14 text-sm">

          © {new Date().getFullYear()} BookBlog.
          Built with Django, React and TailwindCSS.

        </p>

      </div>

    </footer>
  );
}

export default Footer;