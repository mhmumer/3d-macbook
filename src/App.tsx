import { Canvas } from "@react-three/fiber"
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer.js";

const App = () => {
  return (
    <Canvas camera={{ fov: 10, position: [0, -10, 220] }}>
      <OrbitControls />
      <Environment files={["./hospital_room_2_2k.hdr"]} />
      <ScrollControls pages={3}>
        <MacContainer />
      </ScrollControls>
    </Canvas>
  );
}

export default App