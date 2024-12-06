import * as THREE from 'three'
import Page from './Page';


class DefaultPage extends Page {
    protected camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera();
    clear(): void {
    }
    protected name = "default";
    constructor() {
        super();
        
    }
}

export default DefaultPage;
