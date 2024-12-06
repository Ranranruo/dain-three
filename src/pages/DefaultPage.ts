import * as THREE from 'three'
import Page from './Page';


class DefaultPage extends Page {
    protected camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera();
    clear(): void {
        throw new Error('Method not implemented.');
    }
    protected name = "default";
    constructor() {
        super();
        
    }
}

export default DefaultPage;
