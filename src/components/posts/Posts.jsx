import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://cdn.wallpapersafari.com/99/3/R5yzcu.jpg" />
      <Post img="https://chicagoofficemovers.com/wp-content/uploads/2019/01/Woman-Working-on-Laptop.jpg" />
      <Post img="https://www.pixelstalk.net/wp-content/uploads/2016/06/Photos-Download-Fashion-Wallpaper-HD.jpg"/>
      <Post img="https://th.bing.com/th/id/R.ca0eb878815bf11788b42061762e9f1b?rik=9KDQ6XMUrFq%2bEQ&riu=http%3a%2f%2fclipart-library.com%2fimages%2f8TEb5Rxpc.jpg&ehk=7GfR8TW8f7SMTE9v%2b0YhvcXmbGzm3nvPrakXAcbQRGA%3d&risl=&pid=ImgRaw&r=0"/>
      <Post img="https://wallup.net/wp-content/uploads/2016/01/133196-nature-animals-birds-water-parrot-tree_stump.jpg"/>
    </div>
  );
}