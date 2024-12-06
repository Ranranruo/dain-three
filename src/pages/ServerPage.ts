import * as THREE from 'three'
import ServerEntity from '../entity/ServerEntitiy';
import Page from './Page';

class ServerPage extends Page {
    protected camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera();
    constructor() {
        super();
        const server = new ServerEntity();
        const serverIns = server.create();
        serverIns.position.set(0, 0, 0);
        this.scene.add(serverIns);
    }
    clear(): void {
    }
}

export default ServerPage;

