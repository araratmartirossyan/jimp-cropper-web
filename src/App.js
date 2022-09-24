import { JimpDemo } from "./components/JimpDemo/JimpDemo";
import "./styles.css";

export default function App() {
  return (
    <JimpDemo
      imageUrl={
        "https://images.unsplash.com/photo-1602785164803-9a6cf611f3b6?w=1000&q=80"
      }
      x={300}
      y={300}
      width={200}
      height={200}
    />
  );
}
