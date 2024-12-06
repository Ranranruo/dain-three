import * as THREE from "three";

const app: HTMLElement = document.querySelector("#app")!;


abstract class Page{
    protected scene: THREE.Scene;
    protected abstract camera: THREE.PerspectiveCamera;

    constructor() {
        this.scene = new THREE.Scene();
    }

    getScene = (): THREE.Scene => {
        return this.scene;
    }

    getCamera = (): THREE.PerspectiveCamera => {
        return this.camera;
    }
    abstract clear(): void;
}

export default Page;