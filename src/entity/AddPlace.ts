import { GLTFLoader } from "three/examples/jsm/Addons.js";
import Entity from "./Entity";
import * as THREE from "three";

interface AddPlaceArgs {
  id: number;
  onClick: () => void;
  clicked: boolean;
}

class AddPlace {
  private id: number;
  private clicked: boolean;
  onClick: () => void;
  private textureLoader: THREE.TextureLoader;
  private gltfLoader: GLTFLoader;

  public constructor(args: AddPlaceArgs) {
    this.id = args.id;
    this.onClick = args.onClick;
    this.clicked = args.clicked;
    this.textureLoader = new THREE.TextureLoader();
    this.gltfLoader = new GLTFLoader();
  }

  create = async (): Promise<THREE.Group> => {
    const addPlace = new THREE.Group();
    if (this.clicked) {
      const gltf = await this.gltfLoader.loadAsync("/models/server/scene.gltf");
      gltf.scene.traverse((child) => {
        // child가 THREE.Mesh 인지 확인
        if (child instanceof THREE.Mesh) {
          child.name = `${this.id}`;
        }
      });

      const model = gltf.scene;
      model.scale.set(0.1, 0.1, 0.1);
      model.position.set(-0.5, 0, -0.65);
      model.name = "server";
      addPlace.add(model);
    } else {
      const geometry = new THREE.BoxGeometry(0.5, 0.1, 0.5);
      const material = new THREE.MeshStandardMaterial({
        color: 0xf08080,
        metalness: 0.6,
        roughness: 0.4,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.setY(0.05);
      mesh.name = `${this.id}`;
      addPlace.add(mesh);
    }
    return addPlace;
  };
}

export default AddPlace;
