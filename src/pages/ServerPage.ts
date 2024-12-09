import * as THREE from 'three'
import ServerEntity from '../entity/ServerEntitiy';
import Page from './Page';

class ServerPage extends Page {
    protected camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera();
    constructor() {
        super();
        const server = new ServerEntity();
        const serverIns = server.create();

        // light.position.set(1, 2, 1);
        // serverIns.position.set(0, .05, 0);

        const ambientLight = new THREE.AmbientLight(0xffffff, .5);

        const sunlight = new THREE.DirectionalLight(0xffffff, 1); // 색상과 강도 설정
        sunlight.position.set(5, 10, 5); // 태양 위치 설정
        sunlight.castShadow = true; // 그림자 활성화

        // Shadow settings for sunlight
        sunlight.shadow.mapSize.width = 1024; // 그림자 해상도 (넓게 하면 더 부드러움)
        sunlight.shadow.mapSize.height = 1024;
        sunlight.shadow.camera.near = 0.5; // 그림자 카메라 설정
        sunlight.shadow.camera.far = 50;
        sunlight.shadow.camera.left = -10;
        sunlight.shadow.camera.right = 10;
        sunlight.shadow.camera.top = 10;
        sunlight.shadow.camera.bottom = -10;
        
        this.scene.add(ambientLight);
        this.scene.add(sunlight);
        this.scene.add(serverIns);
        this.camera.position.set(0, 0, 10);
        // this.camera.lookAt(serverIns.getObjectByName("lighta")!.position);
    }
    clear(): void {
    }
}

export default ServerPage;

