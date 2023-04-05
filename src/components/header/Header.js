import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://th.bing.com/th/id/R.010edbcb0206d4bc24ddcccd1fc307cd?rik=vyYRWmr9OvrOsA&riu=http%3a%2f%2fallpicts.in%2fwp-content%2fuploads%2f2015%2f07%2fBeautiful-Nature-Wallpaper-with-Two-Lotus-Flowers-in-Pink.jpg&ehk=fAzo4nd97vUOJugZ9Y5IT5Ia5JhQC9fK0yQxLVJS1iA%3d&risl=&pid=ImgRaw&r=0"
        alt="google"
      />
    </div>
  );
}